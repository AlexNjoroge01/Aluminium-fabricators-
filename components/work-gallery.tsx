import Image from "next/image"

import { work } from "@/lib/site-content"
import { cn } from "@/lib/utils"

function WorkFigure({
  image,
  span,
}: {
  image: (typeof work.images)[number]
  span: string
}) {
  return (
    <figure className={cn("m-0", span)}>
      <div className="relative aspect-[4/3] overflow-hidden border border-border bg-secondary">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 768px) 58vw, 92vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <figcaption className="mt-3 text-[11px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
        {image.caption}
      </figcaption>
    </figure>
  )
}

export function WorkGallery() {
  const [first, second, third] = work.images
  if (!first || !second || !third) {
    // Too few supplied images — omit the gallery rather than use filler.
    return null
  }

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="border-b border-border py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-[11px] font-semibold tracking-[0.3em] text-muted-foreground uppercase">
          {work.eyebrow}
        </p>
        <h2
          id="work-heading"
          className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl"
        >
          {work.heading}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-12">
          <WorkFigure image={first} span="md:col-span-7" />
          <WorkFigure image={second} span="md:col-span-5" />
          <WorkFigure image={third} span="md:col-span-5 md:col-start-8" />
        </div>
      </div>
    </section>
  )
}
