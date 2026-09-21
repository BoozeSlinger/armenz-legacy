"use client";

import { ArmenPortrait } from "@/components/ArmenPortrait";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Reveal, MaskLines, HairlineGrow, Parallax } from "@/components/motion";

const charities = [
  {
    num: "I",
    name: "CARMA",
    title: "California Retirement Management Account",
    desc: "Rehabilitation, retraining, and retirement for California-raced Thoroughbreds, so they thrive in second careers off the track.",
    url: "https://www.carma4horses.org",
  },
  {
    num: "II",
    name: "PDJF",
    title: "Permanently Disabled Jockeys Fund",
    desc: "Financial assistance and long-term care for former jockeys who suffered catastrophic, career-ending injuries in competition.",
    url: "https://pdjf.org",
  },
];

export function CauseSection() {
  return (
    <section className="relative z-10 py-14 md:py-20">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Portrait — framed like a clubhouse photograph */}
          <div className="lg:col-span-5">
            <Parallax range={26}>
              <Reveal y={36}>
                <ArmenPortrait
                    alt="Armen Zennedjian, founder of The Derby Room, smiling beneath a cowboy hat"
                    label="Founder, The Derby Room"
                  />
              </Reveal>
            </Parallax>
          </div>

          {/* Story */}
          <div className="lg:col-span-7">
            <h2 className="font-serif text-5xl font-medium leading-[1.04] tracking-[-0.015em] text-cream md:text-6xl">
              <MaskLines
                lines={[
                  <>Every swing supports</>,
                  <>a <em className="italic text-gold-bright">second chance</em>.</>,
                ]}
              />
            </h2>

            <Reveal delay={0.2}>
              <div className="mt-8 max-w-xl space-y-5 text-base font-light leading-relaxed text-cream/70 md:text-lg">
                <p>
                  This memorial tournament honors the life and enduring passion of{" "}
                  <span className="font-normal text-cream">Armen Zennedjian</span>, founder of
                  The Derby Room, whose dedication to horseracing and hospitality brought
                  people together for decades.
                </p>
                <p className="text-[15px] text-cream/55 md:text-base">
                  Presented by the <span className="text-cream/80">909 Market Foundation</span>,
                  all proceeds flow directly to two charities at the heart of Armen&apos;s world:
                  rehabilitation for retired California Thoroughbreds, and lifelong care for
                  permanently injured jockeys.
                </p>
              </div>
            </Reveal>

            <HairlineGrow className="mt-12" delay={0.15} />

            {/* Beneficiaries ledger */}
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {charities.map((charity, i) => (
                <Reveal
                  key={charity.name}
                  delay={0.15 + i * 0.15}
                  className={`flex flex-col justify-between py-10 ${
                    i === 0
                      ? "border-b border-gold/15 sm:border-b-0 sm:border-r sm:pr-10"
                      : "sm:pl-10"
                  }`}
                >
                  <div>
                    <span className="font-engraved text-xs tracking-[0.3em] text-gold/80">
                      {charity.num}
                    </span>
                    <h3 className="mt-3 font-serif text-3xl font-medium text-cream md:text-4xl">
                      {charity.name}
                    </h3>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/40">
                      {charity.title}
                    </p>
                    <p className="mt-5 text-sm font-light leading-relaxed text-cream/60">
                      {charity.desc}
                    </p>
                  </div>
                  <a
                    href={charity.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-rule mt-7 inline-flex w-fit items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-bright"
                  >
                    Visit {charity.name}
                    <ArrowUpRight size={13} strokeWidth={1.75} />
                  </a>
                </Reveal>
              ))}
            </div>

            <HairlineGrow delay={0.1} />

            <Reveal delay={0.25}>
              <Link
                href="/the-cause"
                className="link-rule mt-9 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/80 hover:text-cream"
              >
                Read Armen&apos;s Full Story
                <ArrowRight size={13} strokeWidth={1.75} />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
