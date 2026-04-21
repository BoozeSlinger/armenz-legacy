import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero";
import { CauseSection } from "@/components/CauseSection";
import { PricingCards } from "@/components/PricingCards";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Below-fold components — loaded in separate chunks after the page is interactive
const SponsorshipList = dynamic(
  () => import("./sponsorships/SponsorshipList").then((mod) => mod.SponsorshipList),
  { loading: () => <div className="py-16" /> }
);

const VenueSection = dynamic(
  () => import("@/components/VenueSection").then((m) => ({ default: m.VenueSection })),
  { loading: () => <div className="py-16" /> }
);

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Preload the critical fixed background so it's fetched immediately */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <link rel="preload" as="image" href="/images/page-bg/home-parallax.png" />

      {/* Fixed Background Image for Parallax Effect */}
      <div 
        className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/page-bg/home-parallax.png')" }}
      >
        <div className="absolute inset-0 bg-[#0A0A0A]/70 backdrop-blur-[2px]" />
      </div>
      <div id="hero">
        <h1 className="sr-only">
          Armenz Legacy Charity Golf Tournament in Beaumont, CA — Morongo Golf Club at Tukwet Canyon, June 22, 2026
        </h1>
        <Hero
          transparentBg={true}
          subtitle="A charity golf scramble at Morongo Golf Club at Tukwet Canyon in Beaumont, CA — June 22, 2026. Benefiting CARMA's retired racehorses and the Permanently Disabled Jockeys Fund."
        />
      </div>

      <CauseSection />

      <PricingCards />

      {/* Sponsors Section */}
      <section id="sponsors" className="py-24 md:py-32 relative z-10 bg-black/40 backdrop-blur-md border-t border-[#C9A84C]/10">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold italic text-[#F5F0E8] mb-6 drop-shadow-md">Our Generous Sponsors</h2>
            <p className="text-lg md:text-xl font-medium leading-relaxed opacity-90 drop-shadow-sm text-[#C9A84C]">
              We are incredibly grateful for the support of our partners who make this legacy possible.
            </p>
          </div>
          
          {/* Triple Crown Sponsor */}
          <div className="flex justify-center mb-16">
             <div className="bg-zinc-900/60 backdrop-blur-xl border border-[#C9A84C]/40 p-8 md:p-12 shadow-[0_0_40px_rgba(201,168,76,0.15)] relative w-full max-w-2xl text-center group hover:bg-[#C9A84C]/5 transition-all duration-500">
              <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-[#C9A84C]" />
              <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-[#C9A84C]" />
              <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-[#C9A84C]" />
              <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-[#C9A84C]" />
              
              <p className="text-[#C9A84C] text-sm uppercase tracking-widest font-black mb-6 flex items-center justify-center gap-3">
                <span className="w-12 h-px bg-[#C9A84C]/50" />
                Triple Crown Sponsor
                <span className="w-12 h-px bg-[#C9A84C]/50" />
              </p>
              
              <a href="https://tukwetcanyon.com/" target="_blank" rel="noopener noreferrer" className="block relative h-32 md:h-40 w-full mb-4 md:grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <img
                    src="/images/Morongologo.png"
                    alt="Armenz Legacy Charity Golf Tournament Triple Crown Sponsor — Morongo Band of Mission Indians"
                    className="max-w-full max-h-full object-contain drop-shadow-lg"
                  />
                </div>
              </a>
              
              <h3 className="text-2xl font-serif font-bold text-[#F5F0E8]">Morongo Band of Mission Indians</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Opportunities Section */}
      <section id="sponsorships" className="py-24 md:py-32 relative z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold italic text-[#F5F0E8] mb-6 drop-shadow-md">Become A Sponsor</h2>
            <p className="text-lg md:text-xl font-medium leading-relaxed opacity-90 drop-shadow-sm text-[#C9A84C]">
              Partner with us to honor a legacy and make a direct impact in our community.
            </p>
          </div>
          <SponsorshipList limit={3} />
          
          <div className="text-center mt-16">
            <Button asChild variant="outline" size="lg" className="border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0A0A0A] font-bold uppercase tracking-widest px-8 py-6 rounded-none bg-transparent backdrop-blur-sm transition-all duration-300">
              <Link href="/sponsorships">View All Sponsorship Opportunities</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Schedule & Format Section */}
      <section id="schedule" className="py-24 md:py-32 relative z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="bg-zinc-900/60 backdrop-blur-xl border border-[#C9A84C]/20 p-8 md:p-12 lg:p-16 shadow-2xl relative">
            {/* Corner accents */}
            <div className="absolute -top-1 -left-1 w-10 h-10 border-t-2 border-l-2 border-[#C9A84C]" />
            <div className="absolute -top-1 -right-1 w-10 h-10 border-t-2 border-r-2 border-[#C9A84C]" />
            <div className="absolute -bottom-1 -left-1 w-10 h-10 border-b-2 border-l-2 border-[#C9A84C]" />
            <div className="absolute -bottom-1 -right-1 w-10 h-10 border-b-2 border-r-2 border-[#C9A84C]" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold italic text-[#F5F0E8] mb-6">Schedule & Format</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-[#C9A84C] text-sm uppercase tracking-widest font-black mb-2">Tournament Format</h3>
                    <p className="text-[#F5F0E8] text-2xl font-serif font-bold italic">4-Person Scramble</p>
                  </div>
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    Join us for a day of friendly competition and camaraderie. Our scramble format ensures everyone can participate and contribute to their team&apos;s success, regardless of skill level.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-[#F5F0E8] text-xl font-serif font-bold italic mb-8 flex items-center gap-3">
                  <span className="w-8 h-px bg-[#C9A84C]" />
                  Tournament Timeline
                </h3>

                <ul className="space-y-12">
                  <li className="flex gap-6">
                    <span className="text-[#d4af37] font-bold text-lg tabular-nums whitespace-nowrap pt-1">08:00 AM</span>
                    <div className="space-y-1">
                      <p className="text-[#F5F0E8] font-bold uppercase tracking-wide text-xl">Registration & Breakfast</p>
                      <p className="text-zinc-500 text-sm text-pretty italic">Complimentary breakfast provided by The Derby Room.</p>
                    </div>
                  </li>
                  <li className="flex gap-6">
                    <span className="text-[#d4af37] font-bold text-lg tabular-nums whitespace-nowrap pt-1">10:00 AM</span>
                    <div className="space-y-1">
                      <p className="text-[#F5F0E8] font-bold uppercase tracking-wide text-xl">Shotgun Start</p>
                      <p className="text-zinc-500 text-sm text-pretty italic">Tournament play begins across all 18 holes.</p>
                    </div>
                  </li>
                  <li className="flex gap-6">
                    <span className="text-[#d4af37] font-bold text-lg tabular-nums whitespace-nowrap pt-1">04:00 PM</span>
                    <div className="space-y-1">
                      <p className="text-[#F5F0E8] font-bold uppercase tracking-wide text-xl">Play Concludes</p>
                      <p className="text-zinc-500 text-sm text-pretty italic">Foursomes finish up and head to the clubhouse.</p>
                    </div>
                  </li>
                  <li className="flex gap-6">
                    <span className="text-[#d4af37] font-bold text-lg tabular-nums whitespace-nowrap pt-1 text-sm">Following</span>
                    <div className="space-y-1">
                      <p className="text-[#F5F0E8] font-bold uppercase tracking-wide text-xl">Dinner, Auction & Awards</p>
                      <p className="text-zinc-500 text-sm text-pretty italic">Celebration, charity auction, and winner recognition.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VenueSection />

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 relative z-10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="bg-black/60 backdrop-blur-md p-8 md:p-12 border border-white/5 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold italic text-[#F5F0E8] mb-6 text-center">Get In Touch</h2>
            <p className="text-[#C9A84C] font-medium text-center mb-10 text-lg uppercase tracking-widest">Have questions? We&apos;re here to help.</p>
            <form action="https://formspree.io/f/xbjnzzop" method="POST" className="space-y-6">
              <input type="hidden" name="_cc" value="derbyroomcelebrates@gmail.com" />
              <input type="hidden" name="subject" value="New Contact Inquiry: Armen Z Legacy" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-zinc-300 font-bold text-sm">First Name</Label>
                  <Input id="firstName" name="firstName" required className="border-zinc-800 bg-black/50 text-white focus-visible:ring-[#C9A84C] h-14 rounded-none" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-zinc-300 font-bold text-sm">Last Name</Label>
                  <Input id="lastName" name="lastName" required className="border-zinc-800 bg-black/50 text-white focus-visible:ring-[#C9A84C] h-14 rounded-none" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-zinc-300 font-bold text-sm">Email Address</Label>
                <Input id="email" name="email" type="email" required className="border-zinc-800 bg-black/50 text-white focus-visible:ring-[#C9A84C] h-14 rounded-none" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-zinc-300 font-bold text-sm">Message</Label>
                <Textarea id="message" name="message" required className="border-zinc-800 bg-black/50 text-white focus-visible:ring-[#C9A84C] p-4 rounded-none min-h-[150px]" />
              </div>
              <Button type="submit" size="lg" className="w-full bg-[#C9A84C] text-[#0A0A0A] hover:bg-[#F5F0E8] font-bold py-8 text-lg uppercase tracking-widest rounded-none transition-all duration-300 mt-4 shadow-[0_10px_30px_-10px_rgba(201,168,76,0.3)]">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
