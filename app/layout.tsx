import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { business, images } from "@/lib/site-content"
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title:
    "KENFAB Aluminium and Interiors | Aluminium & Interior Fabrication in Nairobi",
  description:
    "KENFAB Aluminium and Interiors supplies and installs aluminium windows, doors, facades, railings, and frameless shower cubicles, plus interior fit-outs and light steel fabrication in Nairobi, Kenya.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "KENFAB Aluminium and Interiors | Aluminium & Interior Fabrication in Nairobi",
    description:
      "Bespoke aluminium, interior, and light steel fabrication in Nairobi, Kenya. Windows, doors, facades, railings, shower cubicles, and fit-outs.",
    url: "/",
    siteName: business.name,
    type: "website",
    locale: "en_KE",
    images: [
      {
        url: images.hero.src,
        width: images.hero.width,
        height: images.hero.height,
        alt: images.hero.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "font-sans antialiased",
        inter.variable,
        montserrat.variable
      )}
    >
      <body>
        {/* The visual direction is a light, monochrome catalogue; keep the
            site consistently light rather than following system dark mode. */}
        <ThemeProvider defaultTheme="light" enableSystem={false}>
          <TooltipProvider>{children}</TooltipProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
