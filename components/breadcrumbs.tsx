import Link from "next/link"
import { ChevronRight } from "lucide-react"

/**
 * Reusable, accessible breadcrumbs.
 *
 * The one-page homepage has no real page hierarchy, so this component is
 * intentionally not rendered there; it is ready for future hierarchical
 * pages (e.g. /services/aluminium-windows). Do not point it at anchor
 * fragments or other fake URLs.
 */
export type Crumb = {
  label: string
  href?: string
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={item.label} className="flex items-center gap-2">
              {isLast ? (
                <span
                  aria-current="page"
                  className="font-medium text-foreground"
                >
                  {item.label}
                </span>
              ) : item.href ? (
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
              {!isLast ? (
                <ChevronRight className="size-3.5" aria-hidden />
              ) : null}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
