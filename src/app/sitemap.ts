import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

const pages = ["", "/docs", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-03-23T00:00:00.000Z");

  return pages.map((page) => ({
    url: `${siteConfig.url}${page}`,
    lastModified,
    changeFrequency: page === "" ? "weekly" : "monthly",
    priority: page === "" ? 1 : 0.6,
  }));
}
