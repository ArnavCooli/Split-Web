import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Single-page marketing site: the root plus the in-page section anchors
  // that carry standalone intent and appear in the nav.
  const anchors = ["features", "how-it-works", "compare"];

  return [
    {
      url: site.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...anchors.map((id) => ({
      url: `${site.url}/#${id}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
