import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Cta } from "@/components/Cta";
import { Reveal, MaskLines, HairlineGrow, Parallax } from "@/components/motion";

export const metadata = {
  title: "Our Cause — Horse Racing Charity Events California (CARMA & PDJF)",
  description:
    "Honoring Armen Zennedjian by supporting CARMA's retired racehorses and the Permanently Disabled Jockeys Fund. Learn about California horse racing charity events benefiting equine and jockey welfare.",
  keywords: [
    "Horse racing charity events California",
    "CARMA charity events",
    "Equestrian charity golf tournament",
    "Permanently Disabled Jockeys Fund",
    "Armen Zennedjian legacy",
  ],
  alternates: { canonical: "/the-cause" },
};

const beneficiaries = [
  {
    name: "CARMA",
    sub: "California Retirement Management Account",
    paras: [
      "CARMA is a 501(c)(3) nonprofit dedicated to funding the retirement, retraining, and rehoming of Thoroughbred racehorses that have competed in California.",
      "Since its founding, CARMA has granted over $6.3 million to accredited organizations and helped more than 425 retired racing Thoroughbreds find second careers and loving homes.",
      "Through the CARMA Placement Program, aftercare funding, and owner education, they ensure every horse that gives its all on the track earns a dignified retirement.",
    ],
  },
  {
    name: "The PDJF",
    sub: "Permanently Disabled Jockeys Fund",
    paras: [
      "The PDJF provides financial assistance to jockeys who have suffered catastrophic, career-ending injuries during competition.",
      "Horse racing is one of the most dangerous sports in the world. Jockeys risk their lives every time they mount up, and when tragedy strikes, the PDJF is there with medical expenses, living costs, and rehabilitation.",
      "These brave athletes gave everything to the sport we love. Through your support, they are never forgotten.",
    ],
  },
];

const pillars = [
  { title: "The Legacy", desc: "Honoring a lifetime of dedication and friendship on and off the track." },
  { title: "The Impact", desc: "Supporting retired Thoroughbreds and permanently disabled jockeys." },
  { title: "The Community", desc: "Bringing people together for great golf, food, and a worthy cause." },
];

