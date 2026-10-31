import type { MetadataRoute } from "next"

import { business } from "@/lib/site-content"

export default function robots(): MetadataRoute.Robots {
  // Allow all legitimate crawlers, including AI crawlers.
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${business.siteUrl}/sitemap.xml`,
  }
}
