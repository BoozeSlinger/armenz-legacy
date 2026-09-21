export type NewsPost = {
  slug: string;
  title: string;
  /** <= 42 chars: the root title template appends " | Armenz Legacy" to stay under 60. */
  metaTitle: string;
  description: string;
  date: string;
  author: string;
  keywords: string[];
  /** Drafts are never listed, sitemapped, or served in production builds. */
  status: "published" | "draft";
  /** Pre-event post kept for the record; renders an "archived" banner. */
  archived?: boolean;
};

export const RECAP_SLUG = "armenz-legacy-classic-2026-recap";

export const posts: NewsPost[] = [
  {
    // DRAFT: not published. Fill in TOTAL_RAISED_2026 in site-config, review the copy,
    // then flip status to "published" (and set the real publish date).
    slug: RECAP_SLUG,
    metaTitle: "Armenz Legacy Classic 2026 Recap",
    title: "The Inaugural Armenz Legacy Classic: A Recap",
    description:
      "A look back at the inaugural Armenz Legacy Classic on June 22, 2026 at Morongo Golf Club at Tukwet Canyon in Beaumont, CA, benefiting CARMA and the PDJF.",
    date: "2026-09-21",
    author: "Armenz Legacy Team",
    keywords: [],
    status: "draft",
  },
  {
    slug: "beaumont-ca-charity-golf-tournament-june-2026",
    metaTitle: "Beaumont CA Charity Golf, June 22, 2026",
    status: "published",
    archived: true,
    title:
      "Beaumont CA Charity Golf Tournament: Armenz Legacy Classic at Morongo Golf Club, June 22, 2026",
    description:
      "Join the inaugural Armenz Legacy Classic June 22, 2026 at Morongo Golf Club in Beaumont, CA. 4-person scramble benefiting CARMA and PDJF.",
    date: "2026-04-20",
    author: "Armenz Legacy Team",
    keywords: [
      "Beaumont CA golf tournaments",
      "Inland Empire charity golf",
      "Morongo Golf Club events",
      "Southern California golf scrambles",
    ],
  },
  {
    slug: "corporate-sponsorship-charity-golf-inland-empire-2026",
    metaTitle: "Corporate Sponsorship Opportunities",
    status: "published",
    archived: true,
    title:
      "Corporate Sponsorship Opportunities: The Armenz Legacy Classic in Beaumont, CA",
    description:
      "Explore sponsor packages for the Armenz Legacy Classic at Morongo Golf Club. Reach Inland Empire decision-makers while supporting CARMA and PDJF.",
    date: "2026-04-20",
    author: "Armenz Legacy Team",
    keywords: [
      "Corporate sponsorship opportunities Beaumont CA",
      "Charity event sponsorships Inland Empire",
      "Golf tournament sponsor packages California",
      "Equestrian charity golf tournament",
    ],
  },
];

export function getPost(slug: string): NewsPost | undefined {
  return posts.find((p) => p.slug === slug);
}

/** Posts that are live: listed on /news and included in the sitemap. */
export const publishedPosts = posts.filter((p) => p.status === "published");

/** Where the "archived" banner sends readers: the recap post once live, else the tournament recap page. */
export const recapHref = publishedPosts.some((p) => p.slug === RECAP_SLUG)
  ? `/news/${RECAP_SLUG}`
  : "/tournament";