export default function TheCausePage() {
  return (
    <div className="relative min-h-screen bg-ink">
      <Hero
        compact
        eyebrow="About the Mission"
        title={
          <>
            The man behind the <em className="italic text-gold-bright">Classic</em>.
          </>
        }
        subtitle="This memorial tournament honors the life and passion of Armen Zennedjian, founder of The Derby Room, whose love of horseracing and community brought people together for decades."
        showButtons={false}
      />

      {/* Remembering Armen — portrait + story */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <Parallax range={26}>
                <Reveal y={36}>
                  <figure>
                    <div className="relative border border-gold/25 p-2.5 md:p-3">
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <Image
                          src="/images/armen/screenshot-1.png"
                          alt="Armen Zennedjian, founder of The Derby Room"
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="scale-[1.24] object-cover object-[center_28%] sepia-[0.25] saturate-[0.85]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" aria-hidden />
                      </div>
                    </div>
                    <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                      <span className="font-serif text-lg italic text-cream/85">Armen Zennedjian</span>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cream/40">
                        1957 &ndash; A Life Remembered
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              </Parallax>
            </div>

            <div className="lg:col-span-7">
              <h2 className="font-serif text-4xl font-medium leading-[1.05] text-cream md:text-5xl">
                <MaskLines
                  lines={[
                    <span key="l1">Remembering</span>,
                    <span key="l2">
                      Armen <em className="italic text-gold-bright">Zennedjian</em>
                    </span>,
                  ]}
                />
              </h2>
              <Reveal delay={0.2}>
                <div className="mt-8 max-w-xl space-y-5 text-base font-light leading-relaxed text-cream/70 md:text-lg">
                  <p>
                    Armen was a beloved figure in the horse racing community whose passion
                    for the sport was matched only by his generosity and warmth. A dedicated
                    horseman, loyal friend, and tireless advocate for the welfare of both
                    jockeys and Thoroughbreds, he left an indelible mark on everyone
                    fortunate enough to know him.
                  </p>
                  <p className="text-[15px] text-cream/55 md:text-base">
                    His love for the track was infectious. Whether at the rail on race day
                    or gathered with friends at the barn, Armen lived for the thrill of
                    competition and the bond between horse and rider. But more than the wins
                    and the wagers, he cared about the people and animals behind the sport.
                  </p>
                  <p className="text-[15px] text-cream/55 md:text-base">
                    This tournament keeps his spirit alive. Every swing, every dollar raised,
                    and every smile shared carries forward the values he championed:
                    community, compassion, and second chances.
                  </p>
                </div>
              </Reveal>

              <HairlineGrow className="mt-12" />
              <div className="grid grid-cols-1 sm:grid-cols-3">
                {pillars.map((p, i) => (
                  <Reveal
                    key={p.title}
                    delay={i * 0.12}
                    className={`py-8 sm:px-6 sm:first:pl-0 ${i !== 2 ? "sm:border-r sm:border-gold/12" : ""}`}
                  >
                    <h3 className="font-serif text-xl italic text-gold-bright">{p.title}</h3>
                    <p className="mt-2 text-sm font-light leading-relaxed text-cream/55">
                      {p.desc}
                    </p>
                  </Reveal>
                ))}
              </div>
              <HairlineGrow />
            </div>
          </div>
        </div>
      </section>

      {/* Where your support goes */}
      <section className="border-t border-gold/10 bg-ink-2 py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="mb-14 max-w-3xl">
            <h2 className="font-serif text-4xl font-medium leading-[1.05] text-cream md:text-5xl lg:text-6xl">
              <MaskLines
                lines={[
                  <span key="l1">Where your</span>,
                  <span key="l2">
                    support <em className="italic text-gold-bright">goes</em>.
                  </span>,
                ]}
              />
            </h2>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-base font-light leading-relaxed text-cream/60">
                Every dollar raised directly benefits two organizations close to
                Armen&apos;s heart.
              </p>
            </Reveal>
          </div>

          <HairlineGrow />
          <div className="grid grid-cols-1 md:grid-cols-2">
            {beneficiaries.map((b, i) => (
              <Reveal
                key={b.name}
                delay={i * 0.15}
                className={`border-gold/12 py-12 md:py-14 ${
                  i === 0 ? "border-b md:border-b-0 md:border-r md:pr-14" : "md:pl-14"
                }`}
              >
                <span className="font-engraved text-xs tracking-[0.3em] text-gold/80">
                  {i === 0 ? "I" : "II"}
                </span>
                <h3 className="mt-3 font-serif text-3xl font-medium text-cream md:text-4xl">
                  {b.name}
                </h3>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/40">
                  {b.sub}
                </p>
                <div className="mt-6 space-y-4 text-sm font-light leading-relaxed text-cream/60 md:text-[15px]">
                  {b.paras.map((para, pi) => (
                    <p key={pi}>{para}</p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
          <HairlineGrow />
        </div>
      </section>

      {/* Tax-deductible + CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-3xl px-4 md:px-8">
          <div className="border border-gold/20 px-8 py-14 text-center md:px-14">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold/80">
              501(c)(3) · EIN 92-0881763
            </p>
            <h2 className="font-serif text-3xl font-medium leading-[1.1] text-cream md:text-4xl">
              Your donation is <em className="italic text-gold-bright">tax-deductible</em>.
            </h2>
            <Reveal delay={0.15}>
              <p className="mx-auto mt-5 max-w-lg text-base font-light leading-relaxed text-cream/60">
                This tournament runs through the 909 Market Foundation, a 501(c)(3)
                charitable organization. Please consult your tax advisor for details
                regarding your situation.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Cta href="/donate">Make a Donation</Cta>
                <Cta href="/#early-access" variant="ghost">Join The 2027 List</Cta>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
