import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
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
  title:
    "Aluminium Fabricator in Nairobi, Kenya | Jeffrey Aluminium Fabricators",
  description:
    "Looking for aluminium fabrication in Nairobi, Kenya? Contact Jeffrey Aluminium Fabricators to discuss your aluminium fabrication project and request a quote.",
  openGraph: {
    title:
      "Aluminium Fabricator in Nairobi, Kenya | Jeffrey Aluminium Fabricators",
    description:
      "Aluminium fabrication in Nairobi, Kenya — call, email, or get in touch to request a quote for your project.",
    type: "website",
    siteName: "Jeffrey Aluminium Fabricators",
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
