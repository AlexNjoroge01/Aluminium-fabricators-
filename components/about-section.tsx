import Image from "next/image"
import { Compass, Target } from "lucide-react"

import { about, images } from "@/lib/site-content"

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-border py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Photography + company facts */}
          <div className="lg:col-span-5">
            <figure className="m-0">
              <div className="relative aspect-[3/2] overflow-hidden border border-border bg-secondary">
                <Image
                  src={images.about.src}
                  alt={images.about.alt}
                  width={images.about.width}
                  height={images.about.height}
                  sizes="(min-width: 1024px) 40vw, 92vw"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </figure>

            <dl className="mt-6 divide-y divide-border border-y border-border">
              {about.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-baseline justify-between gap-4 py-3"
                >
                  <dt className="text-[11px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
                    {fact.label}
                  </dt>
                  <dd className="font-heading text-sm font-bold tracking-tight text-foreground">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Copy */}
          <div className="lg:col-span-7">
            <p className="text-[11px] font-semibold tracking-[0.3em] text-muted-foreground uppercase">
              {about.eyebrow}
            </p>
            <h2
              id="about-heading"
              className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl"
            >
              {about.heading}
            </h2>

            <div className="mt-6 space-y-4">
              {about.intro.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-2xl text-base leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2">
              {[about.vision, about.mission].map((statement) => {
                const Icon = statement.label === "Vision" ? Target : Compass
                return (
                  <article key={statement.label} className="bg-background p-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon className="size-4" strokeWidth={1.5} aria-hidden />
                      <h3 className="font-heading text-[11px] font-bold tracking-[0.25em] uppercase">
                        {statement.label}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {statement.body}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
