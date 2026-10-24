import { tickerItems } from "@/lib/site-content"

export function ValueTicker() {
  return (
    // Static, high-contrast strip — factual messages only.
    <div className="border-y border-foreground bg-foreground text-background">
      <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-10 gap-y-0 px-5 py-3.5 md:px-8">
        {tickerItems.map((item) => (
          <li
            key={item}
            className="text-[11px] font-medium tracking-[0.25em] text-white/85 uppercase"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
