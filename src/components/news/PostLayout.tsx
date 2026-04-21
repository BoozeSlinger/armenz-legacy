import Link from "next/link";
import type { ReactNode } from "react";
import type { NewsPost } from "@/content/news/posts";

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
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Armenz Legacy Charity Golf Tournament",
      logo: {
        "@type": "ImageObject",
        url: "https://armenzlegacy.com/images/hero/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://armenzlegacy.com/news/${post.slug}`,
    },
    keywords: post.keywords.join(", "),
  };

  return (
    <div className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div
        className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/page-bg/home-parallax.png')" }}
      >
        <div className="absolute inset-0 bg-[#0A0A0A]/85 backdrop-blur-[2px]" />
      </div>

      <article className="relative z-10 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <Link
            href="/news"
            className="text-[#C9A84C] text-xs uppercase tracking-widest font-bold hover:text-[#F5F0E8] transition-colors"
          >
            ← All News
          </Link>

          <header className="mt-6 mb-12 border-b border-[#C9A84C]/20 pb-8">
            <p className="text-[#C9A84C] text-xs uppercase tracking-widest font-bold mb-4">
              <time dateTime={post.date}>{formattedDate}</time> · {post.author}
            </p>
            <h1 className="text-3xl md:text-5xl font-serif font-bold italic text-[#F5F0E8] leading-tight drop-shadow-md">
              {post.title}
            </h1>
          </header>

          <div className="prose-news text-[#F5F0E8] text-lg leading-relaxed space-y-6">
            {children}
          </div>

          <footer className="mt-16 pt-8 border-t border-[#C9A84C]/20 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <Link
              href="/register"
              className="text-[#C9A84C] font-bold uppercase tracking-widest text-sm hover:text-[#F5F0E8]"
            >
              Register a Team →
            </Link>
            <Link
              href="/sponsorships"
              className="text-[#C9A84C] font-bold uppercase tracking-widest text-sm hover:text-[#F5F0E8]"
            >
              Become a Sponsor →
            </Link>
          </footer>
        </div>
      </article>
    </div>
  );
}
