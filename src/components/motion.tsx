"use client";

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef, type ReactNode } from "react";

/** House easing — heavy, expensive settle */
export const EASE = [0.16, 1, 0.3, 1] as const;

/* ────────────────────────────────────────────────────────────
   Reveal — fade-up with a soft blur resolve, fires on scroll
   ──────────────────────────────────────────────────────────── */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, amount: 0.25 }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────────────
   MaskLines — each line rises out of a clipped box.
   Pass lines as an array; styling per-line via renderLine.
   ──────────────────────────────────────────────────────────── */
export function MaskLines({
  lines,
  className,
  lineClassName,
  delay = 0,
  stagger = 0.11,
  as: Tag = "span",
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  as?: "span" | "div";
}) {
  const reduce = useReducedMotion();
  const MotionTag = Tag === "div" ? motion.div : motion.span;
  return (
    // Observer lives on the unclipped parent — a clipped child never reports
    // itself in-view, so variants propagate the trigger downward instead.
    <MotionTag
      className={`block ${className ?? ""}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
          <motion.span
            className={`block will-change-transform ${lineClassName ?? ""}`}
            variants={{
              hidden: reduce ? {} : { y: "112%" },
              show: {
                y: "0%",
                transition: { duration: 1.1, delay: delay + i * stagger, ease: EASE },
              },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

/* ────────────────────────────────────────────────────────────
   HairlineGrow — a gold rule that draws itself in
   ──────────────────────────────────────────────────────────── */
export function HairlineGrow({
  className,
  delay = 0,
  origin = "left",
}: {
  className?: string;
  delay?: number;
  origin?: "left" | "center" | "right";
}) {
  const reduce = useReducedMotion();
  const originClass =
    origin === "center" ? "origin-center" : origin === "right" ? "origin-right" : "origin-left";
  return (
    <motion.div
      aria-hidden
      className={`h-px bg-gold/25 ${originClass} ${className ?? ""}`}
      initial={reduce ? false : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 1.2, delay, ease: EASE }}
    />
  );
}

/* ────────────────────────────────────────────────────────────
   Parallax — child drifts vertically against scroll
   ──────────────────────────────────────────────────────────── */
export function Parallax({
  children,
  range = 40,
  className,
}: {
  children: ReactNode;
  range?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [range, -range]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y: reduce ? 0 : (y as MotionValue<number>) }}>{children}</motion.div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   Stagger — orchestrated children reveals
   ──────────────────────────────────────────────────────────── */
export function Stagger({
  children,
  className,
  gap = 0.08,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduce ? {} : { opacity: 0, y, filter: "blur(4px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.8, ease: EASE },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
