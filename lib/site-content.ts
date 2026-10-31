import type { LucideIcon } from "lucide-react"
import {
  AppWindow,
  Building,
  DoorOpen,
  Fence,
  PanelsTopLeft,
  ShowerHead,
} from "lucide-react"

/**
 * Central content configuration for the site.
 *
 * Everything a client might want to change — business details, wordmark
 * lines, navigation, service copy, image paths and alt text — lives here.
 *
 * Content below is supplied by the client in companyprofile.md. Keep any
 * new claim (credentials, guarantees, prices, testimonials, hours) out
 * until it is confirmed by the client.
 */

export type ImageAsset = {
  src: string
  alt: string
  width: number
  height: number
}

export type ProjectImage = ImageAsset & {
  orientation: "landscape" | "portrait"
}

export type Project = {
  slug: string
  title: string
  scope: string
  /**
   * Three supplied photos per project, in filename order (1, 2, 3):
   * landscape, portrait, landscape.
   */
  images: [ProjectImage, ProjectImage, ProjectImage]
}

export type Service = {
  title: string
  description: string
  icon: LucideIcon
}

/* ------------------------------------------------------------------ */
/* Business identity & contact details (client-confirmed)              */
/* ------------------------------------------------------------------ */

export const business = {
  name: "KENFAB Aluminium and Interiors",
  legalName: "KENFAB Aluminium and Interiors",
  wordmarkLine: "KENFAB ALUMINIUM AND INTERIORS",
  wordmarkPrimary: "KENFAB",
  wordmarkSecondary: "Aluminium & Interiors",
  type: "Aluminium, interiors and light steel fabrication",
  foundedYear: 2019,
  location: "Nairobi, Kenya",
  address: "GW Cargo, off Old Mombasa Road, Nairobi",
  phoneDisplay: "+254 703 964 891",
  phoneHref: "tel:+254703964891",
  phones: [
    { display: "+254 703 964 891", href: "tel:+254703964891" },
    { display: "+254 735 636 494", href: "tel:+254735636494" },
  ],
  email: "kenfabaluminium@gmail.com",
  emailHref: "mailto:kenfabaluminium@gmail.com",
  websiteDisplay: "www.kenfabaluminium.com",
  websiteHref: "https://www.kenfabaluminium.com",
  whatsappHref:
    "https://wa.me/254703964891?text=Hello%20KENFAB%2C%20I%20would%20like%20to%20request%20a%20quote.",
  registrationNumber: "PVT-JZUGZZLB",
  pinNumber: "P052157746G",
  siteUrl: "https://www.kenfabaluminium.com",
} as const

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const

/* ------------------------------------------------------------------ */
/* Hero copy                                                           */
/* ------------------------------------------------------------------ */

export const hero = {
  h1Overline: "Aluminium & interiors · Nairobi, Kenya",
  headline: "Fabricated with precision. Built to last.",
  supportingCopy:
    "KENFAB designs and delivers bespoke aluminium, interior, and light steel solutions for homes, businesses, and institutions — from windows and facades to railings and shower cubicles.",
  primaryCta: { label: "Request a quote", href: "#contact" },
  secondaryCta: { label: "Explore our services", href: "#services" },
} as const

/* ------------------------------------------------------------------ */
/* Value ticker (factual messages only)                                */
/* ------------------------------------------------------------------ */

export const tickerItems = [
  "Aluminium · Interiors · Light steel",
  "Founded in 2019",
  "Bespoke solutions",
  "Nairobi, Kenya",
] as const

/* ------------------------------------------------------------------ */
/* About copy                                                          */
/* ------------------------------------------------------------------ */

