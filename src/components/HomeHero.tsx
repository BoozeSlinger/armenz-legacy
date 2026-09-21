"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CldImage } from "@/components/gallery/CldImage";
import { Cta } from "@/components/Cta";
import { MaskLines, EASE } from "@/components/motion";

const heroPhoto = {
  id: "Copy_of_DSC_0060_kilsm7",
  v: 1783372976,
  w: 6000,
  h: 4000,
  alt: "The fairways of Morongo Golf Club at Tukwet Canyon during the inaugural Armenz Legacy Classic",
};

export function HomeHero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  // Photo drifts up slightly as the user scrolls past — depth without hijack
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="home-hero" ref={ref} className="relative flex min-h-[100dvh] items-end overflow-hidden">
      {/* Photography */}
      <motion.div style={{ y: reduce ? "0%" : imgY }} className="absolute inset-0">
        <motion.div
          className="absolute inset-[-4%]"
          initial={reduce ? false : { scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.6, ease: EASE }}
        >
          <CldImage
            photo={heroPhoto}
            fill
            sizes="100vw"
            priority
            className="object-cover object-[center_35%] brightness-[0.92] saturate-[0.82]"
          />
        </motion.div>
      </motion.div>

      {/* Scrims — legibility without murdering the photo */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/45" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/15 to-transparent" aria-hidden />

      {/* Content */}
      <motion.div
        style={{ opacity: reduce ? 1 : contentOpacity }}
        className="container relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-36 md:px-8 md:pb-28"
      >
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          className="mb-6 text-[11px] font-semibold uppercase tracking-[0.32em] text-gold-bright/90"
        >
          Morongo Golf Club at Tukwet Canyon · Beaumont, California
        </motion.p>

        <h1 className="max-w-5xl font-serif text-[clamp(2.9rem,8vw,6.75rem)] font-medium leading-[1.02] tracking-[-0.015em] text-cream">
          <MaskLines
            delay={0.25}
            lines={[
              <>2026 was <em className="italic text-gold-bright">unforgettable</em>.</>,
              <>2027 will be <em className="italic text-gold-bright">bigger</em>.</>,
            ]}
          />
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease: EASE }}
          className="mt-7 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg"
        >
          The inaugural Classic filled Tukwet Canyon for CARMA&apos;s retired racehorses
          and the Permanently Disabled Jockeys Fund.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95, ease: EASE }}
          className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
        >
          <Cta href="/#early-access">Join The 2027 List</Cta>
        </motion.div>
      </motion.div>

      {/* Base hairline */}
      <motion.div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-px origin-left bg-gold/30"
        initial={reduce ? false : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.6, delay: 1.1, ease: EASE }}
      />
    </section>
  );
}
