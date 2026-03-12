import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export interface SponsorshipTier {
  id: string;
  name: string;
  price: number;
  benefits: string[];
  isPremium?: boolean;
  image?: string;
}

export function SponsorshipCard({ tier, onClaim }: { tier: SponsorshipTier; onClaim: (tier: SponsorshipTier) => void }) {
  return (
    <Card className={`flex flex-col h-full rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(201,168,76,0.2)] ${
      tier.isPremium ? "border border-[#C9A84C] relative overflow-hidden bg-[#0A0A0A]" : "border border-zinc-800 bg-[#111]"
    }`}>
      {tier.isPremium && (
        <div className="absolute top-4 right-4 bg-[#C9A84C] text-[#0A0A0A] text-[10px] font-black px-4 py-1.5 uppercase tracking-widest rounded-sm z-20 shadow-xl backdrop-blur-md">
          Premier
        </div>
      )}
      
      {tier.image ? (
        <div className="relative w-full h-56 sm:h-64 bg-zinc-900 border-b border-zinc-800/50 group overflow-hidden">
          <Image 
            src={tier.image} 
            alt={tier.name} 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
        </div>
      ) : (
        <div className="h-4" />
      )}
      
      <CardHeader className={`${tier.image ? "-mt-16 sm:-mt-20" : ""} relative z-10 ${tier.isPremium ? "text-[#F5F0E8]" : "text-zinc-100"} px-6 sm:px-8 pb-4`}>
        <CardTitle className="font-serif text-2xl mb-2 leading-tight drop-shadow-md">{tier.name}</CardTitle>
        <CardDescription className={`text-3xl font-bold ${tier.isPremium ? "text-[#C9A84C]" : "text-zinc-300"} drop-shadow-md`}>
          ${tier.price.toLocaleString()}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 px-6 sm:px-8 pt-2 text-zinc-300 relative z-10">
        <ul className="space-y-4">
          {tier.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-4">
              <span className="text-[#C9A84C] font-bold text-lg leading-none mt-0.5 opacity-90">✓</span>
              <span className="text-sm sm:text-base font-medium leading-relaxed text-zinc-300/90">{benefit}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="p-6 sm:p-8 pt-0 mt-auto relative z-10">
        <Button 
          onClick={() => onClaim(tier)}
          size="lg"
          className={`w-full font-bold text-sm tracking-widest uppercase py-6 rounded-md transition-all duration-300 ${
            tier.isPremium 
              ? "bg-[#C9A84C] text-[#0A0A0A] hover:bg-[#F5F0E8] shadow-[0_0_15px_rgba(201,168,76,0.2)] hover:shadow-[0_0_25px_rgba(201,168,76,0.4)]" 
              : "bg-zinc-800 text-zinc-100 hover:bg-[#C9A84C] hover:text-[#0A0A0A]"
          }`}
        >
          Secure Your Spot
        </Button>
      </CardFooter>
    </Card>
  );
}
