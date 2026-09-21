"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MaskLines } from "@/components/motion";

/**
 * A single reflective pull-quote — the emotional breath of the page.
 * Oversized Cinzel apostrophe watermark drifts on scroll behind the words.
 */
export function QuoteMoment() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const markY = useTransform(scrollYProgress, [0, 1], ["18%", "-18%"]);

  return (
    <section ref={ref} className="relative z-10 overflow-hidden py-16 md:py-24">
      {/* Drifting quotation watermark */}
      <motion.span
        aria-hidden
        style={{ y: reduce ? 0 : markY }}
        className="font-serif pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[40vw] italic leading-none text-gold/[0.05] md:text-[26vw]"
      >
        &ldquo;
      </motion.span>

      <div className="container relative mx-auto max-w-4xl px-4 text-center md:px-8">
        <blockquote>
          <p className="font-serif text-3xl font-medium italic leading-[1.25] text-cream md:text-5xl lg:text-6xl">
            <MaskLines
              stagger={0.14}
              lines={[
                <span key="l1">&ldquo;Armen would have loved</span>,
                <span key="l2">every minute of it.&rdquo;</span>,
              ]}
            />
          </p>
          <motion.footer
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <span aria-hidden className="h-px w-8 bg-gold/50" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-bright/90">
              A Family Friend, 2026
            </span>
            <span aria-hidden className="h-px w-8 bg-gold/50" />
          </motion.footer>
        </blockquote>
      </div>
    </section>
  );
}
