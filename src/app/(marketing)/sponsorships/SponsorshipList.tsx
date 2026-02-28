"use client";

import { useState } from "react";
import { SponsorshipCard, SponsorshipTier } from "@/components/SponsorshipCard";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const tiers: SponsorshipTier[] = [
  { id: "diamond", name: "Triple Crown (DIAMOND)", price: 10000, isPremium: true, image: "/images/sponsors/diamond.png", benefits: ["4 Foursomes", "VIP Diamond Room booth", "Premier logo placement"] },
  { id: "gold", name: "Kentucky Derby (GOLD)", price: 7500, isPremium: true, image: "/images/sponsors/gold.png", benefits: ["3 Foursomes", "Premium booth + materials"] },
  { id: "silver", name: "Preakness (SILVER)", price: 5000, isPremium: true, image: "/images/sponsors/silver.png", benefits: ["2 Foursomes", "Booth + logo placement"] },
  { id: "bronze", name: "Belmont Stakes (BRONZE)", price: 2500, image: "/images/sponsors/bronze.png", benefits: ["1 Foursome", "Booth + logo"] },
  { id: "shirt", name: "Shirt Sponsor", price: 3500, isPremium: true, image: "/images/sponsors/shirt.png", benefits: ["Logo on ALL player shirts", "Premium brand visibility"] },
  { id: "hat", name: "Hat Sponsor", price: 3500, isPremium: true, image: "/images/sponsors/hat.png", benefits: ["Logo on ALL player hats", "Premium brand visibility"] },
  { id: "ball", name: "Golf Ball Sponsor", price: 2500, image: "/images/sponsors/ball.png", benefits: ["Logo on ALL golf balls", "Given to every player"] },
  { id: "towel", name: "Towel Sponsor", price: 2500, image: "/images/sponsors/towel.png", benefits: ["Logo on ALL towels", "Given to every player"] },
  { id: "hole", name: "Hole Sponsor", price: 500, image: "/images/sponsors/hole.png", benefits: ["Promo booth", "VIP breakfast"] },
  { id: "tee", name: "Tee Sponsor", price: 300, image: "/images/sponsors/tee.png", benefits: ["Tee sign", "VIP breakfast"] },
];

export function SponsorshipList() {
  const [selectedTier, setSelectedTier] = useState<SponsorshipTier | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleClaim = (tier: SponsorshipTier) => {
    setSelectedTier(tier);
    setSubmitted(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tiers.map(tier => (
          <SponsorshipCard key={tier.id} tier={tier} onClaim={handleClaim} />
        ))}
      </div>

      <Dialog open={!!selectedTier} onOpenChange={(open) => !open && setSelectedTier(null)}>
        <DialogContent className="sm:max-w-[500px] bg-[#0A0A0A] border-zinc-800 rounded-xl p-8 backdrop-blur-3xl">
          <DialogHeader className="mb-2">
            <DialogTitle className="font-serif text-3xl text-[#F5F0E8]">
              Sponsor Inquiry
            </DialogTitle>
            <DialogDescription className="text-zinc-400 font-medium text-base mt-3 leading-relaxed">
              You are inquiring about the <strong className="text-[#C9A84C] font-bold">{selectedTier?.name}</strong> at ${selectedTier?.price.toLocaleString()}.
            </DialogDescription>
          </DialogHeader>

          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-20 h-20 bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/30 rounded-full flex items-center justify-center mx-auto text-4xl mb-8 shadow-[0_0_30px_rgba(201,168,76,0.15)]">✓</div>
              <h3 className="text-3xl font-bold font-serif text-[#F5F0E8]">Inquiry Sent Successfully!</h3>
              <p className="text-zinc-400 font-medium text-base leading-relaxed px-4">Our team will contact you shortly to confirm your sponsorship and coordinate assets.</p>
              <Button onClick={() => setSelectedTier(null)} size="lg" className="mt-8 w-full bg-zinc-800 text-zinc-100 hover:bg-[#C9A84C] hover:text-[#0A0A0A] font-bold rounded-md text-sm uppercase tracking-widest py-6">Close</Button>
            </div>
          ) : (
             <form action="https://formspree.io/f/xbjnzzop" method="POST" onSubmit={(e) => {
               e.preventDefault();
               const form = e.currentTarget;
               const data = new FormData(form);
               data.append("subject", `Sponsor Inquiry: ${selectedTier?.name}`);
               
               setIsSubmitting(true);
               fetch("https://formspree.io/f/xbjnzzop", {
                 method: "POST",
                 body: data,
                 headers: { Accept: "application/json" },
               }).then(response => {
                 setIsSubmitting(false);
                 if (response.ok) {
                    setSubmitted(true);
                 } else {
                    alert("Oops! There was a problem submitting your inquiry.");
                 }
               });
             }} className="space-y-6 py-4">
              <Input type="hidden" name="sponsorship_tier" value={selectedTier?.name} />
              <Input type="hidden" name="price" value={`$${selectedTier?.price.toLocaleString()}`} />
              
              <div className="space-y-2">
                <Label htmlFor="name" className="text-zinc-300 font-semibold text-xs tracking-wider uppercase">Company / Individual Name</Label>
                <Input id="name" name="name" required className="border-zinc-800 focus-visible:ring-[#C9A84C] rounded-md bg-zinc-900/50 text-white p-6 text-base" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-zinc-300 font-semibold text-xs tracking-wider uppercase">Email Address</Label>
                <Input id="email" name="email" type="email" required className="border-zinc-800 focus-visible:ring-[#C9A84C] rounded-md bg-zinc-900/50 text-white p-6 text-base" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-zinc-300 font-semibold text-xs tracking-wider uppercase">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" required className="border-zinc-800 focus-visible:ring-[#C9A84C] rounded-md bg-zinc-900/50 text-white p-6 text-base" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-zinc-300 font-semibold text-xs tracking-wider uppercase">Additional Message (Optional)</Label>
                <Textarea id="message" name="message" className="border-zinc-800 focus-visible:ring-[#C9A84C] rounded-md bg-zinc-900/50 text-white p-4 text-base resize-none" rows={3} />
              </div>
              <Button type="submit" disabled={isSubmitting} size="lg" className="w-full bg-[#C9A84C] text-[#0A0A0A] hover:bg-[#F5F0E8] font-bold py-6 text-sm uppercase tracking-widest rounded-md mt-4 shadow-[0_0_15px_rgba(201,168,76,0.15)]">
                {isSubmitting ? "Sending Inquiry..." : "Submit Inquiry"}
              </Button>
              <p className="text-xs text-center text-zinc-500 font-medium mt-6 leading-relaxed">
                This form operates securely. We will be in touch via armenzlegacy@gmail.com.
              </p>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
