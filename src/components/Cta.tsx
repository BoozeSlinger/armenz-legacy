"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CtaProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  className?: string;
}

/**
 * House CTA — sharp-cornered, engraved-caps button with a nested arrow chip.
 * primary: gold plate / ink text. ghost: hairline cream frame.
 */
export function Cta({ href, children, variant = "primary", external, className }: CtaProps) {
  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      <span
        className={cn(
          "relative z-10 grid size-8 shrink-0 place-items-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5",
          variant === "primary" ? "bg-ink/12" : "bg-gold/12"
        )}
        aria-hidden
      >
        {external ? (
          <ArrowUpRight size={13} strokeWidth={1.75} />
        ) : (
          <ArrowRight size={13} strokeWidth={1.75} />
        )}
      </span>
      {/* Sweep shine */}
      <span
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/cta:translate-x-full"
        aria-hidden
      />
    </>
  );

  const base = cn(
    "group/cta relative inline-flex items-center gap-3 overflow-hidden pl-7 pr-2.5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.985]",
    variant === "primary"
      ? "bg-gold text-ink hover:bg-gold-bright"
      : "border border-cream/25 text-cream hover:border-gold/60 hover:text-gold-bright",
    className
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={base}>
      {inner}
    </Link>
  );
}
