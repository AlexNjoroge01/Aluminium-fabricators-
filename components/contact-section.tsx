import { Globe, Mail, MapPin, MessageCircle, Phone } from "lucide-react"

import { ContactForm } from "@/components/contact-form"
import { CopyContactButton } from "@/components/copy-contact-button"
import { business } from "@/lib/site-content"
import { cn } from "@/lib/utils"

const ctaBase =
  "inline-flex h-12 w-full items-center justify-center gap-2 text-sm font-medium transition-colors sm:h-11 sm:w-auto sm:px-6"

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-[#171717] py-16 text-white md:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold tracking-[0.3em] text-white/50 uppercase">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-4 font-heading text-3xl font-extrabold tracking-tight md:text-4xl"
          >
            Have a project in mind?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/70">
            Tell us what you need fabricated and get in touch to discuss your
            project. Use the form, call us, or send a WhatsApp message —
            whichever is easiest.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Direct contact details */}
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={business.phoneHref}
                className={cn(
                  ctaBase,
                  "bg-white text-[#111111] hover:bg-white/90"
                )}
              >
                <Phone className="size-4" aria-hidden />
                Call now
              </a>
              <a
                href={business.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  ctaBase,
                  "border border-white/30 text-white hover:bg-white/10"
                )}
              >
                <MessageCircle className="size-4" aria-hidden />
                WhatsApp us
              </a>
            </div>

            <p className="mt-10 text-[11px] font-semibold tracking-[0.3em] text-white/50 uppercase">
              Direct contacts
            </p>
            <ul
              aria-label="Contact details"
              className="mt-4 divide-y divide-white/10 border-y border-white/10"
            >
              {business.phones.map((phone) => (
                <li
                  key={phone.href}
                  className="flex items-center justify-between gap-4 py-4"
                >
                  <a
                    href={phone.href}
                    className="flex items-center gap-3 text-sm underline-offset-4 hover:underline md:text-base"
                  >
                    <Phone
                      className="size-4 shrink-0 text-white/60"
                      aria-hidden
                    />
                    {phone.display}
                  </a>
                  <CopyContactButton
                    value={phone.display}
                    label="Phone number"
                  />
                </li>
              ))}
              <li className="flex items-center justify-between gap-4 py-4">
                <a
                  href={business.emailHref}
                  className="flex items-center gap-3 text-sm underline-offset-4 hover:underline md:text-base"
                >
                  <Mail className="size-4 shrink-0 text-white/60" aria-hidden />
                  {business.email}
                </a>
                <CopyContactButton
                  value={business.email}
                  label="Email address"
                />
              </li>
              <li className="flex items-center gap-3 py-4 text-sm text-white/70 md:text-base">
                <MapPin className="size-4 shrink-0 text-white/60" aria-hidden />
                {business.address}
              </li>
              <li className="flex items-center justify-between gap-4 py-4">
                <a
                  href={business.websiteHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm underline-offset-4 hover:underline md:text-base"
                >
                  <Globe
                    className="size-4 shrink-0 text-white/60"
                    aria-hidden
                  />
                  {business.websiteDisplay}
                </a>
                <CopyContactButton
                  value={business.websiteDisplay}
                  label="Website"
                />
              </li>
            </ul>
          </div>

          {/* Enquiry form */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="bg-white p-6 text-foreground md:p-8">
              <h3 className="font-heading text-xl font-extrabold tracking-tight">
                Send us a message
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Tell us about your project and we&apos;ll come back to you.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
