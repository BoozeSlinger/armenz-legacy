"use client";

import { animate, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Reveal, MaskLines, HairlineGrow } from "@/components/motion";
import { SITE_CONFIG } from "@/lib/site-config";

type Stat = {
  value: number | null;
  /** Pre-formatted display text (used for the raised total). */
  text?: string;
  label: string;
  detail: string;
  placeholder: boolean;
  placeholderText?: string;
};

// The "raised" card only renders once TOTAL_RAISED_2026 is set in site-config.
const raised = SITE_CONFIG.totalRaised2026;

const stats: Stat[] = [
  ...(raised
    ? [{ value: null, text: raised, label: "Raised for CARMA & PDJF", detail: "Benefiting retired racehorses and disabled jockeys", placeholder: false }]
    : []),
  { value: null, label: "Golfers on the Course", detail: "Four-person scramble tournament play", placeholder: true, placeholderText: "A Full Field" },
  { value: 2, label: "Charities Benefited", detail: "CARMA and the Permanently Disabled Jockeys Fund", placeholder: false },
  { value: 97, label: "Archived Photographs", detail: "Captured across 18 championship holes", placeholder: false },
];

/** Hairline dividers for a 3-up row (no raised total yet) or the 2x2 ledger. */
function statClasses(i: number, n: number) {
  if (n === 3) {
    return `${i > 0 ? "border-t md:border-t-0" : ""} ${i < 2 ? "md:border-r" : ""} ${
      i === 0 ? "md:pr-10" : i === 1 ? "md:px-10" : "md:pl-10"
    }`;
  }
  return `${i % 2 === 0 ? "md:border-r md:pr-14" : "md:pl-14"} ${i >= 2 ? "border-t" : ""} ${
    i === 1 ? "border-t md:border-t-0" : ""
  }`;
}

function AnimatedCounter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.7,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
    </span>
  );
}

export function ImpactSection() {
  return (
    <section className="relative z-10 py-14 md:py-20">
      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        {/* Header */}
        <div className="pb-12">
          <h2 className="max-w-3xl font-serif text-5xl font-medium leading-[1.04] tracking-[-0.015em] text-cream md:text-6xl">
            <MaskLines
              lines={[
                <>What one day on the</>,
                <>course <em className="italic text-gold-bright">put in motion</em>.</>,
              ]}
            />
          </h2>
          <Reveal delay={0.25}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream/60">
              Every entry, partnership, and auction paddle went directly toward
              honoring Armen&apos;s legacy on and off the course.
            </p>
          </Reveal>
        </div>

        <HairlineGrow />

        {/* Ledger grid — typography and hairlines, no boxes */}
        <div className={`grid grid-cols-1 ${stats.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.12}
              className={`flex flex-col justify-between border-gold/15 py-12 md:py-16 ${statClasses(i, stats.length)}`}
            >
              <div>
                {stat.text ? (
                  <span className="font-engraved mb-5 block text-5xl leading-none text-cream md:text-6xl">
                    {stat.text}
                  </span>
                ) : stat.placeholder ? (
                  <span className="mb-5 block font-serif text-4xl font-medium italic leading-none text-gold/80 md:text-5xl">
                    {stat.placeholderText}
                  </span>
                ) : (
                  <span className="font-engraved mb-5 block text-6xl leading-none text-cream md:text-7xl">
                    <AnimatedCounter to={stat.value!} />
                  </span>
                )}
              </div>
              <div>
                <h3 className="text-[13px] font-semibold uppercase tracking-[0.18em] text-cream/90">
                  {stat.label}
                </h3>
                <p className="mt-1.5 text-sm font-light leading-relaxed text-cream/50">
                  {stat.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <HairlineGrow />
      </div>
    </section>
  );
}
