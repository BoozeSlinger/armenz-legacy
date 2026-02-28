import { Hero } from "@/components/Hero";
import { SponsorshipList } from "./SponsorshipList";
import Image from "next/image";

export const metadata = {
  title: "Sponsorships | Armen Z Legacy",
  description: "Explore opportunities to sponsor the Armen Z Legacy on the Greens charity golf tournament.",
};

export default function SponsorshipsPage() {
  return (
    <div className="relative min-h-screen">
      {/* Fixed Background Image with Overlay */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <Image 
          src="/images/page-bg/sponsorships.png" 
          alt="Sponsorships Background" 
          fill 
          className="object-cover" 
          priority 
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/85" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-30 mix-blend-multiply" />
      </div>

      <div className="relative z-10 flex flex-col">
        <Hero 
          title="SPONSORSHIP OPPORTUNITIES" 
          subtitle="Partner with us to honor a legacy and make a direct impact in our community. Explore our 10 unique sponsorship tiers below."
          showCountdown={false} 
          transparentBg={true}
          compact={true}
        />
        <section className="py-24 text-zinc-300">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#F5F0E8] mb-6 drop-shadow-md">Become a Sponsor</h2>
              <p className="text-lg md:text-xl font-medium leading-relaxed opacity-90 drop-shadow-sm text-[#C9A84C]">
                Each tier provides exceptional visibility and includes premium experiences for your team. Find the right opportunity to support our mission and securely claim it today.
              </p>
            </div>
            <SponsorshipList />
          </div>
        </section>
      </div>
    </div>
  );
}
