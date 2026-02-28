import { Hero } from "@/components/Hero";
import { RegisterForm } from "@/components/RegisterForm";
import Image from "next/image";

export const metadata = {
  title: "Player Registration | Armen Z Legacy",
  description: "Register to play in the Armen Z Legacy charity golf tournament at Morongo Golf Club at Tukwet Canyon.",
};

export default function RegisterPage() {
  return (
    <div className="relative min-h-screen">
      {/* Fixed Background Image with Overlay */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <Image 
          src="/images/page-bg/register.png" 
          alt="Registration Background" 
          fill 
          className="object-cover" 
          priority 
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/85" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] opacity-30 mix-blend-multiply" />
      </div>

      <div className="relative z-10 flex flex-col">
        <Hero 
          title="PLAYER REGISTRATION" 
          subtitle="Secure your spot on the greens." 
          showCountdown={false} 
          transparentBg={true}
          compact={true}
        />
        <section className="py-24 text-zinc-300">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#F5F0E8] mb-4 drop-shadow-md">Join Us On June 22, 2026</h2>
              <p className="text-lg font-medium opacity-90 max-w-2xl mx-auto leading-relaxed drop-shadow-sm text-[#C9A84C]">
                Experience the beautiful Morongo Golf Club at Tukwet Canyon while honoring a legacy. Your registration includes an 18-hole scramble, golf cart, premium breakfast, and VIP access following the round.
              </p>
            </div>
            
            <RegisterForm />
            
          </div>
        </section>
      </div>
    </div>
  );
}