export const about = {
  eyebrow: "About us",
  heading: "Transforming Kenyan spaces since 2019.",
  intro: [
    "KENFAB Aluminium and Interiors was founded in 2019 as an aluminium, interiors, and light steel fabrication company. We have since become a reputable player in transforming the Kenyan industry.",
    "Our executive team is led by three founders whose wealth of experience across diverse roles in the construction industry has driven the company's growth. That experience covers design, implementation, and project management in building and construction.",
    "We provide bespoke solutions tailored to each customer, serving everyone from small businesses to major enterprises. With the resources, capacity, and experience to meet current and future requirements, our entrepreneurial spirit and diverse, talented workforce keep us firmly committed to sound business practice and our customers' success.",
  ],
  facts: [
    { label: "Founded", value: "2019" },
    { label: "Registration no.", value: "PVT-JZUGZZLB" },
    { label: "PIN", value: "P052157746G" },
  ],
  vision: {
    label: "Vision",
    body: "To be a regional player in the provision of innovative and bespoke services and solutions in the fast, competitive market.",
  },
  mission: {
    label: "Mission",
    body: "We strive to deliver building services and solutions beyond our customers' expectations while earning reasonable returns to sustain our welfare and environmental surroundings.",
  },
} as const

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export const services = [
  {
    title: "Aluminium windows",
    description:
      "Supply and installation of aluminium windows, fabricated to fit each opening and finished to specification.",
    icon: AppWindow,
  },
  {
    title: "Aluminium doors",
    description:
      "Supply and installation of aluminium doors for residential and commercial projects, made to measure.",
    icon: DoorOpen,
  },
  {
    title: "Facades & glazing",
    description:
      "Aluminium facades and the glazing of windows and doors, delivered as part of the building envelope.",
    icon: PanelsTopLeft,
  },
  {
    title: "Aluminium railings",
    description:
      "Fabrication and installation of aluminium railings, designed and built to suit each project.",
    icon: Fence,
  },
  {
    title: "Frameless shower cubicles",
    description:
      "Frameless shower cubicle installation with clean lines, precise fittings, and a neat finish.",
    icon: ShowerHead,
  },
  {
    title: "Interiors & light steel",
    description:
      "Bespoke interior fit-outs and light steel fabrication, tailored to the design and function of your space.",
    icon: Building,
  },
] as const satisfies readonly Service[]

/* ------------------------------------------------------------------ */
/* Why choose us                                                       */
/* ------------------------------------------------------------------ */

export const whyChooseUs = {
  eyebrow: "Why choose us",
  heading: "Precision in every part of the process.",
  intro:
    "From the first measurement to the final installation, our work is guided by accuracy, quality materials, and a clear commitment to the client.",
  items: [
    {
      title: "Precision engineering",
      description:
        "Every product is meticulously crafted to the highest standards of accuracy, consistency, and industry grade.",
    },
    {
      title: "Quality materials",
      description:
        "We use high-grade aluminium built for strength, durability, and long-term performance.",
    },
    {
      title: "Custom fabrication",
      description:
        "Tailored solutions that match your exact design, function, and project requirements.",
    },
    {
      title: "Modern technology",
      description:
        "Advanced machinery and innovative techniques ensure a flawless finish.",
    },
    {
      title: "Reliable timelines",
      description:
        "Fast turnaround without compromising on workmanship or detail.",
    },
    {
      title: "Client-focused service",
      description:
        "Clear communication, project transparency, and dependable support from start to finish.",
    },
  ],
} as const

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const faq = {
  eyebrow: "FAQ",
  heading: "Questions, answered.",
  intro:
    "A few things clients often ask before starting a project. If your question isn't here, call, WhatsApp, or send us a message.",
  items: [
    {
      question: "What does KENFAB do?",
      answer:
        "KENFAB Aluminium and Interiors designs and delivers bespoke aluminium, interior, and light steel solutions. Our work includes aluminium windows, doors, facades, glazing, railings, frameless shower cubicles, interior fit-outs, and light steel fabrication.",
    },
    {
      question: "Do you supply and install?",
      answer:
        "Yes. Our project scopes cover the supply and installation of aluminium windows, doors, facades, and railings, as well as glazing and frameless shower cubicle installation.",
    },
    {
      question: "Where are you based and where do you work?",
      answer:
        "We are based at GW Cargo, off Old Mombasa Road, Nairobi, and take on projects across Kenya. Our portfolio includes work in Nairobi, Kajiado, and Kisumu.",
    },
    {
      question: "What types of projects do you take on?",
      answer:
        "We work on residential, commercial, and institutional projects, serving clients from small businesses to major enterprises. Every solution is tailored to the design and function of the space.",
    },
    {
      question: "Can you work to a custom design?",
      answer:
        "Yes. We provide bespoke solutions matched to each customer's design, function, and project requirements. Our team's experience covers design, implementation, and project management in building and construction.",
    },
    {
      question: "Is KENFAB a registered company?",
      answer:
        "Yes. KENFAB Aluminium and Interiors is a registered company. Our registration number is PVT-JZUGZZLB and our KRA PIN is P052157746G.",
    },
    {
      question: "Do you install frameless shower cubicles?",
      answer:
        "Yes — frameless shower cubicle installation is one of our services, alongside aluminium windows, doors, facades, glazing, railings, interiors, and light steel fabrication.",
    },
    {
      question: "How do I get a quote?",
      answer:
        "Call or WhatsApp us on +254 703 964 891 or +254 735 636 494, email kenfabaluminium@gmail.com, or fill in the contact form below. Tell us what you need, where the project is, and any timing you have in mind.",
    },
    {
      question: "How long does a project take?",
      answer:
        "Timelines depend on the scope, materials, and site requirements. Get in touch with your project details and we'll discuss a schedule with you.",
    },
  ],
} as const

