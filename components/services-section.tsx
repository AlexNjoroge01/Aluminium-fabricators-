import { ArrowRight } from "lucide-react"

import { services } from "@/lib/site-content"
import { cn } from "@/lib/utils"

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="border-b border-border py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-[11px] font-semibold tracking-[0.3em] text-muted-foreground uppercase">
          What we do
        </p>
        <h2
          id="services-heading"
          className="mt-4 max-w-2xl font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl"
        >
          Fabrication for the way you use your space.
        </h2>

        {/* Catalogue grid: hairline separators, square corners */}
        <div className="mt-12 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className={cn(
                  "flex flex-col bg-background p-6 md:p-8",
                  // 3 cards on the first row, 2 wider cards on the second.
                  index < 3 ? "lg:col-span-2" : "lg:col-span-3",
                  index === services.length - 1 && "sm:col-span-2 sm:mb-0"
                )}
              >
                <div className="flex items-center justify-between text-muted-foreground">
                  <Icon className="size-5" strokeWidth={1.5} aria-hidden />
                  <span
                    aria-hidden
                    className="font-heading text-xs tracking-[0.3em]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-6 font-heading text-lg font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-medium text-foreground underline-offset-4 hover:underline"
                >
                  Request a quote
                  <ArrowRight className="size-3.5" aria-hidden />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
