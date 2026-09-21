import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "@/content/news/posts";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/motion";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "News & Updates — Armenz Legacy Classic",
  description:
    "Latest news, sponsor spotlights, and updates from the Armenz Legacy Classic at Morongo Golf Club in Beaumont, CA. Supporting CARMA & PDJF.",
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
    <div className="relative min-h-screen bg-ink">
      <Hero
        compact
        eyebrow="News & Updates"
        title={
          <>
            From the <em className="italic text-gold-bright">tournament</em>.
          </>
        }
        subtitle="Sponsor spotlights, charity stories, and updates from the Armenz Legacy Classic in Beaumont, CA."
        showButtons={false}
      />

      <section className="relative z-10 pb-24 pt-8 md:pb-32 md:pt-12">
        <div className="container mx-auto max-w-4xl px-4 md:px-8">
          <ul>
            {sorted.map((post, i) => {
              const formatted = new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });
              return (
                <li key={post.slug}>
                  <Reveal delay={(i % 4) * 0.06}>
                    <Link
                      href={`/news/${post.slug}`}
                      className="group block border-t border-gold/12 py-10 transition-colors duration-500 last:border-b hover:bg-gold/[0.03] md:py-12"
                    >
                      <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-bright/90">
                        <time dateTime={post.date}>{formatted}</time>
                        <span className="mx-2.5 text-cream/55">/</span>
                        <span className="text-cream/55">{post.author}</span>
                      </p>
                      <h2 className="max-w-3xl font-serif text-3xl font-medium leading-[1.1] text-cream transition-colors duration-500 group-hover:text-gold-bright md:text-4xl">
                        {post.title}
                      </h2>
                      <p className="mt-4 max-w-2xl text-base font-light leading-relaxed text-cream/55">
                        {post.description}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/70 transition-colors duration-500 group-hover:text-gold-bright">
                        Read Article
                        <ArrowRight
                          size={13}
                          strokeWidth={1.75}
                          className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
                        />
                      </span>
                    </Link>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
