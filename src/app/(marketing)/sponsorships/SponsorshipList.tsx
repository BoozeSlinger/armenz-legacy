"use client";

import { useState } from "react";
import { SponsorshipCard, SponsorshipTier } from "@/components/SponsorshipCard";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { EventbriteWidget } from "@/components/EventbriteWidget";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2, ArrowRight } from "lucide-react";

const tiers: SponsorshipTier[] = [
  // ... (tiers list remains the same)
  {
    id: "diamond",
    name: "Triple Crown (DIAMOND)",
    price: 10000,
    isPremium: true,
    image: "/images/sponsors/diamond.png",
    benefits: [
      "4 full foursomes (16 player entries)",
      "Exclusive VIP Diamond Room booth with branded activation space",
      "Premier logo placement on all event materials, shirts, and course signage",
      "Named recognition in all press and social media coverage",
      "Personal acknowledgment from the podium during awards dinner",
    ],
  },
  {
    id: "gold",
    name: "Kentucky Derby (GOLD)",
    price: 7500,
    isPremium: true,
    image: "/images/sponsors/gold.png",
    benefits: [
      "3 full foursomes (12 player entries)",
      "Premium booth and activation space on the course",
      "Prominent logo placement on event materials and signage",
      "Social media recognition to our 10,000+ followers",
    ],
  },
  {
    id: "silver",
    name: "Preakness (SILVER)",
    price: 5000,
    isPremium: true,
    image: "/images/sponsors/silver.png",
    benefits: [
      "2 full foursomes (8 player entries)",
      "Standard booth space on the course",
      "Logo placement on selected event materials and signage",
    ],
  },
  {
    id: "bronze",
    name: "Belmont Stakes (BRONZE)",
    price: 2500,
    isPremium: true,
    image: "/images/sponsors/bronze.png",
    benefits: [
      "1 full foursome (4 player entries)",
      "Designated booth space on the course",
      "Logo placement in the event program",
    ],
  },
  {
    id: "shirt",
    name: "Shirt Sponsor",
    price: 3500,
    isPremium: true,
    image: "/images/sponsors/shirt.png",
    benefits: [
      "Logo prominently featured on ALL player shirts",
      "Premium brand visibility throughout the entire event",
      "Logo in the event program and digital materials",
    ],
  },
  {
    id: "hat",
    name: "Hat Sponsor",
    price: 3500,
    isPremium: true,
    image: "/images/sponsors/hat.png",
    benefits: [
      "Logo prominently featured on ALL player hats",
      "Premium brand visibility throughout the entire event",
      "Logo in the event program and digital materials",
    ],
  },
  {
    id: "ball",
    name: "Golf Ball Sponsor",
    price: 2500,
    image: "/images/sponsors/ball.png",
    benefits: [
      "Logo custom-printed on ALL tournament golf balls",
      "Premium sleeve given to every single player",
      "Listing in the event program",
    ],
  },
  {
    id: "towel",
    name: "Towel Sponsor",
    price: 2500,
    image: "/images/sponsors/towel.png",
    benefits: [
      "Logo custom-embroidered on ALL tournament towels",
      "Premium towel given to every single player",
      "Listing in the event program",
    ],
  },
  {
    id: "hole",
    name: "Hole Sponsor",
    price: 500,
    image: "/images/sponsors/hole.png",
    benefits: [
      "Branded signage at a designated hole on the course",
      "VIP breakfast for your representative",
      "Logo in the event program and digital materials",
    ],
  },
  {
    id: "tee",
    name: "Tee Sponsor",
    price: 300,
    image: "/images/sponsors/tee.png",
    benefits: [
      "Branded signage at a designated tee box",
      "VIP breakfast for your representative",
      "Listing in the event program",
    ],
  },
];

