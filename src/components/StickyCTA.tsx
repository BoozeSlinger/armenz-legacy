"use client";

import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { ArrowRight, X } from "lucide-react";

/**
 * Sticky bottom bar that appears after the user scrolls past the hero.
 * Persistent lead magnet for the 2027 list.
 */
export function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setVisible(y > 900));

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 34 }}
          className="pointer-events-none fixed bottom-0 left-0 right-0 z-[90] px-4 pb-4"
        >
          <div className="pointer-events-auto mx-auto flex max-w-xl items-center justify-between gap-4 border border-gold/30 bg-ink/90 py-3.5 pl-5 pr-3.5 shadow-[0_-4px_50px_rgba(10,13,11,0.6)] backdrop-blur-xl">
            <div className="min-w-0 flex-1">
              <p className="font-serif text-base font-medium leading-tight text-cream">
                2027 spots open <em className="italic text-gold-bright">soon</em>
              </p>
              <p className="mt-0.5 truncate text-xs font-light text-cream/55">
                First access before registration goes public
              </p>
            </div>

            <Link
              href="/#early-access"
              className="flex shrink-0 items-center gap-2 bg-gold px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-gold-bright"
              onClick={() => setDismissed(true)}
            >
              Join List
              <ArrowRight size={13} strokeWidth={1.75} />
            </Link>

            <button
              onClick={() => setDismissed(true)}
              aria-label="Dismiss"
              className="shrink-0 p-1.5 text-cream/40 transition-colors hover:text-cream"
            >
              <X size={15} strokeWidth={1.75} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
