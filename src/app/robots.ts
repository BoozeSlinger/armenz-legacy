import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://armenzlegacy.com/sitemap.xml",
    host: "https://armenzlegacy.com",
  };
}
