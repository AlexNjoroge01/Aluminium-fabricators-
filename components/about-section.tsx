import Image from "next/image"

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
          {/* Photography */}
          <figure className="lg:col-span-5">
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
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {about.body}
            </p>

            <dl className="mt-12 grid gap-8 border-t border-border pt-8 sm:grid-cols-3">
              {about.valuePoints.map((point, index) => (
                <div key={point.title}>
                  <dt className="font-heading text-sm font-bold tracking-[0.2em] text-foreground uppercase">
                    <span className="mr-2 text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {point.title}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {point.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
