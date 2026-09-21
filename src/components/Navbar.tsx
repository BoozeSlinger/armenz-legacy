"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { EASE } from "@/components/motion";
import { donationsOpen } from "@/lib/site-config";

const routes = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/sponsorships", label: "Sponsors" },
  { href: "/the-cause", label: "The Cause" },
  ...(donationsOpen ? [{ href: "/donate", label: "Donate" }] : []),
  { href: "/news", label: "News" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const close = useCallback(() => setMobileMenuOpen(false), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        isScrolled
          ? "border-b border-gold/15 bg-ink/85 py-2.5 backdrop-blur-xl"
          : "border-b border-transparent bg-gradient-to-b from-ink/70 to-transparent py-4"
      )}
    >
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8">
        <Link href="/" className="group flex items-center gap-3 shrink-0" onClick={close}>
          <Image
            src="/images/hero/logo.png"
            alt="Armenz Legacy crest"
            width={44}
            height={44}
            className="h-10 w-10 object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
            priority
          />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-serif text-lg font-semibold tracking-[0.08em] text-cream">
              ARMEN Z LEGACY
            </span>
            <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.32em] text-gold/80">
              Charity Golf Classic
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Main navigation">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "group relative whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300",
                pathname === route.href ? "text-gold" : "text-cream/80 hover:text-cream"
              )}
            >
              {route.label}
              <span
                className={cn(
                  "absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  pathname === route.href ? "w-full" : "w-0 group-hover:w-full"
                )}
              />
            </Link>
          ))}
          <Link
            href="/#early-access"
            className="bg-gold px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-gold-bright active:scale-[0.985]"
          >
            Join 2027 List
          </Link>
        </nav>

        {/* Mobile toggle — morphing hamburger */}
        <button
          className="-mr-2 flex h-12 w-12 items-center justify-center lg:hidden"
          onClick={() => setMobileMenuOpen(o => !o)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className="relative block h-3 w-6">
            <span
              className={cn(
                "absolute left-0 top-0 h-px w-6 bg-cream transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
                mobileMenuOpen && "top-1.5 rotate-45"
              )}
            />
            <span
              className={cn(
                "absolute left-0 bottom-0 h-px w-6 bg-cream transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
                mobileMenuOpen && "bottom-1.5 -rotate-45"
              )}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu — full-screen ink overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="fixed inset-0 top-0 z-[-1] flex flex-col justify-between bg-ink/[0.97] pt-28 pb-10 backdrop-blur-2xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <nav className="flex flex-col px-8">
              {routes.map((route, i) => (
                <span key={route.href} className="overflow-hidden border-b border-gold/10">
                  <motion.span
                    className="block"
                    initial={reduce ? false : { y: "110%" }}
                    animate={{ y: "0%" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, delay: 0.05 + i * 0.06, ease: EASE }}
                  >
                    <Link
                      href={route.href}
                      onClick={close}
                      className={cn(
                        "flex items-baseline justify-between py-4 font-serif text-4xl font-medium transition-colors active:text-gold-bright",
                        pathname === route.href ? "text-gold" : "text-cream"
                      )}
                    >
                      {route.label}
                    </Link>
                  </motion.span>
                </span>
              ))}
            </nav>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
              className="px-8"
            >
              <Link
                href="/#early-access"
                onClick={close}
                className="block w-full bg-gold py-5 text-center text-xs font-semibold uppercase tracking-[0.25em] text-ink transition-colors active:bg-gold-bright"
              >
                Join The 2027 List
              </Link>
              <p className="mt-6 text-center text-[10px] uppercase tracking-[0.3em] text-cream/40">
                Morongo Golf Club at Tukwet Canyon
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
