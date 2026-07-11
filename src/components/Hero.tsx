"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Cta } from "@/components/Cta";
import { EASE } from "@/components/motion";

interface HeroCta { href: string; label: string; }
interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  eyebrow?: string;
  showCountdown?: boolean; // retained for API compat — countdown retired post-event
  compact?: boolean;
  transparentBg?: boolean;
  showLogo?: boolean; // retained for API compat — crest lives in the navbar now
  showButtons?: boolean;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
}

/**
 * Editorial page header for inner pages — left-aligned, serif display,
 * rises out of a clipped mask. The homepage uses HomeHero instead.
 */
export function Hero({
  title = (
    <>
      Honoring a legacy, <em className="italic text-gold-bright">driving</em> for a cause.
    </>
  ),
  subtitle = "The inaugural Armenz Legacy Classic brought the community together for CARMA's retired racehorses and the Permanently Disabled Jockeys Fund.",
  eyebrow,
  compact = false,
  transparentBg = false,
  showButtons = true,
  primaryCta = { href: "/#early-access", label: "Join The 2027 List" },
  secondaryCta = { href: "/gallery", label: "View The Gallery" },
}: HeroProps) {
  const reduce = useReducedMotion();

  return (
    <section
      className={cn(
        "relative flex w-full items-end overflow-hidden",
        compact ? "min-h-[52vh] pt-36 pb-14 md:min-h-[58vh] md:pb-16" : "min-h-[72vh] pt-40 pb-16 md:pb-20",
        transparentBg ? "bg-transparent" : "bg-ink"
      )}
    >
      {!transparentBg && (
        <div className="glow-gold-faint absolute inset-0" aria-hidden />
      )}

      <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        {eyebrow && (
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-bright/90"
          >
            {eyebrow}
          </motion.p>
        )}

        <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
          <motion.h1
            initial={reduce ? false : { y: "108%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
            className="max-w-4xl font-serif text-[clamp(2.5rem,6vw,4.75rem)] font-medium leading-[1.04] tracking-[-0.015em] text-cream"
          >
            {title}
          </motion.h1>
        </span>

        {subtitle && (
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
            className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 md:text-lg"
          >
            {subtitle}
          </motion.p>
        )}

        {showButtons && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <Cta href={primaryCta.href}>{primaryCta.label}</Cta>
            <Cta href={secondaryCta.href} variant="ghost">{secondaryCta.label}</Cta>
          </motion.div>
        )}
      </div>

      {/* Base hairline */}
      <motion.div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-px origin-left bg-gold/25"
        initial={reduce ? false : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 0.6, ease: EASE }}
      />
    </section>
  );
}
