import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const metadata = {
  title: "Donate | Legacy on the Greens: The Armen Zennedjian Classic",
  description: "Support Legacy on the Greens: The Armen Zennedjian Classic with a tax-deductible donation. Every dollar counts.",
};

const presetAmounts = [
  { value: "50", label: "$50", description: "Friend of the Cause" },
  { value: "100", label: "$100", description: "Champion Supporter" },
  { value: "250", label: "$250", description: "Legacy Builder" },
  { value: "500", label: "$500", description: "Patron of the Sport" },
];

export default function DonatePage() {
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
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center space-x-4 mb-8">
            <div className="w-12 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] font-semibold tracking-[0.2em] uppercase text-sm">
              Support the Legacy
            </span>
            <div className="w-12 h-px bg-[#C9A84C]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#F5F0E8] mb-6">
            Make a <span className="text-[#C9A84C] italic">Donation</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            You don&apos;t have to play golf to make a difference. Every contribution, no matter the size, goes directly to supporting retired Thoroughbreds and injured jockeys.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="bg-zinc-900/60 backdrop-blur-xl border border-[#C9A84C]/20 p-8 md:p-12 shadow-2xl relative">
            <div className="absolute -top-1 -left-1 w-10 h-10 border-t-2 border-l-2 border-[#C9A84C]" />
            <div className="absolute -bottom-1 -right-1 w-10 h-10 border-b-2 border-r-2 border-[#C9A84C]" />

            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#F5F0E8] mb-2 text-center">
              Choose Your Impact
            </h2>
            <p className="text-zinc-400 text-center mb-10">
              Select a preset amount or enter a custom donation.
            </p>

            {/* Preset Tiers */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {presetAmounts.map((tier) => (
                <button
                  key={tier.value}
                  className="group border border-[#C9A84C]/40 bg-zinc-800/30 backdrop-blur-sm p-4 text-center hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-2xl font-bold text-[#F5F0E8] group-hover:text-[#C9A84C] transition-colors">
                    {tier.label}
                  </div>
                  <div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">
                    {tier.description}
                  </div>
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-10">
              <Label htmlFor="customAmount" className="text-zinc-300 font-bold text-sm mb-2 block">
                Custom Amount
              </Label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C9A84C] font-bold text-lg">$</span>
                <Input
                  id="customAmount"
                  name="customAmount"
                  type="number"
                  placeholder="Enter amount"
                  className="border-zinc-800 bg-black/50 text-white focus-visible:ring-[#C9A84C] h-14 rounded-none pl-8 text-lg"
                />
              </div>
            </div>

            <div className="w-full h-px bg-zinc-800 my-8" />

            {/* Donor Info */}
            <form action="https://formspree.io/f/xbjnzzop" method="POST" className="space-y-6">
              <input type="hidden" name="_cc" value="derbyroomcelebrates@gmail.com" />
              <input type="hidden" name="subject" value="New Donation Inquiry: Armen Z Legacy" />
              <input type="hidden" name="form_type" value="donation" />

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
                <Label htmlFor="message" className="text-zinc-300 font-bold text-sm">
                  Message <span className="text-zinc-500 font-normal">(Optional)</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Share a memory of Armen, or tell us why you're donating..."
                  className="border-zinc-800 bg-black/50 text-white focus-visible:ring-[#C9A84C] p-4 rounded-none min-h-[100px]"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#C9A84C] text-[#0A0A0A] hover:bg-[#F5F0E8] font-bold py-8 text-lg uppercase tracking-widest rounded-none transition-all duration-300 mt-4 shadow-[0_10px_30px_-10px_rgba(201,168,76,0.3)]"
              >
                Submit Donation Inquiry
              </Button>
              <p className="text-zinc-500 text-xs text-center mt-4">
                Our team will reach out to confirm your donation and provide payment details. Your donation is tax deductible - this tournament is run through <strong className="text-zinc-400">909 Market Foundation</strong>, a 501(c)(3) charitable organization. EIN: 92-0881763.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Thank You Note */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <div className="border-y border-zinc-800/50 py-10">
            <p className="text-[#F5F0E8] font-serif text-2xl md:text-3xl italic leading-relaxed">
              &ldquo;Thank you for keeping Armen&apos;s spirit alive. Your generosity gives second chances to the horses and riders who give everything to the sport we love.&rdquo;
            </p>
            <p className="text-[#C9A84C] text-sm uppercase tracking-widest font-bold mt-6">
              The Armen Z Legacy Family
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
