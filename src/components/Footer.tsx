import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-[#F5F0E8] py-10 lg:py-12 relative z-20">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
          <Link href="/" className="inline-block relative w-24 h-24 mb-4 opacity-90 hover:opacity-100 transition-opacity">
            <Image 
              src="/images/hero/logo.png" 
              alt="Armen Z Legacy Logo" 
              fill
              className="object-contain drop-shadow-sm"
            />
          </Link>
          <h3 className="font-serif text-lg font-bold text-[#d4af37] mb-4">Armen Z Legacy</h3>
          <p className="font-sans text-sm text-neutral-400 leading-relaxed max-w-sm">
            Join us on the greens to honor the legacy of Armen Z. All proceeds go towards charitable causes supporting our community. Let&apos;s make an impact together.
          </p>
        </div>
        
        <div className="lg:col-span-3 text-center md:text-left">
          <h4 className="font-serif text-lg font-bold text-[#d4af37] mb-4">Quick Links</h4>
          <ul className="space-y-3 font-sans text-sm text-neutral-400">
            <li><Link href="/the-cause" className="hover:text-white transition-colors duration-300">The Cause</Link></li>
            <li><Link href="/sponsorships" className="hover:text-white transition-colors duration-300">Sponsorships</Link></li>
            <li><Link href="/tournament" className="hover:text-white transition-colors duration-300">Tournament Details</Link></li>
            <li><Link href="/register" className="hover:text-white transition-colors duration-300">Register</Link></li>
            <li><Link href="/donate" className="hover:text-white transition-colors duration-300">Donate</Link></li>
            <li><Link href="/dinner" className="hover:text-white transition-colors duration-300">Dinner & Auction</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors duration-300">Contact Us</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-4 text-center md:text-left">
          <h4 className="font-serif text-lg font-bold text-[#d4af37] mb-4">Event Details</h4>
          <ul className="space-y-3 font-sans text-sm text-neutral-400">
            <li><strong className="font-bold text-neutral-300">Date:</strong> June 22, 2026</li>
            <li><strong className="font-bold text-neutral-300">Time:</strong> 8:00 AM PST</li>
            <li><strong className="font-bold text-neutral-300">Location:</strong> Morongo Golf Club</li>
            <li><strong className="font-bold text-neutral-300">Address:</strong> 36211 Champion Dr, <br/>Beaumont, CA 92223</li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 mt-12 pt-6 border-t border-white/10">
        <div className="flex flex-col text-center gap-4 text-xs text-neutral-500 font-sans">
          <p className="max-w-2xl mx-auto mb-2">
            Your donation is tax-deductible. This tournament is operated through the <strong className="text-neutral-400">909 Market Foundation</strong>, a 501(c)(3) charitable organization (EIN: 92-0881763).
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">
            <p>&copy; 2026 Armen Z Legacy. A charity golf tournament.</p>
            <p>
              Website crafted by <a href="https://lastcall.marketing" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-[#d4af37] transition-colors duration-300">Last Call Marketing</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
