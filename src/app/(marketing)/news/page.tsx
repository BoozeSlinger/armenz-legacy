import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "@/content/news/posts";

export const metadata: Metadata = {
  title: "News & Updates — Armenz Legacy Charity Golf Tournament",
  description:
    "Latest news, sponsor spotlights, and updates from the Armenz Legacy Charity Golf Tournament at Morongo Golf Club in Beaumont, CA. Supporting CARMA & PDJF.",
  keywords: [
    "Beaumont CA golf tournaments",
    "Inland Empire charity golf",
    "Horse racing charity events California",
  ],
  alternates: { canonical: "/news" },
};

export default function NewsIndexPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="relative min-h-screen">
      {/* Full-page background */}
      <div
        className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/page-bg/home-parallax.png')" }}
      >
        <div className="absolute inset-0 bg-[#0A0A0A]/88 backdrop-blur-[2px]" />
      </div>

      <section className="relative z-10 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">

          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <p className="text-[#C9A84C] text-xs uppercase tracking-[0.25em] font-bold mb-4">
              News &amp; Updates
            </p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold italic text-[#F5F0E8] mb-6 drop-shadow-md">
              From the Tournament
            </h1>
            <div className="w-16 h-px bg-[#C9A84C]/50 mx-auto mb-6" />
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              Sponsor spotlights, charity stories, and updates from the Armenz Legacy
              Charity Golf Tournament in Beaumont, CA.
            </p>
          </div>

          {/* Post listing */}
          <ul className="space-y-6">
            {sorted.map((post, i) => {
              const formatted = new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });
              return (
                <li
                  key={post.slug}
                  className="group relative bg-zinc-900/50 backdrop-blur-xl border border-[#C9A84C]/15 p-8 md:p-10 transition-all duration-300 hover:border-[#C9A84C]/40 hover:bg-[#C9A84C]/5"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  {/* Left gold accent bar */}
                  <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#C9A84C]/0 via-[#C9A84C]/60 to-[#C9A84C]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <p className="text-[#C9A84C] text-xs uppercase tracking-[0.2em] font-bold mb-3">
                    <time dateTime={post.date}>{formatted}</time>
                    <span className="mx-2 opacity-40">·</span>
                    <span className="opacity-70">{post.author}</span>
                  </p>

                  <h2 className="text-2xl md:text-3xl font-serif font-bold italic text-[#F5F0E8] mb-4 leading-tight">
                    <Link
                      href={`/news/${post.slug}`}
                      className="hover:text-[#C9A84C] transition-colors duration-200"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-zinc-400 mb-6 leading-relaxed">{post.description}</p>

                  <Link
                    href={`/news/${post.slug}`}
                    className="inline-flex items-center gap-2 text-[#C9A84C] font-bold uppercase tracking-widest text-xs hover:text-[#F5F0E8] transition-colors duration-200 group/link"
                  >
                    Read Article
                    <span className="inline-block translate-x-0 group-hover/link:translate-x-1 transition-transform duration-200">→</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Back to home nudge */}
          <div className="mt-16 text-center">
            <Link
              href="/"
              className="text-zinc-500 text-xs uppercase tracking-widest hover:text-[#C9A84C] transition-colors duration-200"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
