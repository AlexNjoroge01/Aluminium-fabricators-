"use client"

import { Copy } from "lucide-react"
import { toast } from "sonner"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function CopyContactButton({
  value,
  label,
}: {
  value: string
  label: string
}) {
  async function copy() {
    try {
      await navigator.clipboard.writeText(value)
      toast.success(`${label} copied`)
    } catch {
      toast.error("Could not copy — please copy it manually")
    }
  }

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <button
            type="button"
            onClick={copy}
            aria-label={`Copy ${label.toLowerCase()}`}
            className="inline-flex size-9 items-center justify-center rounded-none text-white/60 transition-colors hover:bg-white/10 hover:text-white"
          />
        }
      >
        <Copy className="size-4" aria-hidden />
      </TooltipTrigger>
      <TooltipContent>Copy to clipboard</TooltipContent>
    </Tooltip>
  )
}
