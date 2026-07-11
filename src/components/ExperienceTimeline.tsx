"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, MaskLines, StaggerItem, Stagger } from "@/components/motion";

const chapters = [
  {
    time: "7:30 AM",
    title: "The Arrival",
    body: "Fog lifting off Tukwet Canyon. Coffee in hand, range balls flying, and the energy of something about to happen.",
    detail: "Registration, Range & Welcome Gifts",
  },
  {
    time: "9:00 AM",
    title: "Shotgun Start",
    body: "A full field, 18 holes, one mission. The inaugural Legacy on the Greens was officially underway.",
    detail: "Four-Person Scramble Format",
  },
  {
    time: "2:00 PM",
    title: "The 19th Hole",
    body: "Cold drinks, live scoring, and the kind of stories that only happen between the ropes. Sponsors and players side by side.",
    detail: "Awards, Contests & Raffle",
  },
  {
    time: "6:00 PM",
    title: "The Derby Room",
    body: "An evening reception at the venue that started it all. Auction paddles up, glasses raised, every dollar going to work.",
    detail: "Silent Auction · Reception Dinner",
  },
];

export function ExperienceTimeline() {
  return (
    <section className="relative z-10 bg-ink-2 py-24 md:py-36">
      <div className="glow-gold-faint absolute inset-0" aria-hidden />
      <div className="container relative mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Sticky intro */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <h2 className="font-serif text-5xl font-medium leading-[1.04] tracking-[-0.015em] text-cream md:text-6xl">
                <MaskLines
                  lines={[
                    <>From first light</>,
                    <>to <em className="italic text-gold-bright">last call</em>.</>,
                  ]}
                />
              </h2>
              <Reveal delay={0.25}>
                <p className="mt-6 max-w-sm text-base leading-relaxed text-cream/60">
                  June 22, 2026. One day at Morongo Golf Club at Tukwet Canyon,
                  and a legacy set in motion.
                </p>
                <Link
                  href="/#early-access"
                  className="link-rule mt-8 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-bright"
                >
                  Be Part of 2027
                  <ArrowRight size={13} strokeWidth={1.75} />
                </Link>
              </Reveal>
            </div>
          </div>

          {/* Chapter ledger */}
          <div className="lg:col-span-7">
            <Stagger gap={0.14} className="relative border-l border-gold/20 pl-8 md:pl-12">
              {chapters.map((ch) => (
                <StaggerItem key={ch.time} className="group relative pb-14 last:pb-0">
                  {/* Node on the spine */}
                  <span
                    aria-hidden
                    className="absolute -left-8 top-3 h-px w-5 bg-gold/50 transition-all duration-500 group-hover:w-7 group-hover:bg-gold md:-left-12 md:w-7 md:group-hover:w-9"
                  />
                  <p className="font-engraved text-sm tracking-[0.18em] text-gold-bright">
                    {ch.time}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl font-medium text-cream transition-colors duration-500 group-hover:text-gold-bright md:text-4xl">
                    {ch.title}
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] font-light leading-relaxed text-cream/60">
                    {ch.body}
                  </p>
                  <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-cream/35">
                    {ch.detail}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
