import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  // Allow all legitimate crawlers, including AI crawlers.
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    // Add "sitemap" once the production domain is confirmed in
    // lib/site-content.ts.
  }
}