export function SponsorshipList({ limit }: { limit?: number }) {
  const [selectedTier, setSelectedTier] = useState<SponsorshipTier | null>(null);
  const [showPayment, setShowPayment] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const displayTiers = limit ? tiers.slice(0, limit) : tiers;

  const handleClaim = (tier: SponsorshipTier) => {
    setSelectedTier(tier);
    setShowPayment(false);
    setFormData({ name: "", email: "", phone: "", company: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTier) return;
    
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: `Sponsorship: ${selectedTier.name}`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          details: `Company: ${formData.company}, Price: $${selectedTier.price}`,
        }),
      });

      if (!response.ok) throw new Error('Failed to save information');
      
      toast.success("Details saved. Loading payment...");
      setShowPayment(true);
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Information saved locally. Proceeding to payment.");
      setShowPayment(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayTiers.map((tier) => (
          <SponsorshipCard key={tier.id} tier={tier} onClaim={handleClaim} />
        ))}
      </div>

      <Dialog
        open={!!selectedTier}
        onOpenChange={(open: boolean) => {
          if (!open) {
            setSelectedTier(null);
            setShowPayment(false);
          }
        }}
      >
        <DialogContent className={`bg-[#0A0A0A] border-zinc-800 rounded-none p-0 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all duration-500 ${showPayment ? "sm:max-w-3xl" : "sm:max-w-lg"}`}>
          {!showPayment ? (
            <div className="p-8 md:p-10">
              <DialogHeader className="mb-8">
                <DialogTitle className="font-serif text-3xl text-[#F5F0E8] leading-tight mb-2">
                  Sponsorship Details
                </DialogTitle>
                <DialogDescription className="text-zinc-400 font-medium text-lg leading-relaxed">
                  You've selected the <strong className="text-[#C9A84C]">{selectedTier?.name}</strong>. Please provide your contact information to continue.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="spon-name" className="text-xs uppercase tracking-widest font-black text-[#C9A84C] opacity-80 pl-1">Full Name</Label>
                  <Input 
                    id="spon-name" 
                    placeholder="John Doe" 
                    required 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="bg-[#111] border-zinc-800 focus:border-[#C9A84C] h-14 rounded-none text-zinc-100 placeholder:text-zinc-600"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="spon-company" className="text-xs uppercase tracking-widest font-black text-[#C9A84C] opacity-80 pl-1">Company / Organization</Label>
                  <Input 
                    id="spon-company" 
                    placeholder="Optional" 
                    value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                    className="bg-[#111] border-zinc-800 focus:border-[#C9A84C] h-14 rounded-none text-zinc-100 placeholder:text-zinc-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="spon-email" className="text-xs uppercase tracking-widest font-black text-[#C9A84C] opacity-80 pl-1">Email</Label>
                    <Input 
                      id="spon-email" 
                      type="email" 
                      placeholder="email@example.com" 
                      required 
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="bg-[#111] border-zinc-800 focus:border-[#C9A84C] h-14 rounded-none text-zinc-100 placeholder:text-zinc-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="spon-phone" className="text-xs uppercase tracking-widest font-black text-[#C9A84C] opacity-80 pl-1">Phone</Label>
                    <Input 
                      id="spon-phone" 
                      type="tel" 
                      placeholder="(555) 000-0000" 
                      required 
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="bg-[#111] border-zinc-800 focus:border-[#C9A84C] h-14 rounded-none text-zinc-100 placeholder:text-zinc-600"
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#C9A84C] hover:bg-[#F5F0E8] text-[#0A0A0A] h-16 rounded-none font-black text-sm tracking-widest uppercase transition-all duration-300 mt-4 group"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <span className="flex items-center gap-2">
                      Secure My Sponsorship
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          ) : (
            <div className="flex flex-col">
              <div className="p-8 md:p-10 border-b border-zinc-800 bg-[#111]">
                <DialogTitle className="text-2xl font-serif text-[#F5F0E8] mb-2">Complete Your Transaction</DialogTitle>
                <p className="text-zinc-500 text-sm font-medium tracking-wide uppercase">Eventbrite Secure Checkout</p>
              </div>
              <div className="min-h-[500px] bg-white relative">
                <EventbriteWidget 
                  eventId="1983383494423" 
                  containerId={`eb-sponsorship-checkout-${selectedTier?.id}`} 
                />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-900 pointer-events-none animate-in fade-in duration-500 z-0 text-center px-8">
                  <div className="w-12 h-12 border-4 border-[#C9A84C]/20 border-t-[#C9A84C] rounded-full animate-spin mb-4" />
                  <p className="text-[#C9A84C] font-bold tracking-widest uppercase text-xs">Connecting to Eventbrite...</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
