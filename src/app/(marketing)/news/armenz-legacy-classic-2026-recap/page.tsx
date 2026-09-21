import Link from "next/link";
import { notFound } from "next/navigation";
import { PostLayout } from "@/components/news/PostLayout";
import { getPost, RECAP_SLUG } from "@/content/news/posts";
import { OG_IMAGE, SITE_CONFIG } from "@/lib/site-config";

const post = getPost(RECAP_SLUG)!;
const isDraft = post.status === "draft";

export const metadata = {
  title: post.metaTitle,
  description: post.description,
  alternates: { canonical: `/news/${post.slug}` },
  robots: isDraft ? { index: false, follow: false } : undefined,
  openGraph: {
    title: `${post.metaTitle} | Armenz Legacy`,
    description: post.description,
    images: [OG_IMAGE],
    type: "article",
    publishedTime: post.date,
    authors: [post.author],
  },
};

export default function Post() {
  // Drafts render in `next dev` for review and 404 in production builds.
  if (isDraft && process.env.NODE_ENV === "production") notFound();

  const raised = SITE_CONFIG.totalRaised2026;

  return (
    <PostLayout post={post}>
      {isDraft && (
        <p className="border border-gold/30 bg-gold/[0.06] px-5 py-4 text-sm text-cream/80">
          DRAFT, not published. Fill in the bracketed items, set TOTAL_RAISED_2026 in site-config,
          then set this post&apos;s status to &quot;published&quot; and update its date.
        </p>
      )}

      <p>
        On Monday, June 22, 2026, the inaugural Armenz Legacy Classic teed off at Morongo Golf
        Club at Tukwet Canyon in Beaumont, California. The four-person scramble honored the
        memory of Armen Zennedjian, founder of The Derby Room, and supported two charities:
        CARMA (California Retirement Management Account) and the Permanently Disabled Jockeys
        Fund.
      </p>

      <h2 className="mt-12 mb-4 font-serif text-3xl font-bold italic text-cream">
        What the day raised
      </h2>
      <p>
        Together, the field raised{" "}
        <strong className="text-cream">{raised ?? "[TOTAL RAISED, TBD]"}</strong> for CARMA and
        the PDJF.
      </p>

      <h2 className="mt-12 mb-4 font-serif text-3xl font-bold italic text-cream">
        Thank you to our sponsors
      </h2>
      <p>
        The Morongo Band of Mission Indians served as the Triple Crown title sponsor, and every
        tier behind them made the day possible. See everyone who showed up on the{" "}
        <Link href="/sponsorships" className="text-gold-bright underline hover:text-cream">
          sponsors page
        </Link>
        , and relive the day in the{" "}
        <Link href="/gallery" className="text-gold-bright underline hover:text-cream">
          2026 gallery
        </Link>
        .
      </p>

      {isDraft && <p>[Add: winning team, standout moments, and any quotes, supplied by the team.]</p>}

      <h2 className="mt-12 mb-4 font-serif text-3xl font-bold italic text-cream">
        What&apos;s next
      </h2>
      <p>
        Details for 2027 are still being finalized. The{" "}
        <Link href="/#early-access" className="text-gold-bright underline hover:text-cream">
          early-access list
        </Link>{" "}
        hears first.
      </p>
    </PostLayout>
  );
}
