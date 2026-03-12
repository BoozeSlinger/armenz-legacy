import { Hero } from "@/components/Hero";
import { SponsorshipList } from "./SponsorshipList";
import Image from "next/image";

export const metadata = {
  title: "Sponsorships | Legacy on the Greens: The Armen Zennedjian Classic",
  description: "Explore opportunities to sponsor Legacy on the Greens: The Armen Zennedjian Classic charity golf tournament.",
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
            <div className="mb-16 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#F5F0E8] mb-8 drop-shadow-md text-center">Why Sponsor the Armen Z Classic?</h2>
              
              <div className="bg-[#111] border border-zinc-800 p-8 md:p-12 shadow-xl">
                <p className="text-xl font-medium leading-relaxed mb-10 text-[#C9A84C]">
                  Sponsoring the Armen Z Legacy on the Greens puts your brand in front of a curated audience of local business owners, community leaders, and equestrian professionals — people who make decisions and remember the companies that show up for causes they care about.
                </p>
                
                <ul className="space-y-6 text-lg mb-10 text-zinc-300">
                  <li className="flex items-start">
                    <span className="text-[#C9A84C] mr-3 mt-1">✦</span>
                    <span><strong className="text-white">200+ attendees</strong> drawn from the Inland Empire business and equestrian community</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C9A84C] mr-3 mt-1">✦</span>
                    <span><strong className="text-white">Logo placement</strong> on all event materials — scorecards, course signage, printed collateral, and swag distributed to every player</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C9A84C] mr-3 mt-1">✦</span>
                    <span><strong className="text-white">Social media recognition</strong> across Instagram and X to a combined audience of 10,000+ followers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C9A84C] mr-3 mt-1">✦</span>
                    <span><strong className="text-white">VIP seating</strong> for your team at the awards dinner and charity auction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#C9A84C] mr-3 mt-1">✦</span>
                    <span><strong className="text-white">Press coverage</strong> through local media partners covering the event</span>
                  </li>
                </ul>

                <div className="bg-[#0A0A0A] p-6 border-l-4 border-[#C9A84C] mb-8">
                  <p className="italic text-[#F5F0E8]">
                    Your sponsorship is <strong className="text-[#C9A84C]">100% tax-deductible</strong> — both beneficiary organizations, CARMA and the Permanently Disabled Jockeys Fund, hold 501(c)(3) status.
                  </p>
                </div>

                <p className="text-center text-xl font-bold text-white uppercase tracking-wider">
                  Spots are limited. Once a tier is claimed, it&apos;s gone.
                </p>
              </div>
            </div>
            <SponsorshipList />
          </div>
        </section>
      </div>
    </div>
  );
}
