import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const metadata = {
  title: "Dinner & Auction Tickets | Armen Z Legacy on the Greens",
  description: "Join the post-tournament celebration. Dinner, silent auction, raffle, and awards—no golf required.",
};

export default function DinnerPage() {
  return (
    <div className="relative min-h-screen">
      {/* Fixed Background */}
      <div
        className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/page-bg/home-parallax.png')" }}
      >
        <div className="absolute inset-0 bg-[#0A0A0A]/80 backdrop-blur-[2px]" />
      </div>

      {/* Hero */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
          <div className="inline-flex items-center justify-center space-x-4 mb-8">
            <div className="w-12 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] font-semibold tracking-[0.2em] uppercase text-sm">
              Join the Celebration
            </span>
            <div className="w-12 h-px bg-[#C9A84C]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#F5F0E8] mb-6">
            Dinner & <span className="text-[#C9A84C] italic">Auction</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Don&apos;t play golf? No problem. Join us for the post-tournament celebration and help support a great cause while enjoying an incredible evening.
          </p>
        </div>
      </section>

      {/* Ticket Info */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* What's Included */}
            <div className="bg-zinc-900/60 backdrop-blur-xl border border-[#C9A84C]/20 p-8 md:p-10 shadow-2xl">
              <h2 className="text-2xl font-serif font-bold text-[#F5F0E8] mb-6">
                What&apos;s Included
              </h2>
              <ul className="space-y-4 text-zinc-300">
                <li className="flex items-start gap-3">
                  <span className="text-[#C9A84C] font-bold mt-0.5">&#10003;</span>
                  <div>
                    <p className="text-[#F5F0E8] font-bold">Catered Lunch</p>
                    <p className="text-sm text-zinc-500">Full-service meal at the clubhouse banquet</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C9A84C] font-bold mt-0.5">&#10003;</span>
                  <div>
                    <p className="text-[#F5F0E8] font-bold">Silent Auction</p>
                    <p className="text-sm text-zinc-500">Bid on exclusive items, experiences, and memorabilia</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C9A84C] font-bold mt-0.5">&#10003;</span>
                  <div>
                    <p className="text-[#F5F0E8] font-bold">Raffle Drawings</p>
                    <p className="text-sm text-zinc-500">Multiple chances to win prizes throughout the evening</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C9A84C] font-bold mt-0.5">&#10003;</span>
                  <div>
                    <p className="text-[#F5F0E8] font-bold">Awards Ceremony</p>
                    <p className="text-sm text-zinc-500">Celebrate the day&apos;s winners and the impact we&apos;re making together</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C9A84C] font-bold mt-0.5">&#10003;</span>
                  <div>
                    <p className="text-[#F5F0E8] font-bold">Drinks & Socializing</p>
                    <p className="text-sm text-zinc-500">Enjoy the afternoon with fellow supporters of the legacy</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Ticket Card */}
            <div className="bg-zinc-900/60 backdrop-blur-xl border-2 border-[#C9A84C] p-8 md:p-10 shadow-2xl relative">
              <div className="absolute -top-1 -left-1 w-10 h-10 border-t-2 border-l-2 border-[#C9A84C]" />
              <div className="absolute -bottom-1 -right-1 w-10 h-10 border-b-2 border-r-2 border-[#C9A84C]" />

              <div className="text-center mb-8">
                <span className="text-[#C9A84C] text-sm uppercase tracking-widest font-bold">
                  Non-Golfer
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#F5F0E8] mt-2">
                  Dinner & Auction Ticket
                </h3>
                <div className="text-5xl font-bold text-[#F5F0E8] mt-4">$75</div>
                <p className="text-zinc-500 text-sm mt-2">Per person</p>
              </div>

              <div className="border-t border-zinc-800/50 pt-6">
                <p className="text-zinc-400 text-sm text-center leading-relaxed mb-6">
                  Perfect for spouses, friends, family members, or anyone who wants to support the cause and enjoy the celebration without hitting the links.
                </p>
                <div className="text-center">
                  <p className="text-[#C9A84C] font-bold text-sm uppercase tracking-wider">
                    Starts at 1:30 PM
                  </p>
                  <p className="text-zinc-500 text-xs mt-1">
                    At the Morongo Golf Club Clubhouse
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="bg-zinc-900/60 backdrop-blur-xl border border-[#C9A84C]/20 p-8 md:p-12 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F5F0E8] mb-2 text-center">
              Reserve Your Seat
            </h2>
            <p className="text-zinc-400 text-center mb-10">
              Fill out the form below to secure your dinner and auction ticket.
            </p>

            <form action="https://formspree.io/f/xbjnzzop" method="POST" className="space-y-6">
              <input type="hidden" name="_cc" value="derbyroomcelebrates@gmail.com" />
              <input type="hidden" name="subject" value="Dinner & Auction Ticket Request: Armen Z Legacy" />
              <input type="hidden" name="form_type" value="dinner_ticket" />
              <input type="hidden" name="ticket_price" value="$75" />

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
                <Label htmlFor="guests" className="text-zinc-300 font-bold text-sm">Number of Tickets</Label>
                <Input id="guests" name="guests" type="number" min="1" max="10" defaultValue="1" className="border-zinc-800 bg-black/50 text-white focus-visible:ring-[#C9A84C] h-14 rounded-none" />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#C9A84C] text-[#0A0A0A] hover:bg-[#F5F0E8] font-bold py-8 text-lg uppercase tracking-widest rounded-none transition-all duration-300 mt-4 shadow-[0_10px_30px_-10px_rgba(201,168,76,0.3)]"
              >
                Reserve My Seat
              </Button>
              <p className="text-zinc-500 text-xs text-center mt-4">
                Our team will confirm your reservation and provide payment details.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <p className="text-zinc-400 text-lg mb-6">
            Want to play golf too?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0A0A0A] font-bold px-8 py-6 rounded-none bg-transparent backdrop-blur-sm uppercase tracking-widest transition-all duration-300">
              <Link href="/register">Register to Play ($150)</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-zinc-700 text-zinc-400 hover:border-[#C9A84C] hover:text-[#C9A84C] font-bold px-8 py-6 rounded-none bg-transparent backdrop-blur-sm uppercase tracking-widest transition-all duration-300">
              <Link href="/donate">Make a Donation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
