import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const metadata = {
  title: "Contact — Armenz Legacy Charity Golf Tournament, Beaumont CA",
  description:
    "Questions about the Armenz Legacy charity golf tournament in Beaumont, CA? Contact us about player registration, sponsorship packages, or supporting CARMA & PDJF.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen">
      <div 
        className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/page-bg/register.png')" }}
      >
        <div className="absolute inset-0 bg-[#0A0A0A]/85 backdrop-blur-[2px]" />
      </div>
      <Hero title="GET IN TOUCH" subtitle="Have questions? We're here to help." showCountdown={false} compact={true} transparentBg={true} />
      <section className="py-24 bg-transparent text-zinc-200">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="bg-[#0A0A0A]/80 backdrop-blur-md p-8 md:p-12 border-2 border-white/10 shadow-2xl">
            <h2 className="text-3xl font-serif font-bold text-[#F5F0E8] mb-6 text-center">Send a Message</h2>
            <form action="https://formspree.io/f/xbjnzzop" method="POST" className="space-y-6">
              <input type="hidden" name="_cc" value="derbyroomcelebrates@gmail.com" />
              <input type="hidden" name="subject" value="New Contact Inquiry: Armen Z Legacy" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-zinc-300 font-bold text-sm">First Name</Label>
                  <Input id="firstName" name="firstName" required className="border-zinc-700 bg-zinc-900/50 text-white focus-visible:ring-[#C9A84C] p-6 rounded-none" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-zinc-300 font-bold text-sm">Last Name</Label>
                  <Input id="lastName" name="lastName" required className="border-zinc-700 bg-zinc-900/50 text-white focus-visible:ring-[#C9A84C] p-6 rounded-none" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-zinc-300 font-bold text-sm">Email Address</Label>
                <Input id="email" name="email" type="email" required className="border-zinc-700 bg-zinc-900/50 text-white focus-visible:ring-[#C9A84C] p-6 rounded-none" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-zinc-300 font-bold text-sm">Message</Label>
                <Textarea id="message" name="message" required className="border-zinc-700 bg-zinc-900/50 text-white focus-visible:ring-[#C9A84C] p-4 rounded-none min-h-[150px]" />
              </div>
              <Button type="submit" size="lg" className="w-full bg-[#C9A84C] text-[#3B1F0A] hover:bg-[#F5F0E8] hover:text-[#1B4332] font-bold py-6 text-lg rounded-none transition-colors duration-200 mt-4">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
