import { Hero } from "@/components/Hero";
import { Cta } from "@/components/Cta";
import { Reveal, MaskLines, HairlineGrow } from "@/components/motion";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata = {
  title: "The Day — 2026 Tournament Recap & FAQ",
  description:
    "Recap of the inaugural Armenz Legacy Classic on June 22, 2026 at Morongo Golf Club at Tukwet Canyon in Beaumont, CA: the schedule, the 4-person scramble format, FAQ, and what to expect in 2027.",
  keywords: [
    "Southern California golf scrambles",
    "Beaumont CA golf tournaments",
    "4-person scramble Inland Empire",
    "Morongo Golf Club events",
  ],
  alternates: { canonical: "/tournament" },
};

const schedule = [
  { time: "7:30 AM", event: "Gates Open", desc: "Players arrived early to check in and warm up on the driving range." },
  { time: "8:00 AM", event: "Registration & Breakfast", desc: "Complimentary breakfast burritos and Bloody Marys from The Derby Room." },
  { time: "9:30 AM", event: "Opening Remarks", desc: "A brief welcome and tribute to the legacy of Armen Zennedjian." },
  { time: "10:00 AM", event: "Shotgun Start", desc: "All teams teed off simultaneously across the course." },
  { time: "4:00 PM", event: "Play Concludes", desc: "Foursomes finished up and headed to the clubhouse." },
  { time: "Following", event: "Dinner, Auction & Awards", desc: "Immediately following play at the clubhouse." },
];

const contests = [
  { name: "Longest Drive", desc: "Tested on a designated par-5 fairway." },
  { name: "Closest to the Pin", desc: "Precision counted on select par-3 holes." },
  { name: "Putting Contest", desc: "A putt for a chance at bonus prizes." },
  { name: "Mulligans", desc: "Extra chances to re-hit a shot were available at registration." },
];

const info = [
  { title: "Dress Code", lines: ["Collared shirts required", "No denim or cargo shorts", "No athletic wear", "Spikeless golf shoes required"] },
  { title: "Club Rentals", lines: ["Rental sets from the pro shop", "First-come, first-served", "Contact the pro shop when you register"] },
  { title: "Weather Policy", lines: ["Rain or shine", "Play suspended only for lightning", "Modified format if unplayable"] },
];

const faqs = [
  { q: "What is a scramble format?", a: "In a scramble, all four players tee off, then the team selects the best shot. All players hit from that spot until the ball is holed. It's the most fun and beginner-friendly format in golf." },
  { q: "What was the dress code?", a: "Tukwet Canyon enforces a strict dress code. Collared shirts were required for all players. No denim, cargo shorts, or athletic wear on the course. Spikeless golf shoes were required." },
  { q: "Did players need to bring their own clubs?", a: "Players who needed clubs contacted the Morongo Golf Club pro shop directly when they registered. Rental sets were first-come, first-served." },
  { q: "What if it had rained?", a: "The tournament played rain or shine. In severe weather (lightning), the course marshal would suspend play. If the course became unplayable, a modified format or rescheduled date would be communicated to all players." },
  { q: "Were breakfast and dinner included?", a: "Yes. Every registered player received a complimentary breakfast from The Derby Room before the round. Lunch was served on the course, and dinner was the formal post-tournament meal." },
  { q: "Could non-golfers attend the dinner?", a: "Yes. Dinner & Auction tickets were available to non-golfers who wanted to join the post-tournament celebration." },
  { q: "How did registration work?", a: "Players could register a full foursome at once. Those without a full foursome registered as individuals and were paired with other players." },
  { q: "Are donations tax-deductible?", a: "Yes. This tournament runs through the 909 Market Foundation, a 501(c)(3) charitable organization (EIN: 92-0881763). All contributions are tax-deductible to the fullest extent allowed by law." },
];

