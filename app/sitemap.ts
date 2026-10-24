import type { MetadataRoute } from "next"

import { business } from "@/lib/site-content"

export default function sitemap(): MetadataRoute.Sitemap {
  // No placeholder domain is invented for the canonical URL. Set
  // business.siteUrl in lib/site-content.ts to the confirmed production
  // domain and this sitemap will resolve.
  if (!business.siteUrl) {
    return []
  }

  return [
    {
      url: business.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}
