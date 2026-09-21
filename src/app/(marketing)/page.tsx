import { HomeHero } from "@/components/HomeHero";
import { CauseSection } from "@/components/CauseSection";
import { GalleryTeaser } from "@/components/GalleryTeaser";
import { ImpactSection } from "@/components/ImpactSection";
import { EarlyAccess } from "@/components/EarlyAccess";
import { StickyCTA } from "@/components/StickyCTA";
import { SponsorPreview2027 } from "@/components/SponsorPreview2027";
import { QuoteMoment } from "@/components/QuoteMoment";
import { Preloader } from "@/components/Preloader";
import { Reveal, MaskLines } from "@/components/motion";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-ink">
      <Preloader />

      {/* ── ACT I: THE HERO ── */}
      <HomeHero />

      {/* ── ACT II: RELIVE THE DAY ── */}
      <GalleryTeaser />

      {/* ── INTERLUDE: THE REFLECTION ── */}
      <QuoteMoment />

      {/* ── ACT IV: THE RECORD ── */}
      <ImpactSection />

      {/* ── ACT V: THE MISSION ── */}
      <CauseSection />

      {/* ── ACT VI: THE 2026 PARTNERS ── */}
      <section id="sponsors" className="relative z-10 bg-ink-2 py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <h2 className="font-serif text-5xl font-medium leading-[1.04] tracking-[-0.015em] text-cream md:text-6xl">
                <MaskLines
                  lines={[
                    <span key="l1">Made possible by</span>,
                    <span key="l2">
                      our <em className="italic text-gold-bright">partners</em>.
                    </span>,
                  ]}
                />
              </h2>
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-md text-base font-light leading-relaxed text-cream/60">
                  The Morongo Band of Mission Indians, headquartered in nearby Banning,
                  served as the inaugural Triple Crown title sponsor. Every tier behind
                  them made the day possible.
                </p>
                <a
                  href="/sponsorships"
                  className="link-rule mt-8 inline-block text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-bright"
                >
                  See All 2026 Sponsors
                </a>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={0.15} y={36}>
                <a
                  href="https://tukwetcanyon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border border-gold/20 bg-ink p-3 transition-colors duration-500 hover:border-gold/40"
                >
                  <span className="flex flex-col items-center bg-[#f7f5ef] px-10 py-12 transition-colors duration-500 group-hover:bg-white md:px-16 md:py-14">
                    <span className="mb-8 text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-ink/60">
                      Triple Crown Title Sponsor
                    </span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/Morongologo.png"
                      alt="Morongo Band of Mission Indians"
                      className="mx-auto h-28 w-auto object-contain md:h-36"
                    />
                  </span>
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACT VII: THE 2027 INVITATION ── */}
      <SponsorPreview2027 />

      <EarlyAccess />

      {/* Sticky bottom CTA */}
      <StickyCTA />
    </div>
  );
}
