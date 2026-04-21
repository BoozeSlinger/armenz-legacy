export type NewsPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  keywords: string[];
};

export const posts: NewsPost[] = [
  {
    slug: "beaumont-ca-charity-golf-tournament-june-2026",
    title:
      "Beaumont CA Charity Golf Tournament: Legacy on the Greens at Morongo Golf Club, June 22, 2026",
    description:
      "Join the inaugural Armenz Legacy Charity Golf Tournament June 22, 2026 at Morongo Golf Club in Beaumont, CA. 4-person scramble benefiting CARMA and PDJF.",
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
    title:
      "Corporate Sponsorship Opportunities: The Armenz Legacy Charity Golf Tournament in Beaumont, CA",
    description:
      "Explore sponsor packages for the Armenz Legacy Charity Golf Tournament at Morongo Golf Club. Reach Inland Empire decision-makers while supporting CARMA and PDJF.",
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
