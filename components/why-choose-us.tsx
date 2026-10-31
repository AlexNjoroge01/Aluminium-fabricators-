import { whyChooseUs } from "@/lib/site-content"

export function WhyChooseUsSection() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="border-b border-border bg-secondary py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-[11px] font-semibold tracking-[0.3em] text-muted-foreground uppercase">
          {whyChooseUs.eyebrow}
        </p>
        <h2
          id="why-us-heading"
          className="mt-4 max-w-2xl font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl"
        >
          {whyChooseUs.heading}
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {whyChooseUs.intro}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.items.map((item, index) => (
            <article
              key={item.title}
              className="flex flex-col bg-secondary p-6 md:p-8"
            >
              <span
                aria-hidden
                className="font-heading text-xs tracking-[0.3em] text-muted-foreground"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-heading text-lg font-bold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
