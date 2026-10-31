import { business, nav } from "@/lib/site-content"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-secondary">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <p className="font-heading text-xs font-bold tracking-[0.22em] text-foreground uppercase md:text-sm">
              {business.wordmarkLine}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Aluminium, interiors, and light steel fabrication in Nairobi,
              Kenya.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {business.address}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-16 gap-y-8 sm:grid-cols-2 sm:gap-x-24">
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
                {business.phones.map((phone) => (
                  <li key={phone.href}>
                    <a
                      href={phone.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {phone.display}
                    </a>
                  </li>
                ))}
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
                    href={business.websiteHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {business.websiteDisplay}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <p>
            Reg. No. {business.registrationNumber} · PIN {business.pinNumber}
          </p>
        </div>
      </div>
    </footer>
  )
}
