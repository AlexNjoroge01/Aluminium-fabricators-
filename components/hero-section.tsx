import Image from "next/image"
import { ArrowRight, Phone } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { business, hero, images } from "@/lib/site-content"
import { cn } from "@/lib/utils"

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-secondary to-background"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-stretch gap-10 pt-10 pb-12 md:pt-14 md:pb-16 lg:grid-cols-2 lg:gap-16 lg:pt-20 lg:pb-24">
          {/* Copy */}
          <div className="order-2 flex flex-col justify-center lg:order-1">
            <h1>
              <span className="block font-heading text-[11px] font-semibold tracking-[0.3em] text-muted-foreground uppercase">
                {hero.h1Overline}
              </span>
              <span className="mt-4 block font-heading text-4xl leading-[1.05] font-extrabold tracking-tight text-foreground md:text-6xl">
                {hero.headline}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              {hero.supportingCopy}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={hero.primaryCta.href}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 w-full justify-center sm:h-11 sm:w-auto sm:px-7"
                )}
              >
                {hero.primaryCta.label}
                <ArrowRight data-icon="inline-end" />
              </a>
              <a
                href={hero.secondaryCta.href}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 w-full justify-center sm:h-11 sm:w-auto sm:px-7"
                )}
              >
                {hero.secondaryCta.label}
              </a>
            </div>

            <a
              href={business.phoneHref}
              className="mt-4 inline-flex items-center gap-2 self-start text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              <Phone className="size-3.5" aria-hidden />
              Call us
            </a>
          </div>

          {/* Photography */}
          <div className="relative order-1 min-h-72 overflow-hidden border border-border sm:min-h-96 lg:order-2 lg:min-h-[560px]">
            <Image
              src={images.hero.src}
              alt={images.hero.alt}
              width={images.hero.width}
              height={images.hero.height}
              priority
              sizes="(min-width: 1024px) 50vw, 92vw"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Subtle metal-sheen wash; keeps the panel present if the
                image fails to load. */}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"
            />
          </div>
        </div>
      </div>

      {/* Vertical scroll cue — larger screens only */}
      <a
        href="#about"
        className="absolute bottom-8 left-8 hidden items-start gap-3 lg:flex"
      >
        <span className="text-[10px] font-medium tracking-[0.35em] text-muted-foreground uppercase [writing-mode:vertical-rl]">
          Scroll to explore
        </span>
        <span aria-hidden className="h-16 w-px bg-border" />
      </a>
    </section>
  )
}
