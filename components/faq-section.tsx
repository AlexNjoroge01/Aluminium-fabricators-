import { ArrowRight, Plus } from "lucide-react"

import { faq } from "@/lib/site-content"

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-b border-border py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-[11px] font-semibold tracking-[0.3em] text-muted-foreground uppercase">
              {faq.eyebrow}
            </p>
            <h2
              id="faq-heading"
              className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl"
            >
              {faq.heading}
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              {faq.intro}
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              Ask us directly
              <ArrowRight className="size-3.5" aria-hidden />
            </a>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-border border-y border-border">
              {faq.items.map((item, index) => (
                <details key={item.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start gap-4">
                      <span
                        aria-hidden
                        className="mt-0.5 font-heading text-xs font-medium tracking-[0.2em] text-muted-foreground"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-heading text-base font-bold tracking-tight text-foreground md:text-lg">
                        {item.question}
                      </span>
                    </span>
                    <Plus
                      className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform duration-200 motion-reduce:transition-none [details[open]_&]:rotate-45"
                      aria-hidden
                    />
                  </summary>
                  <p className="mt-3 max-w-2xl pl-9 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
