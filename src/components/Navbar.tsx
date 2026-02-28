"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const routes = [
  { href: "/", label: "Home", id: "hero" },
  { href: "/sponsorships", label: "Sponsorships", id: "sponsorships" },
  { href: "/register", label: "Register", id: "register" },
  { href: "/venue", label: "Venue", id: "venue" },
  { href: "/contact", label: "Contact", id: "contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
        "bg-transparent py-4 md:py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img 
            src="/images/hero/logo.png" 
            alt="Armen Z Legacy Logo" 
            className="w-12 h-12 md:w-16 md:h-16 object-contain opacity-90 hover:opacity-100 transition-opacity drop-shadow-sm"
          />
          <span className="text-[#F5F0E8] font-serif font-bold text-xl md:text-2xl tracking-wide hidden sm:block drop-shadow-md">
            ARMEN Z LEGACY
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium uppercase tracking-wider transition-colors hover:text-[#C9A84C]",
                pathname === route.href ? "text-[#C9A84C]" : "text-[#F5F0E8]",
                isScrolled ? "" : "drop-shadow-md"
              )}
            >
              {route.label}
            </Link>
          ))}
          <Button asChild className="bg-[#C9A84C] text-[#3B1F0A] hover:bg-[#F5F0E8] hover:text-[#1B4332] font-bold rounded-none px-6 shadow-[0_4px_14px_0_rgba(201,168,76,0.39)] hover:shadow-[0_6px_20px_rgba(201,168,76,0.23)] transition-all duration-200">
            <Link href="/register">Register Now</Link>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#F5F0E8] drop-shadow-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#C9A84C]/80 backdrop-blur-2xl shadow-2xl py-12 flex flex-col items-center gap-8 md:hidden border-t border-white/20 animate-in fade-in slide-in-from-top-4 duration-300">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={isMobile ? `/#${route.id}` : route.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "text-2xl font-serif font-black uppercase tracking-[0.2em] transition-all",
                pathname === route.href ? "text-[#3B1F0A]" : "text-[#1B4332]"
              )}
            >
              {route.label}
            </Link>
          ))}
          <Button asChild className="mt-8 bg-[#1B4332] text-[#F5F0E8] w-3/4 max-w-xs rounded-none py-8 text-xl font-bold border-2 border-[#1B4332] hover:bg-transparent hover:text-[#1B4332] transition-all">
            <Link href="/register" onClick={() => setMobileMenuOpen(false)}>Register Now</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
