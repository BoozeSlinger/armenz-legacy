"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const routes = [
  { href: "/", label: "Home", id: "hero" },
  { href: "/the-cause", label: "The Cause", id: "the-cause" },
  { href: "/sponsorships", label: "Sponsors", id: "sponsorships" },
  { href: "/tournament", label: "Tournament", id: "tournament" },
  { href: "/register", label: "Register", id: "register" },
  { href: "/donate", label: "Donate", id: "donate" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 pointer-events-auto",
        isScrolled
          ? "bg-[#0A0A0A]/85 backdrop-blur-md shadow-lg py-2 lg:py-3 border-b border-[#C9A84C]/15"
          : "bg-transparent py-3 lg:py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/hero/logo.png"
            alt="Armen Z Legacy Logo"
            width={56}
            height={56}
            className="w-10 h-10 lg:w-14 lg:h-14 object-contain opacity-90 hover:opacity-100 transition-opacity drop-shadow-sm"
            priority
          />
          <span className="text-[#F5F0E8] font-serif font-bold text-base lg:text-xl tracking-wide hidden sm:block drop-shadow-md whitespace-nowrap">
            ARMEN Z LEGACY
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-xs xl:text-sm font-medium uppercase tracking-wider transition-colors hover:text-[#C9A84C] whitespace-nowrap",
                pathname === route.href ? "text-[#C9A84C]" : "text-[#F5F0E8]",
                isScrolled ? "" : "drop-shadow-md"
              )}
            >
              {route.label}
            </Link>
          ))}
          <Button asChild size="sm" className="bg-[#C9A84C] text-[#3B1F0A] hover:bg-[#F5F0E8] hover:text-[#1B4332] font-bold rounded-none px-5 shadow-[0_4px_14px_0_rgba(201,168,76,0.39)] hover:shadow-[0_6px_20px_rgba(201,168,76,0.23)] transition-all duration-200 text-xs uppercase tracking-wider">
            <Link href="/register">Register Now</Link>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-[#F5F0E8] drop-shadow-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0A0A0A]/95 backdrop-blur-2xl shadow-2xl py-10 flex flex-col items-center gap-6 lg:hidden border-t border-[#C9A84C]/20 animate-in fade-in slide-in-from-top-4 duration-300">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "text-xl font-serif font-bold uppercase tracking-[0.15em] transition-all",
                pathname === route.href ? "text-[#C9A84C]" : "text-[#F5F0E8]"
              )}
            >
              {route.label}
            </Link>
          ))}
          <Link href="/dinner" onClick={() => setMobileMenuOpen(false)} className="text-xl font-serif font-bold uppercase tracking-[0.15em] text-[#F5F0E8] transition-all">
            Dinner & Auction
          </Link>
          <Button asChild className="mt-4 bg-[#C9A84C] text-[#0A0A0A] w-3/4 max-w-xs rounded-none py-6 text-lg font-bold hover:bg-[#F5F0E8] transition-all">
            <Link href="/register" onClick={() => setMobileMenuOpen(false)}>Register Now</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
