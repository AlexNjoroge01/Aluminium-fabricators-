"use server"

import { createTransport } from "nodemailer"

import {
  contactServiceOptions,
  type ContactField,
  type ContactFormState,
} from "@/lib/contact"
import { business } from "@/lib/site-content"

const MAX = {
  name: 100,
  email: 254,
  phone: 40,
  message: 3000,
}

function read(formData: FormData, key: string) {
  const value = formData.get(key)
  return typeof value === "string" ? value.trim() : ""
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character]!
  )
}

function buildMailto(details: {
  name: string
  email: string
  phone: string
  service: string
  message: string
}) {
  const subject = `Website enquiry — ${details.service}`
  const body = [
    `Name: ${details.name}`,
    `Email: ${details.email}`,
    details.phone ? `Phone: ${details.phone}` : null,
    `Service: ${details.service}`,
    "",
    details.message,
  ]
    .filter((line) => line !== null)
    .join("\n")

  return `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export async function sendContactMessage(
  previousState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  void previousState

  // Honeypot: real visitors never see or fill this field.
  if (read(formData, "website")) {
    return {
      status: "success",
      message: "Thanks — your message has been sent.",
    }
  }

  const name = read(formData, "name")
  const email = read(formData, "email")
  const phone = read(formData, "phone")
  const service = read(formData, "service")
  const message = read(formData, "message")

  const fieldErrors: Partial<Record<ContactField, string>> = {}

  if (name.length < 2 || name.length > MAX.name) {
    fieldErrors.name = "Please enter your name."
  }

  if (email.length > MAX.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldErrors.email = "Please enter a valid email address."
  }

  if (phone.length > MAX.phone) {
    fieldErrors.phone = "Please enter a shorter phone number."
  } else if (phone && !/^[+()\d\s-]{6,}$/.test(phone)) {
    fieldErrors.phone = "Please enter a valid phone number."
  }

  if (!(contactServiceOptions as readonly string[]).includes(service)) {
    fieldErrors.service = "Please choose the service you need."
  }

  if (message.length < 10 || message.length > MAX.message) {
    fieldErrors.message =
      "Please tell us a little more about your project (at least 10 characters)."
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please check the highlighted fields and try again.",
      fieldErrors,
    }
  }

  const details = { name, email, phone, service, message }
  const mailtoHref = buildMailto(details)

  const smtpUser = process.env.SMTP_USER?.trim()
  const smtpPass = process.env.SMTP_PASS?.trim()

  if (!smtpUser || !smtpPass) {
    return {
      status: "fallback",
      message:
        "Automatic email delivery is not set up on this deployment yet. You can send the same details straight from your email app.",
      mailtoHref,
    }
  }

  const port = Number(process.env.SMTP_PORT ?? 465) || 465
  const secure = process.env.SMTP_SECURE
    ? process.env.SMTP_SECURE === "true"
    : port === 465

  const transporter = createTransport({
    host: process.env.SMTP_HOST?.trim() || "smtp.gmail.com",
    port,
    secure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  })

  const text = [
    "New website enquiry",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    `Service: ${service}`,
    "",
    "Message:",
    message,
  ]
    .filter((line) => line !== null)
    .join("\n")

  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #111111; font-size: 14px; line-height: 1.6;">
      <h1 style="font-size: 20px; margin: 0 0 16px;">New website enquiry</h1>
      <table cellpadding="6" cellspacing="0" style="border-collapse: collapse; margin-bottom: 20px;">
        <tr><td style="color: #686868;">Name</td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="color: #686868;">Email</td><td>${escapeHtml(email)}</td></tr>
        ${phone ? `<tr><td style="color: #686868;">Phone</td><td>${escapeHtml(phone)}</td></tr>` : ""}
        <tr><td style="color: #686868;">Service</td><td>${escapeHtml(service)}</td></tr>
      </table>
      <h2 style="font-size: 15px; margin: 0 0 8px;">Message</h2>
      <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(message)}</p>
    </div>
  `

  try {
    await transporter.sendMail({
      from: `"KENFAB Website" <${smtpUser}>`,
      to: process.env.CONTACT_TO_EMAIL?.trim() || business.email,
      replyTo: email,
      subject: `Website enquiry — ${service} (${name})`,
      text,
      html,
    })

    return {
      status: "success",
      message:
        "Thanks — your message has been sent. We'll get back to you as soon as we can.",
    }
  } catch (error) {
    console.error("Contact form email failed:", error)

    return {
      status: "error",
      message:
        "We couldn't send your message right now. Please try again, or send the same details directly from your email app.",
      mailtoHref,
    }
  }
}
