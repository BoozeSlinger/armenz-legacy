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
      <section id="sponsors" className="relative z-10 bg-ink-2 py-24 md:py-32">
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

      {/* ── CONTACT ── */}
      <section id="contact" className="relative z-10 scroll-mt-24 py-24 md:py-32">
        <div className="container mx-auto max-w-2xl px-4 md:px-8 text-center">
          <h2 className="font-serif text-4xl font-medium leading-[1.05] tracking-[-0.015em] text-cream md:text-5xl">
            <MaskLines
              lines={[
                <span key="l1">
                  Questions? <em className="italic text-gold-bright">Write to us.</em>
                </span>,
              ]}
            />
          </h2>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-5 max-w-md text-base font-light leading-relaxed text-cream/60">
              Media inquiries, volunteering, or sponsorship questions for the 2027
              Classic. We read everything.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <form
              action="https://formspree.io/f/xbjnzzop"
              method="POST"
              className="mt-12 space-y-8 text-left"
            >
              <input type="hidden" name="_cc" value="derbyroomcelebrates@gmail.com" />
              <input type="hidden" name="subject" value="New Contact Inquiry: Armen Z Legacy" />

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/50">
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    required
                    autoComplete="given-name"
                    placeholder="First name"
                    className="h-12 w-full border-0 border-b border-cream/20 bg-transparent px-0 text-base font-light text-cream transition-colors duration-300 placeholder:text-cream/25 focus:border-gold focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/50">
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    required
                    autoComplete="family-name"
                    placeholder="Last name"
                    className="h-12 w-full border-0 border-b border-cream/20 bg-transparent px-0 text-base font-light text-cream transition-colors duration-300 placeholder:text-cream/25 focus:border-gold focus:outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/50">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="h-12 w-full border-0 border-b border-cream/20 bg-transparent px-0 text-base font-light text-cream transition-colors duration-300 placeholder:text-cream/25 focus:border-gold focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/50">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="How can we help?"
                  className="min-h-[120px] w-full border-0 border-b border-cream/20 bg-transparent px-0 py-2 text-base font-light text-cream transition-colors duration-300 placeholder:text-cream/25 focus:border-gold focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="h-14 w-full bg-gold text-[11px] font-semibold uppercase tracking-[0.25em] text-ink transition-colors duration-500 hover:bg-gold-bright active:scale-[0.99]"
              >
                Send Message
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* Sticky bottom CTA */}
      <StickyCTA />
    </div>
  );
}