export default function TournamentPage() {
  return (
    <div className="relative min-h-screen bg-ink">
      <Hero
        compact
        eyebrow="June 22, 2026 · The Day"
        title={
          <>
            The <em className="italic text-gold-bright">Day</em>, recapped.
          </>
        }
        subtitle="Morongo Golf Club at Tukwet Canyon. How the inaugural Classic unfolded, from the first tee to the awards."
        showButtons={false}
      />

      {/* Schedule */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 md:px-8">
          <h2 className="font-serif text-4xl font-medium leading-[1.05] text-cream md:text-5xl">
            <MaskLines lines={[<span key="l">The full <em className="italic text-gold-bright">day</em></span>]} />
          </h2>
          <HairlineGrow className="mt-8" />
          <div>
            {schedule.map((item, i) => (
              <Reveal key={i} delay={(i % 6) * 0.05}>
                <div className="grid grid-cols-1 gap-2 border-b border-gold/12 py-6 sm:grid-cols-12 sm:gap-6">
                  <span className="font-engraved text-sm tracking-[0.14em] text-gold-bright sm:col-span-3">
                    {item.time}
                  </span>
                  <div className="sm:col-span-9">
                    <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-cream">
                      {item.event}
                    </p>
                    <p className="mt-1 text-sm font-light text-cream/55">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Format & contests */}
      <section className="border-y border-gold/10 bg-ink-2 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-16">
            <Reveal>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold/80">
                Tournament Format
              </p>
              <h3 className="mt-4 font-serif text-3xl font-medium italic text-cream md:text-4xl">
                4-Person Scramble
              </h3>
              <div className="mt-6 space-y-4 text-base font-light leading-relaxed text-cream/65">
                <p>
                  The scramble is the most popular and accessible team format in charity
                  golf. All four players tee off, the team picks the best drive, and
                  everyone plays from that spot.
                </p>
                <p>
                  It continues until the ball is holed. Fast, fun, and every player,
                  regardless of skill, contributes to the team&apos;s score.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold/80">
                On-Course Contests
              </p>
              <h3 className="mt-4 font-serif text-3xl font-medium italic text-cream md:text-4xl">
                Contests on the course
              </h3>
              <div className="mt-6">
                {contests.map((contest) => (
                  <div key={contest.name} className="border-b border-gold/12 py-4">
                    <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-cream">
                      {contest.name}
                    </p>
                    <p className="mt-1 text-sm font-light text-cream/55">{contest.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Key info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {info.map((block, i) => (
              <Reveal
                key={block.title}
                delay={i * 0.1}
                className={`py-8 md:px-10 md:first:pl-0 ${i !== 2 ? "md:border-r md:border-gold/12" : ""} ${i !== 0 ? "border-t border-gold/12 md:border-t-0" : ""}`}
              >
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-bright">
                  {block.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {block.lines.map((line) => (
                    <li key={line} className="text-sm font-light text-cream/60">
                      {line}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-gold/10 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 md:px-8">
          <h2 className="mb-10 font-serif text-4xl font-medium leading-[1.05] text-cream md:text-5xl">
            <MaskLines lines={[<span key="l">Frequently <em className="italic text-gold-bright">asked</em></span>]} />
          </h2>
          <div>
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={(i % 4) * 0.06}>
                <details className="group border-b border-gold/12 py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium text-cream transition-colors duration-300 hover:text-gold-bright">
                    {faq.q}
                    <span className="font-engraved shrink-0 text-xl text-gold/60 transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-base font-light leading-relaxed text-cream/60">
                    {faq.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect in 2027 */}
      <section className="border-t border-gold/10 bg-ink-2 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 md:px-8">
          <Reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold/80">
              What to expect in 2027
            </p>
            <h3 className="mt-4 font-serif text-3xl font-medium italic text-cream md:text-4xl">
              The next Classic
            </h3>
            <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-cream/65">
              {SITE_CONFIG.nextEventLabel ? `The next Classic is planned for ${SITE_CONFIG.nextEventLabel}. ` : ""}
              Final 2027 details, including format, pricing, registration, and
              sponsorship, are still being finalized. The schedule, format, and FAQ above
              are the best guide to what to expect, and any changes will go to the
              early-access list first.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-3xl px-4 md:px-8 text-center">
          <h2 className="font-serif text-3xl font-medium text-cream md:text-4xl">
            <MaskLines lines={[<span key="l">Ready for <em className="italic text-gold-bright">2027</em>?</span>]} />
          </h2>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-5 max-w-xl text-base font-light leading-relaxed text-cream/60">
              The inaugural Classic is in the books. Join the early-access list for first
              pick of 2027 foursomes.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Cta href="/#early-access">Join The 2027 List</Cta>
              <Cta href="/gallery" variant="ghost">View The 2026 Gallery</Cta>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
