import { EventbriteWidget } from "@/components/EventbriteWidget";
import { Hero } from "@/components/Hero";
import { Cta } from "@/components/Cta";
import { Reveal, MaskLines, HairlineGrow } from "@/components/motion";

export const metadata = {
  title: "Dinner & Charity Auction Tickets — Beaumont CA, June 22, 2026",
  description:
    "Post-tournament dinner, charity auction, raffle & awards at Morongo Golf Club in Beaumont, CA. Inland Empire charity event tickets — no golf required.",
  keywords: [
    "Inland Empire charity event",
    "Charity auction Beaumont CA",
    "Morongo Golf Club events",
  ],
  alternates: { canonical: "/dinner" },
};

const included = [
  { title: "Catered Dinner", detail: "Full-service dinner at the clubhouse banquet" },
  { title: "Silent Auction", detail: "Bid on exclusive items, experiences, and memorabilia" },
  { title: "Raffle Drawings", detail: "Multiple chances to win prizes throughout the evening" },
  { title: "Awards Ceremony", detail: "Celebrate the day's winners and the impact we're making" },
  { title: "Drinks & Socializing", detail: "Enjoy the evening with fellow supporters of the legacy" },
];

export default function DinnerPage() {
  return (
    <div className="relative min-h-screen bg-ink">
      <Hero
        compact
        eyebrow="Join the Celebration"
        title={
          <>
            Dinner & charity <em className="italic text-gold-bright">auction</em>.
          </>
        }
        subtitle="Don't play golf? No problem. Join us for the post-tournament celebration and support a great cause over an incredible evening."
        showButtons={false}
      />

      {/* What's included + ticket */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h2 className="font-serif text-3xl font-medium text-cream md:text-4xl">
                What&apos;s <em className="italic text-gold-bright">included</em>
              </h2>
              <HairlineGrow className="mt-8" />
              <div>
                {included.map((item, i) => (
                  <Reveal key={item.title} delay={(i % 5) * 0.06}>
                    <div className="flex items-baseline gap-5 border-b border-gold/12 py-6">
                      <span className="font-engraved shrink-0 text-sm text-gold/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-cream">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm font-light text-cream/55">{item.detail}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.15} y={32}>
                <div className="border border-gold/25 p-8 md:p-10">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold/80">
                    Non-Golfer Ticket
                  </p>
                  <h3 className="mt-4 font-serif text-2xl font-medium text-cream">
                    Dinner & Auction Seat
                  </h3>
                  <p className="font-engraved mt-6 text-5xl text-cream">$75</p>
                  <p className="mt-2 text-sm font-light text-cream/45">Dinner · More TBA</p>
                  <div className="mt-8 border-t border-gold/15 pt-6">
                    <p className="text-sm font-light leading-relaxed text-cream/60">
                      Perfect for spouses, friends, family, or anyone who wants to support
                      the cause and enjoy the celebration without hitting the links.
                    </p>
                    <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-bright/90">
                      Immediately Following Play (~4:00 PM)
                    </p>
                    <p className="mt-1 text-xs font-light text-cream/45">
                      At the Morongo Golf Club Clubhouse
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Reserve seat — widget */}
      <section className="border-t border-gold/10 bg-ink-2 py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 md:px-8">
          <div className="border border-gold/20 p-8 md:p-12">
            <h2 className="text-center font-serif text-3xl font-medium text-cream md:text-4xl">
              Reserve your <em className="italic text-gold-bright">seat</em>
            </h2>
            <p className="mx-auto mt-4 mb-10 max-w-md text-center text-base font-light leading-relaxed text-cream/60">
              Complete your ticket purchase below to secure your dinner and auction seat.
            </p>
            <EventbriteWidget
              eventId="1983383494423"
              containerId="eventbrite-widget-container-1983383494423-dinner"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-3xl px-4 md:px-8 text-center">
          <h2 className="font-serif text-3xl font-medium text-cream md:text-4xl">
            <MaskLines
              lines={[
                <span key="l">
                  Want in on the 2027 <em className="italic text-gold-bright">Classic</em>?
                </span>,
              ]}
            />
          </h2>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Cta href="/#early-access">Join The 2027 List</Cta>
              <Cta href="/donate" variant="ghost">Make a Donation</Cta>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
