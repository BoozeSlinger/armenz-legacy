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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const tiers: SponsorshipTier[] = [
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
  const [selectedTier, setSelectedTier] = useState<SponsorshipTier | null>(
    null,
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [shirtSize, setShirtSize] = useState("");

  const displayTiers = limit ? tiers.slice(0, limit) : tiers;

  const handleClaim = (tier: SponsorshipTier) => {
    setSelectedTier(tier);
    setSubmitted(false);
    setShirtSize("");
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
        onOpenChange={(open: boolean) => !open && setSelectedTier(null)}
      >
        <DialogContent className="sm:max-w-[500px] bg-[#0A0A0A] border-zinc-800 rounded-xl p-8 backdrop-blur-3xl">
          <DialogHeader className="mb-2">
            <DialogTitle className="font-serif text-3xl text-[#F5F0E8]">
              Sponsor Inquiry
            </DialogTitle>
            <DialogDescription className="text-zinc-400 font-medium text-base mt-3 leading-relaxed">
              You are inquiring about the{" "}
              <strong className="text-[#C9A84C] font-bold">
                {selectedTier?.name}
              </strong>{" "}
              at ${selectedTier?.price.toLocaleString()}.
            </DialogDescription>
          </DialogHeader>

          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-20 h-20 bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/30 rounded-full flex items-center justify-center mx-auto text-4xl mb-8 shadow-[0_0_30px_rgba(201,168,76,0.15)]">
                ✓
              </div>
              <h3 className="text-3xl font-bold font-serif text-[#F5F0E8]">
                Inquiry Sent Successfully!
              </h3>
              <p className="text-zinc-400 font-medium text-base leading-relaxed px-4">
                Our team will contact you shortly to confirm your sponsorship
                and coordinate assets.
              </p>
              <Button
                onClick={() => setSelectedTier(null)}
                size="lg"
                className="mt-8 w-full bg-zinc-800 text-zinc-100 hover:bg-[#C9A84C] hover:text-[#0A0A0A] font-bold rounded-md text-sm uppercase tracking-widest py-6"
              >
                Close
              </Button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const formData = new FormData(form);

                const company_name = formData.get("name") as string;
                const email = formData.get("email") as string;
                const phone = formData.get("phone") as string;
                const message = formData.get("message") as string;

                setIsSubmitting(true);

                fetch("/api/inquiry", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    company_name,
                    email,
                    phone,
                    message,
                    sponsorship_tier: selectedTier?.name,
                    shirt_size: shirtSize || undefined,
                  }),
                })
                  .then((response) => response.json())
                  .then((result) => {
                    setIsSubmitting(false);
                    if (result.success) {
                      setSubmitted(true);
                    } else {
                      alert(
                        `Error: ${result.error || "Failed to submit inquiry"}`,
                      );
                    }
                  })
                  .catch((error) => {
                    setIsSubmitting(false);
                    console.error("Submission error:", error);
                    alert("Oops! There was a problem submitting your inquiry.");
                  });
              }}
              className="space-y-6 py-4"
            >
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-zinc-300 font-semibold text-xs tracking-wider uppercase"
                >
                  Company / Individual Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  className="border-zinc-800 focus-visible:ring-[#C9A84C] rounded-md bg-zinc-900/50 text-white p-6 text-base"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-zinc-300 font-semibold text-xs tracking-wider uppercase"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="border-zinc-800 focus-visible:ring-[#C9A84C] rounded-md bg-zinc-900/50 text-white p-6 text-base"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="text-zinc-300 font-semibold text-xs tracking-wider uppercase"
                >
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="border-zinc-800 focus-visible:ring-[#C9A84C] rounded-md bg-zinc-900/50 text-white p-6 text-base"
                />
              </div>

              <div className="space-y-2">
                  <Label
                    htmlFor="shirt_size"
                    className="text-zinc-300 font-semibold text-xs tracking-wider uppercase"
                  >
                    Shirt Size
                  </Label>
                  <Select onValueChange={setShirtSize} value={shirtSize} required>
                    <SelectTrigger className="border-zinc-800 focus:ring-[#C9A84C] focus:ring-offset-0 rounded-md bg-zinc-900/50 text-white p-6 text-base h-auto">
                      <SelectValue placeholder="Select shirt size" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 border-zinc-800 text-white">
                      <SelectItem value="S">Small (S)</SelectItem>
                      <SelectItem value="M">Medium (M)</SelectItem>
                      <SelectItem value="L">Large (L)</SelectItem>
                      <SelectItem value="XL">Extra Large (XL)</SelectItem>
                      <SelectItem value="XXL">2XL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-zinc-300 font-semibold text-xs tracking-wider uppercase"
                >
                  Additional Message (Optional)
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  className="border-zinc-800 focus-visible:ring-[#C9A84C] rounded-md bg-zinc-900/50 text-white p-4 text-base resize-none"
                  rows={3}
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full bg-[#C9A84C] text-[#0A0A0A] hover:bg-[#F5F0E8] font-bold py-6 text-sm uppercase tracking-widest rounded-md mt-4 shadow-[0_0_15px_rgba(201,168,76,0.15)]"
              >
                {isSubmitting ? "Sending Inquiry..." : "Submit Inquiry"}
              </Button>
              <p className="text-xs text-center text-zinc-500 font-medium mt-6 leading-relaxed">
                This form operates securely. We will be in touch via
                armenzlegacy@gmail.com.
              </p>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
