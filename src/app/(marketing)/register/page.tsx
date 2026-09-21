import { Hero } from "@/components/Hero";
import { Cta } from "@/components/Cta";
import { Reveal, MaskLines } from "@/components/motion";

export const metadata = {
  title: "2026 Registration Has Closed — Join the 2027 List",
  description:
    "The inaugural Armenz Legacy Classic was played June 22, 2026 at Morongo Golf Club at Tukwet Canyon. Join the early-access list for first pick of 2027 foursomes and sponsorships.",
  keywords: [
    "Beaumont CA golf tournaments",
    "Morongo Golf Club events",
    "Southern California golf scrambles",
    "Inland Empire charity golf",
  ],
  alternates: { canonical: "/register" },
};

export default function RegisterPage() {
  return (
    <div className="relative min-h-screen bg-ink">
      <Hero
        compact
        eyebrow="June 22, 2026 · Played & Complete"
        title={
          <>
            2026 registration has <em className="italic text-gold-bright">closed</em>.
          </>
        }
        subtitle="The inaugural Classic was unforgettable. Thank you to every player who teed it up for the cause. 2027 is next."
        showButtons={false}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 md:px-8">
          <div className="border border-gold/20 px-8 py-14 text-center md:px-14">
            <h2 className="font-serif text-3xl font-medium leading-[1.1] text-cream md:text-4xl">
              <MaskLines
                lines={[
                  <span key="l">
                    Don&apos;t miss <em className="italic text-gold-bright">2027</em>.
                  </span>,
                ]}
              />
            </h2>
            <Reveal delay={0.15}>
              <p className="mx-auto mt-5 max-w-xl text-base font-light leading-relaxed text-cream/60">
                Foursomes sold out for the inaugural Classic. Join the early-access list
                and you&apos;ll get first pick when 2027 registration opens, before the
                public.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Cta href="/#early-access">Join The 2027 List</Cta>
                <Cta href="/gallery" variant="ghost">Relive The 2026 Classic</Cta>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
