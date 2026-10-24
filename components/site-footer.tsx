import { business, nav } from "@/lib/site-content"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-secondary">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-heading text-xs font-bold tracking-[0.22em] text-foreground uppercase md:text-sm">
              {business.wordmarkLine}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Aluminium fabrication in Nairobi, Kenya.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-16 gap-y-2 sm:gap-x-24">
            <nav aria-label="Footer">
              <p className="text-[10px] font-semibold tracking-[0.3em] text-muted-foreground uppercase">
                Site
              </p>
              <ul className="mt-4 space-y-2.5">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="text-[10px] font-semibold tracking-[0.3em] text-muted-foreground uppercase">
                Contact
              </p>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href={business.phoneHref}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {business.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={business.emailHref}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {business.email}
                  </a>
                </li>
                <li>
                  <a
                    href={business.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
          © {year} {business.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
