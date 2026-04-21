import type { MetadataRoute } from "next";
import { posts } from "@/content/news/posts";

const BASE = "https://www.armenzlegacy.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/the-cause",
    "/tournament",
    "/sponsorships",
    "/register",
    "/dinner",
    "/donate",
    "/venue",
    "/contact",
    "/news",
  ];

  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: path === "" ? 1.0 : 0.7,
  }));

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}/news/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
