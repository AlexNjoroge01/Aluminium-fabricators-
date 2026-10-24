import { Mail, MapPin, MessageCircle, Phone } from "lucide-react"

import { CopyContactButton } from "@/components/copy-contact-button"
import { business } from "@/lib/site-content"
import { cn } from "@/lib/utils"

const ctaBase =
  "inline-flex h-12 w-full items-center justify-center gap-2 text-sm font-medium transition-colors sm:h-11 sm:w-auto sm:px-7"

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-[#171717] py-16 text-white md:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.3em] text-white/50 uppercase">
              Contact
            </p>
            <h2
              id="contact-heading"
              className="mt-4 font-heading text-3xl font-extrabold tracking-tight md:text-4xl"
            >
              Have a project in mind?
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
              Tell us what you need fabricated and get in touch to discuss your
              project.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
                href={business.emailHref}
                className={cn(
                  ctaBase,
                  "border border-white/30 text-white hover:bg-white/10"
                )}
              >
                <Mail className="size-4" aria-hidden />
                Email us
              </a>
            </div>

            <a
              href={business.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 self-start text-sm text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              <MessageCircle className="size-3.5" aria-hidden />
              Message us on WhatsApp
            </a>

            <div className="mt-10">
              <span className="inline-flex border border-white/25 px-2.5 py-1 text-[10px] font-medium tracking-[0.25em] text-white/70 uppercase">
                Nairobi, Kenya
              </span>
            </div>
          </div>

          {/* Direct contact details */}
          <div aria-label="Contact details">
            <ul className="divide-y divide-white/10 border-y border-white/10">
              <li className="flex items-center justify-between gap-4 py-4">
                <a
                  href={business.phoneHref}
                  className="flex items-center gap-3 text-sm underline-offset-4 hover:underline md:text-base"
                >
                  <Phone
                    className="size-4 shrink-0 text-white/60"
                    aria-hidden
                  />
                  {business.phoneDisplay}
                </a>
                <CopyContactButton
                  value={business.phoneDisplay}
                  label="Phone number"
                />
              </li>
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
                Service area: {business.location}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
