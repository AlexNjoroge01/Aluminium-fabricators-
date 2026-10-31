import { MessageCircle } from "lucide-react"

import { business } from "@/lib/site-content"

/** Persistent click-to-chat action for mobile and desktop. */
export function WhatsAppButton() {
  return (
    <a
      href={business.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with KENFAB on WhatsApp"
      className="fixed right-4 bottom-4 z-50 inline-flex items-center gap-2 border border-white/15 bg-[#111111] px-3.5 py-3 text-[10px] font-semibold tracking-[0.2em] text-white uppercase shadow-lg transition-colors hover:bg-white hover:text-[#111111] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111] md:right-6 md:bottom-6 print:hidden"
    >
      <MessageCircle className="size-4" aria-hidden />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  )
}
