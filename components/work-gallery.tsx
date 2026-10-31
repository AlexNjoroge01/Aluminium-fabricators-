import Image from "next/image"

import { work, type Project } from "@/lib/site-content"
import { cn } from "@/lib/utils"

type ProjectImage = Project["images"][number]

/**
 * The supplied photos are two near-square landscapes and one 2:3
 * portrait. On desktop they are laid out as a single filmstrip with a
 * common height: the narrow portrait is always flanked by the wide
 * landscapes, so no image has to be stretched or left hanging.
 */
function ProjectFigure({
  image,
  order,
}: {
  image: ProjectImage
  order: string
}) {
  const isPortrait = image.orientation === "portrait"

  return (
    <figure
      className={cn(
        "group m-0 md:h-full",
        isPortrait ? "md:col-span-2" : "md:col-span-3",
        order
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden border border-border bg-secondary",
          isPortrait ? "aspect-[2/3] md:aspect-auto md:h-full" : "aspect-square"
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={
            isPortrait
              ? "(min-width: 768px) 25vw, 92vw"
              : "(min-width: 768px) 38vw, 92vw"
          }
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
        />
      </div>
    </figure>
  )
}

function ProjectBlock({ project, index }: { project: Project; index: number }) {
  const [first, portrait, second] = project.images

  // Portrait position cycles left → centre → right, then repeats.
  const orderSets = [
    { first: "md:order-2", portrait: "md:order-1", second: "md:order-3" },
    { first: "md:order-1", portrait: "md:order-2", second: "md:order-3" },
    { first: "md:order-1", portrait: "md:order-3", second: "md:order-2" },
  ] as const
  const orders = orderSets[index % orderSets.length]!

  return (
    <article className="border-t border-border pt-8 first:border-t-0 first:pt-0">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
        <h3 className="flex items-baseline gap-4 font-heading text-xl font-bold tracking-tight text-foreground">
          <span className="text-xs font-medium tracking-[0.3em] text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          {project.title}
        </h3>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-right">
          {project.scope}
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-8">
        <ProjectFigure image={first} order={orders.first} />
        <ProjectFigure image={portrait} order={orders.portrait} />
        <ProjectFigure image={second} order={orders.second} />
      </div>
    </article>
  )
}

export function WorkGallery() {
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
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {work.intro}
        </p>

        <div className="mt-12 space-y-14 md:space-y-20">
          {work.projects.map((project, index) => (
            <ProjectBlock key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
