import { Hero } from "@/components/Hero";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SponsorshipList } from "./sponsorships/SponsorshipList";
import { RegisterForm } from "@/components/RegisterForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Fixed Background Image for Parallax Effect */}
      <div 
        className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/page-bg/home-parallax.png')" }}
      >
        <div className="absolute inset-0 bg-[#0A0A0A]/70 backdrop-blur-[2px]" />
      </div>
      <div id="hero">
        <Hero transparentBg={true} />
      </div>

      <section className="py-24 md:py-32 bg-transparent text-zinc-300 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A84C]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1B4332]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10 text-center">
          <div className="inline-flex items-center justify-center space-x-4 mb-8">
            <div className="w-12 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] font-semibold tracking-[0.2em] uppercase text-sm">Our Mission</span>
            <div className="w-12 h-px bg-[#C9A84C]" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-[#F5F0E8] leading-tight mb-12">
            The Armen Z <br/>
            <span className="text-[#C9A84C] italic">Legacy Foundation</span>
          </h2>
          
          <div className="space-y-8 text-lg md:text-2xl leading-relaxed text-zinc-400 font-medium max-w-3xl mx-auto">
            <p>
              The Armen Z Legacy on the Greens tournament honors the life, passion, and indomitable spirit of Armen Z. More than just a golf tournament, this event is a gathering of friends, family, and community leaders dedicated to making a tangible difference.
            </p>
            <p>
              Armen believed in the power of community and the importance of giving back. Our non-profit foundation carries that torch forward, focusing on youth development, educational scholarships, and community sports programs. Every swing, every putt, and every sponsorship directly funds these vital initiatives.
            </p>
            <p className="text-[#F5F0E8] font-serif text-2xl md:text-3xl italic mt-12 py-8 border-y border-zinc-800/50">
              "Join us at the beautiful Morongo Golf Club at Tukwet Canyon for a memorable day on the greens, celebrating a legacy that continues to impact lives."
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 pt-12 w-full max-w-xl mx-auto justify-center">
            <Button asChild size="lg" className="bg-[#C9A84C] text-[#0A0A0A] hover:bg-[#F5F0E8] shadow-[0_0_20px_rgba(201,168,76,0.2)] hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] font-bold text-sm uppercase tracking-widest px-8 py-6 rounded-md transition-all duration-300 cursor-pointer">
              <Link href="/register">Register to Play</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border border-zinc-700 text-zinc-200 hover:bg-zinc-800 hover:text-white font-bold text-sm uppercase tracking-widest px-8 py-6 rounded-md transition-all duration-300 cursor-pointer">
              <Link href="/sponsorships">View Sponsorships</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sponsorships Section */}
      <section id="sponsorships" className="py-24 md:py-32 relative z-10">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#F5F0E8] mb-6 drop-shadow-md">Sponsorship Opportunities</h2>
            <p className="text-lg md:text-xl font-medium leading-relaxed opacity-90 drop-shadow-sm text-[#C9A84C]">
              Partner with us to honor a legacy and make a direct impact in our community.
            </p>
          </div>
          <SponsorshipList />
        </div>
      </section>

      {/* Register Section */}
      <section id="register" className="py-24 md:py-32 relative z-10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="mb-12 text-center text-[#F5F0E8]">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 drop-shadow-md">Register to Play</h2>
            <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto leading-relaxed drop-shadow-sm text-[#C9A84C]">
              Secure your spot on the greens at the beautiful Morongo Golf Club at Tukwet Canyon.
            </p>
          </div>
          <RegisterForm />
        </div>
      </section>

      {/* Venue Section */}
      <section id="venue" className="py-24 md:py-32 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#F5F0E8] mb-6 leading-tight">The Venue</h2>
              <p className="text-lg leading-relaxed font-medium mb-6 opacity-90 text-zinc-300">
                Morongo Golf Club at Tukwet Canyon offers 36 holes of world-class golf set against the breathtaking backdrop of the San Gorgonio Mountains.
              </p>
              <ul className="space-y-4 text-lg font-medium bg-black/40 backdrop-blur-md p-6 md:p-8 border-l-4 border-[#C9A84C] shadow-2xl">
                <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                  <strong className="text-[#C9A84C] min-w-[100px] uppercase text-sm tracking-widest mt-1">Location</strong>
                  <span className="text-[#F5F0E8] opacity-90">Morongo Golf Club at Tukwet Canyon<br/>36211 Champion Dr, Beaumont, CA 92223</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                  <strong className="text-[#C9A84C] min-w-[100px] uppercase text-sm tracking-widest mt-1">Date</strong>
                  <span className="text-[#F5F0E8] opacity-90">June 22, 2026</span>
                </li>
              </ul>
            </div>
            <div className="h-[400px] w-full bg-black/40 backdrop-blur-md p-2 border border-white/10 shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.196564619424!2d-117.00902672365287!3d33.91032482110696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db454ee6cae389%3A0xe5a3de711bc32c66!2sMorongo%20Golf%20Club%20at%20Tukwet%20Canyon!5e0!3m2!1sen!2sus!4v1709289299482!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 relative z-10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="bg-black/60 backdrop-blur-md p-8 md:p-12 border border-white/5 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#F5F0E8] mb-6 text-center">Get In Touch</h2>
            <p className="text-[#C9A84C] font-medium text-center mb-10 text-lg uppercase tracking-widest">Have questions? We're here to help.</p>
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
