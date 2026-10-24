import type { LucideIcon } from "lucide-react"
import { AppWindow, DoorOpen, Frame, PanelsTopLeft, Store } from "lucide-react"

/**
 * Central content configuration for the site.
 *
 * Everything a client might want to change — business details, wordmark
 * lines, navigation, service copy, image paths and alt text — lives here.
 *
 * IMPORTANT (draft content):
 * - The business name and service categories below are candidates drafted
 *   from the brief. Confirm the exact services and any installed/glass
 *   scope with the client before publishing.
 * - No credentials, guarantees, prices, testimonials or hours are claimed
 *   anywhere; do not add them here without client confirmation.
 */

export type ImageAsset = {
  src: string
  alt: string
  width: number
  height: number
}

export type WorkImage = ImageAsset & {
  /** Short, honest caption describing what the image shows. */
  caption: string
}

export type Service = {
  title: string
  description: string
  icon: LucideIcon
  /** Optional photo; when absent a neutral designed placeholder is shown. */
  image?: ImageAsset
}

/* ------------------------------------------------------------------ */
/* Business identity & contact details (client-confirmed)              */
/* ------------------------------------------------------------------ */

export const business = {
  name: "Jeffrey Aluminium Fabricators",
  wordmarkLine: "JEFFREY ALUMINIUM FABRICATORS",
  type: "Aluminium fabricator",
  location: "Nairobi, Kenya",
  phoneDisplay: "+254 723 138 122",
  phoneHref: "tel:+254723138122",
  email: "jescrivah92@gmail.com",
  emailHref: "mailto:jescrivah92@gmail.com",
  whatsappHref:
    "https://wa.me/254723138122?text=Hello%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20aluminium%20fabrication.",
  /**
   * Set to the final production domain (e.g. "https://example.com") once
   * confirmed. Canonical URLs, the sitemap and structured-data URLs are
   * intentionally left unset until then.
   */
  siteUrl: "",
} as const

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const

/* ------------------------------------------------------------------ */
/* Hero copy                                                           */
/* ------------------------------------------------------------------ */

/** "Aluminium Fabrication in Nairobi, Kenya" is the H1 overline; the
 * headline below it carries the brand voice. */
export const hero = {
  h1Overline: "Aluminium Fabrication · Nairobi, Kenya",
  headline: "Aluminium, crafted with precision.",
  /** Draft copy — confirm the actual scope (homes/businesses) with client. */
  supportingCopy:
    "Aluminium fabrication solutions for homes, businesses, and spaces that demand a clean, lasting finish.",
  primaryCta: { label: "Request a quote", href: "#contact" },
  secondaryCta: { label: "Explore our services", href: "#services" },
} as const

/* ------------------------------------------------------------------ */
/* Value ticker (factual messages only)                                */
/* ------------------------------------------------------------------ */

export const tickerItems = [
  "Custom aluminium fabrication",
  "Serving Nairobi, Kenya",
  "Contact us for a quote",
] as const

/* ------------------------------------------------------------------ */
/* About copy                                                          */
/* ------------------------------------------------------------------ */

export const about = {
  eyebrow: "About",
  heading: "Built around your space.",
  /** Neutral introduction — no invented history or credentials. */
  body: "Jeffrey Aluminium Fabricators is an aluminium fabrication business based in Nairobi, Kenya. We keep the work simple and disciplined: understand the space, fabricate to fit it, and finish the job cleanly.",
  /** Factual, low-key value points — easy to adjust with the client. */
  valuePoints: [
    {
      title: "Attention to detail",
      description: "Measured and fabricated to fit the opening.",
    },
    {
      title: "Practical solutions",
      description: "Fabrication that suits how the space is actually used.",
    },
    {
      title: "A clean finish",
      description: "Neat aluminium work with a tidy, lasting appearance.",
    },
  ],
} as const

/* ------------------------------------------------------------------ */
/* Services (candidate categories — confirm before publishing)         */
/* ------------------------------------------------------------------ */

export const services = [
  {
    title: "Aluminium windows",
    description:
      "Aluminium windows fabricated to measure, with a neat frame finish that suits the opening.",
    icon: AppWindow,
  },
  {
    title: "Aluminium doors",
    description:
      "Aluminium doors fabricated to fit their openings, with a clean and durable finish.",
    icon: DoorOpen,
  },
  {
    title: "Shopfronts",
    description:
      "Aluminium shopfront frames fabricated for commercial spaces, built to the required dimensions.",
    icon: Store,
  },
  {
    title: "Office partitions",
    description:
      "Aluminium partition frames that divide workspaces cleanly and practically.",
    icon: PanelsTopLeft,
  },
  {
    title: "Custom fabrication",
    description:
      "Custom aluminium frames and related fabrication work, made to fit the brief.",
    icon: Frame,
  },
] as const satisfies readonly Service[]

/* ------------------------------------------------------------------ */
/* Work gallery (client-supplied photos, honest captions)              */
/* ------------------------------------------------------------------ */

export const work = {
  eyebrow: "Selected work",
  heading: "Made to fit. Built to work.",
  images: [
    {
      src: "/images/aluminium/aluminium-welding-panel.png",
      alt: "Welder wearing a helmet and gloves welding a metal panel in a workshop",
      width: 735,
      height: 409,
      caption: "Fabrication work",
    },
    {
      src: "/images/aluminium/aluminium-fabrication-machinery.png",
      alt: "Industrial aluminium fabrication machinery operating on a component",
      width: 629,
      height: 474,
      caption: "Fabrication machinery",
    },
    {
      src: "/images/aluminium/aluminium-cnc-punching.png",
      alt: "CNC punching machine working on a perforated aluminium sheet",
      width: 545,
      height: 535,
      caption: "Precision machining",
    },
  ] satisfies WorkImage[],
}

/* ------------------------------------------------------------------ */
/* Supplied photography                                                */
/* ------------------------------------------------------------------ */

export const images = {
  hero: {
    src: "/images/aluminium/aluminium-profiles-rack.png",
    alt: "Racks of aluminium profiles, tubes and extrusion stock organised in a fabrication workshop",
    width: 567,
    height: 331,
  } satisfies ImageAsset,
  about: {
    src: "/images/aluminium/aluminium-welding-workshop.png",
    alt: "Fabricator in protective gear welding an aluminium frame on a workshop jig table",
    width: 669,
    height: 438,
  } satisfies ImageAsset,
}