/* ------------------------------------------------------------------ */
/* Portfolio (client-supplied project photos)                          */
/* ------------------------------------------------------------------ */

export const work = {
  eyebrow: "Portfolio",
  heading: "Selected projects.",
  intro:
    "Aluminium, glazing, and interior work delivered for clients across Kenya — from international airports to private residences.",
  projects: [
    {
      slug: "kisumu",
      title: "Kisumu International Airport",
      scope: "Supply and installation of aluminium windows and facades.",
      images: [
        {
          src: "/kisumu1.png",
          alt: "Aluminium windows and facades installed at Kisumu International Airport, view 1",
          width: 398,
          height: 400,
          orientation: "landscape",
        },
        {
          src: "/kisumu2.png",
          alt: "Aluminium windows and facades installed at Kisumu International Airport, view 2",
          width: 326,
          height: 497,
          orientation: "portrait",
        },
        {
          src: "/kisumu3.png",
          alt: "Aluminium windows and facades installed at Kisumu International Airport, view 3",
          width: 368,
          height: 371,
          orientation: "landscape",
        },
      ],
    },
    {
      slug: "kajiado",
      title: "Kajiado Hybrid",
      scope:
        "Supply and installation of aluminium windows, doors, and railings.",
      images: [
        {
          src: "/kajiado1.png",
          alt: "Aluminium windows, doors, and railings at Kajiado Hybrid, view 1",
          width: 372,
          height: 370,
          orientation: "landscape",
        },
        {
          src: "/kajiado2.png",
          alt: "Aluminium windows, doors, and railings at Kajiado Hybrid, view 2",
          width: 326,
          height: 539,
          orientation: "portrait",
        },
        {
          src: "/kajiado3.png",
          alt: "Aluminium windows, doors, and railings at Kajiado Hybrid, view 3",
          width: 375,
          height: 364,
          orientation: "landscape",
        },
      ],
    },
    {
      slug: "runda",
      title: "Runda Residence",
      scope:
        "Supply and installation of aluminium windows, doors, and railings.",
      images: [
        {
          src: "/runda1.png",
          alt: "Aluminium windows, doors, and railings at Runda Residence, view 1",
          width: 372,
          height: 373,
          orientation: "landscape",
        },
        {
          src: "/runda2.png",
          alt: "Aluminium windows, doors, and railings at Runda Residence, view 2",
          width: 333,
          height: 533,
          orientation: "portrait",
        },
        {
          src: "/runda3.png",
          alt: "Aluminium windows, doors, and railings at Runda Residence, view 3",
          width: 374,
          height: 371,
          orientation: "landscape",
        },
      ],
    },
    {
      slug: "kijani",
      title: "Kijani Ridge Residence",
      scope: "Glazing of windows, doors, and railings.",
      images: [
        {
          src: "/kijani1.png",
          alt: "Glazing of windows, doors, and railings at Kijani Ridge Residence, view 1",
          width: 374,
          height: 383,
          orientation: "landscape",
        },
        {
          src: "/kijani2.png",
          alt: "Glazing of windows, doors, and railings at Kijani Ridge Residence, view 2",
          width: 329,
          height: 507,
          orientation: "portrait",
        },
        {
          src: "/kijani3.png",
          alt: "Glazing of windows, doors, and railings at Kijani Ridge Residence, view 3",
          width: 371,
          height: 371,
          orientation: "landscape",
        },
      ],
    },
    {
      slug: "shower",
      title: "Shower Cubicles",
      scope: "Frameless shower cubicle installation.",
      images: [
        {
          src: "/shower1.png",
          alt: "Frameless shower cubicle installation, view 1",
          width: 363,
          height: 368,
          orientation: "landscape",
        },
        {
          src: "/shower2.png",
          alt: "Frameless shower cubicle installation, view 2",
          width: 327,
          height: 530,
          orientation: "portrait",
        },
        {
          src: "/shower3.png",
          alt: "Frameless shower cubicle installation, view 3",
          width: 369,
          height: 363,
          orientation: "landscape",
        },
      ],
    },
  ] satisfies readonly Project[],
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
