"use client";

import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";

const DISMISS_KEY = "armenz:sticky-cta-dismissed";

function readDismissed(): boolean {
  try {
    return window.sessionStorage.getItem(DISMISS_KEY) === "1";
  } catch {
    return false;
  }
}

function writeDismissed() {
  try {
    window.sessionStorage.setItem(DISMISS_KEY, "1");
  } catch {
    /* storage unavailable: dismissal lasts until the next navigation */
  }
}

/**
 * Sticky bottom bar for the 2027 list.
 *
 * - Appears only after the hero (`heroSelector`) has scrolled out of view.
 * - Hides while any <form> or the site footer is in view, so it never sits on top
 *   of a form field or the footer copy / CTA band.
 * - Dismissal is remembered for the browser session (sessionStorage).
 */
export function StickyCTA({ heroSelector = "#home-hero" }: { heroSelector?: string }) {
  const reduce = useReducedMotion();
  const [dismissed, setDismissed] = useState(false);
  const [heroGone, setHeroGone] = useState(false);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    // Session dismissal is checked before anything can become visible, so
    // there is no flash. Without a hero element the banner stays hidden.
    if (dismissed || readDismissed()) return;

    const hero = document.querySelector(heroSelector);
    const blockers = Array.from(document.querySelectorAll("form, [data-site-footer]"));
    const inView = new Set<Element>();

    const heroObserver = new IntersectionObserver(([entry]) => {
      // Not intersecting and above the viewport = scrolled past.
      setHeroGone(!entry.isIntersecting && entry.boundingClientRect.top < 0);
    });
    if (hero) heroObserver.observe(hero);

    const blockObserver = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) inView.add(e.target);
        else inView.delete(e.target);
      }
      setBlocked(inView.size > 0);
    });
    blockers.forEach((el) => blockObserver.observe(el));

    return () => {
      heroObserver.disconnect();
      blockObserver.disconnect();
    };
  }, [dismissed, heroSelector]);

  const show = !dismissed && heroGone && !blocked;

  const dismiss = () => {
    writeDismissed();
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="region"
          aria-label="2027 early access"
          initial={reduce ? { opacity: 0 } : { y: 90, opacity: 0 }}
          animate={reduce ? { opacity: 1 } : { y: 0, opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { y: 90, opacity: 0 }}
          transition={reduce ? { duration: 0.01 } : { type: "spring", stiffness: 280, damping: 34 }}
          className="pointer-events-none fixed bottom-0 left-0 right-0 z-[90] px-4 pb-3 sm:pb-4"
        >
          <div className="pointer-events-auto mx-auto flex max-w-xl items-center justify-between gap-3 border border-gold/30 bg-ink/95 py-2.5 pl-4 pr-2.5 shadow-[0_-4px_50px_rgba(10,13,11,0.6)] backdrop-blur-xl sm:gap-4 sm:py-3.5 sm:pl-5 sm:pr-3.5">
            <div className="min-w-0 flex-1">
              <p className="font-serif text-base font-medium leading-tight text-cream">
                2027 spots open <em className="italic text-gold-bright">soon</em>
              </p>
              <p className="mt-0.5 hidden truncate text-xs font-light text-cream/60 sm:block">
                First access before registration goes public
              </p>
            </div>

            <Link
              href="/#early-access"
              className="flex shrink-0 items-center gap-2 bg-gold px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-gold-bright sm:px-5"
            >
              Join List
              <ArrowRight size={13} strokeWidth={1.75} />
            </Link>

            <button
              onClick={dismiss}
              aria-label="Dismiss"
              className="shrink-0 p-1.5 text-cream/60 transition-colors hover:text-cream"
            >
              <X size={15} strokeWidth={1.75} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
