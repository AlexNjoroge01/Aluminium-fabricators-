"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { business, nav } from "@/lib/site-content"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  // Close the mobile panel with Escape.
  useEffect(() => {
    if (!open) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <a
          href="#top"
          className="font-heading text-xs font-bold tracking-[0.22em] text-foreground uppercase md:text-sm"
        >
          {business.wordmarkLine}
        </a>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className={cn(buttonVariants({ size: "sm" }), "px-4")}
          >
            Contact us
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex size-9 items-center justify-center text-foreground md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile navigation panel */}
      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="border-t border-border bg-background md:hidden"
        >
          <ul className="mx-auto max-w-7xl px-5 py-2">
            {nav.map((item) => (
              <li
                key={item.href}
                className="border-b border-border/70 last:border-0"
              >
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-3.5 text-sm font-medium text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2 pb-4">
              <a
                href={business.phoneHref}
                className="text-sm text-muted-foreground underline-offset-4 hover:underline"
              >
                Or call {business.phoneDisplay}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
