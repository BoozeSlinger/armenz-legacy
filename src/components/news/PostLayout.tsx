import Link from "next/link";
import type { ReactNode } from "react";
import type { NewsPost } from "@/content/news/posts";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function PostLayout({ post, children }: { post: NewsPost; children: ReactNode }) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Armenz Legacy Charity Golf Tournament",
      logo: {
        "@type": "ImageObject",
        url: "https://www.armenzlegacy.com/images/hero/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.armenzlegacy.com/news/${post.slug}`,
    },
    keywords: post.keywords.join(", "),
  };

  return (
    <div className="relative min-h-screen bg-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="glow-gold-faint absolute inset-x-0 top-0 h-[50vh]" aria-hidden />

      <article className="relative z-10 pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="container mx-auto max-w-3xl px-4 md:px-8">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-bright/90 transition-colors hover:text-gold-bright"
          >
            <ArrowLeft size={13} strokeWidth={1.75} />
            All News
          </Link>

          <header className="mt-8 mb-12 border-b border-gold/15 pb-10">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-bright/90">
              <time dateTime={post.date}>{formattedDate}</time>
              <span className="mx-2.5 text-cream/25">/</span>
              <span className="text-cream/45">{post.author}</span>
            </p>
            <h1 className="font-serif text-4xl font-medium leading-[1.08] tracking-[-0.015em] text-cream md:text-5xl">
              {post.title}
            </h1>
          </header>

          <div className="prose-news space-y-6 text-lg font-light leading-relaxed text-cream/80">
            {children}
          </div>

          <footer className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-gold/15 pt-10 sm:flex-row sm:items-center">
            <Link
              href="/#early-access"
              className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-bright transition-colors hover:text-cream"
            >
              Join The 2027 List
              <ArrowRight size={13} strokeWidth={1.75} />
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/70 transition-colors hover:text-gold-bright"
            >
              View The 2026 Gallery
              <ArrowRight size={13} strokeWidth={1.75} />
            </Link>
          </footer>
        </div>
      </article>
    </div>
  );
}
