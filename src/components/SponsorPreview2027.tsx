"use client";

import { Reveal, MaskLines, HairlineGrow } from "@/components/motion";

export function SponsorPreview2027() {
  return (
    <section className="relative z-10 py-24 md:py-36">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        {/* Header */}
        <div className="pb-12">
          <h2 className="max-w-3xl font-serif text-5xl font-medium leading-[1.04] tracking-[-0.015em] text-cream md:text-6xl">
            <MaskLines
              lines={[
                <>Partner with the</>,
                <>2027 <em className="italic text-gold-bright">Classic</em>.</>,
              ]}
            />
          </h2>
          <Reveal delay={0.25}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream/60">
              Sponsorships open first to early-access partners. Align your organization
              with a meaningful cause on Southern California&apos;s premier greens.
            </p>
          </Reveal>
        </div>

        <HairlineGrow />

        <Reveal delay={0.15}>
          <div className="flex flex-col items-start justify-between gap-3 pt-8 text-xs font-light text-cream/40 sm:flex-row sm:items-center">
            <p>Custom activations and bespoke corporate packages available upon inquiry.</p>
            <a
              href="mailto:armenzlegacy@gmail.com"
              className="link-rule text-gold-bright/90"
            >
              armenzlegacy@gmail.com
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
