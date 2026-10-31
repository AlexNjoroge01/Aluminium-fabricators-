"use client"

import { useActionState, useEffect, useRef } from "react"
import {
  AlertCircle,
  ArrowUpRight,
  Check,
  ChevronDown,
  Loader2,
  Mail,
  Send,
} from "lucide-react"

import { sendContactMessage } from "@/app/actions/contact"
import {
  contactServiceOptions,
  initialContactState,
  type ContactFormState,
} from "@/lib/contact"
import { cn } from "@/lib/utils"

const labelClass =
  "block text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase"

const inputClass =
  "h-11 w-full border border-border bg-white px-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground/60 focus:border-foreground focus:ring-1 focus:ring-foreground focus:outline-none aria-invalid:border-destructive aria-invalid:ring-destructive/20"

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} className="mt-1.5 text-xs leading-relaxed text-destructive">
      {message}
    </p>
  )
}

function StatusMessage({ state }: { state: ContactFormState }) {
  const isError = state.status === "error"
  const isSuccess = state.status === "success"
  const Icon = isError ? AlertCircle : isSuccess ? Check : Mail

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "mb-6 flex gap-3 border p-3 text-sm leading-relaxed",
        isError
          ? "border-destructive/30 bg-destructive/5 text-destructive"
          : "border-border bg-secondary text-foreground"
      )}
    >
      <Icon className="mt-0.5 size-4 shrink-0" aria-hidden />
      <div>
        <p>{state.message}</p>
        {state.mailtoHref &&
        (state.status === "fallback" || state.status === "error") ? (
          <a
            href={state.mailtoHref}
            className="mt-2 inline-flex items-center gap-1.5 font-medium underline underline-offset-4"
          >
            Open your email app
            <ArrowUpRight className="size-3.5" aria-hidden />
          </a>
        ) : null}
      </div>
    </div>
  )
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialContactState
  )
  const formRef = useRef<HTMLFormElement>(null)
  const errors = state.fieldErrors

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset()
    }
  }, [state])

  return (
    <form ref={formRef} action={formAction} className="mt-6">
      {state.status !== "idle" ? <StatusMessage state={state} /> : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={100}
            className={cn(inputClass, "mt-2")}
            aria-invalid={errors?.name ? true : undefined}
            aria-describedby={errors?.name ? "name-error" : undefined}
          />
          <FieldError id="name-error" message={errors?.name} />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            className={cn(inputClass, "mt-2")}
            aria-invalid={errors?.email ? true : undefined}
            aria-describedby={errors?.email ? "email-error" : undefined}
          />
          <FieldError id="email-error" message={errors?.email} />
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="normal-case">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={40}
            className={cn(inputClass, "mt-2")}
            aria-invalid={errors?.phone ? true : undefined}
            aria-describedby={errors?.phone ? "phone-error" : undefined}
          />
          <FieldError id="phone-error" message={errors?.phone} />
        </div>

        <div>
          <label htmlFor="service" className={labelClass}>
            What do you need?
          </label>
          <div className="relative mt-2">
            <select
              id="service"
              name="service"
              required
              defaultValue=""
              className={cn(inputClass, "appearance-none pr-9")}
              aria-invalid={errors?.service ? true : undefined}
              aria-describedby={errors?.service ? "service-error" : undefined}
            >
              <option value="" disabled>
                Select a service
              </option>
              {contactServiceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
          </div>
          <FieldError id="service-error" message={errors?.service} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Project details
          </label>
          <textarea
            id="message"
            name="message"
            required
            minLength={10}
            maxLength={3000}
            rows={5}
            placeholder="Tell us what you need fabricated, where the project is, and any timing you have in mind."
            className={cn(inputClass, "mt-2 h-auto min-h-32 resize-y py-3")}
            aria-invalid={errors?.message ? true : undefined}
            aria-describedby={errors?.message ? "message-error" : undefined}
          />
          <FieldError id="message-error" message={errors?.message} />
        </div>

        {/* Honeypot: hidden from people, tempting to bots. */}
        <div
          className="absolute top-auto -left-[9999px] h-px w-px overflow-hidden"
          aria-hidden="true"
        >
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={pending}
            className="inline-flex h-12 w-full items-center justify-center gap-2 bg-[#111111] px-6 text-sm font-medium text-white transition-colors hover:bg-[#2a2a2a] focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60"
          >
            {pending ? (
              <>
                <Loader2
                  className="size-4 animate-spin motion-reduce:animate-none"
                  aria-hidden
                />
                Sending…
              </>
            ) : (
              <>
                <Send className="size-4" aria-hidden />
                Send message
              </>
            )}
          </button>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            Your details are only used to reply to this enquiry.
          </p>
        </div>
      </div>
    </form>
  )
}
