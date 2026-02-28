import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-xl text-[#F5F0E8] py-16 border-t border-zinc-900 relative z-20">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4 md:col-span-2">
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <Link href="/" className="inline-block relative w-24 h-24 opacity-90 hover:opacity-100 transition-opacity">
            <Image 
              src="/images/hero/logo.png" 
              alt="Armen Z Legacy Logo" 
              fill
              className="object-contain drop-shadow-sm"
            />
          </Link>
            <h3 className="font-serif text-2xl text-[#C9A84C]">Armen Z Legacy</h3>
          </div>
          <p className="text-sm opacity-80 leading-relaxed max-w-sm">
            Join us on the greens to honor the legacy of Armen Z. All proceeds go towards charitable causes supporting our community. Let&apos;s make an impact together.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-serif text-lg text-[#C9A84C] uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2 opacity-80 text-sm">
            <li><Link href="/sponsorships" className="hover:text-[#C9A84C] transition-colors">Sponsorships</Link></li>
            <li><Link href="/register" className="hover:text-[#C9A84C] transition-colors">Register</Link></li>
            <li><Link href="/venue" className="hover:text-[#C9A84C] transition-colors">Event Venue</Link></li>
            <li><Link href="/contact" className="hover:text-[#C9A84C] transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-serif text-lg text-[#C9A84C] uppercase tracking-wider">Event Details</h4>
          <ul className="space-y-2 opacity-80 text-sm">
            <li><strong>Date:</strong> June 22, 2026</li>
            <li><strong>Time:</strong> 7:00 AM PST</li>
            <li><strong>Location:</strong> Morongo Golf Club</li>
            <li><strong>Address:</strong> 36211 Champion Dr, Beaumont, CA 92223</li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-zinc-900 text-center text-xs opacity-50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Armen Z Legacy. All rights reserved.</p>
        <p>A charity golf tournament.</p>
      </div>
    </footer>
  );
}
