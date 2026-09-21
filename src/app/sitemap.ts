import type { MetadataRoute } from "next";
import { publishedPosts } from "@/content/news/posts";
import { SITE_CONFIG } from "@/lib/site-config";
import lastmod from "@/lib/lastmod.json";

const BASE = SITE_CONFIG.baseUrl;

/**
 * Real, indexable routes only. Intentionally absent:
 *  - /dinner   (301s to /tournament)
 *  - /register (closed page, kept live but not advertised)
 *  - /guide    (noindex)
 *
 * lastModified comes from src/lib/lastmod.json (last git commit touching each
 * page — regenerate with `pnpm lastmod`), never the build time. News posts use
 * their publish date.
 */
const routes = [
  "",
  "/gallery",
  "/the-cause",
  "/tournament",
  "/sponsorships",
  "/venue",
  "/contact",
  "/news",
  "/donate",
];

const dates = lastmod as Record<string, string>;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = routes.map((path) => {
    const date = dates[path || "/"];
    return {
      url: `${BASE}${path}`,
      ...(date ? { lastModified: new Date(date) } : {}),
      changeFrequency: "monthly",
      priority: path === "" ? 1.0 : 0.7,
    };
  });

  const postEntries: MetadataRoute.Sitemap = publishedPosts.map((post) => ({
    url: `${BASE}/news/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
