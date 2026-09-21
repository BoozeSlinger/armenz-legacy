"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Loader2, ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal, MaskLines } from "@/components/motion";
import { ContactLink } from "@/components/ContactLink";

const INTEREST_OPTIONS = [
  { value: "player", label: "Playing" },
  { value: "sponsor", label: "Sponsoring" },
  { value: "both", label: "Both" },
] as const;

const inputClass =
  "w-full bg-transparent border-0 border-b border-cream/20 focus:border-gold focus:outline-none px-0 h-12 text-cream placeholder:text-cream/55 font-light text-base transition-colors duration-300";

export function EarlyAccess() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState<string>("player");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setStatus("loading");
    try {
      const honeypot = (e.currentTarget.elements.namedItem("website") as HTMLInputElement)?.value;
      const res = await fetch("/api/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, interest, website: honeypot }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.error || "Something went wrong.");
      setStatus("success");
      toast.success("You're on the 2027 invitation list.");
    } catch (err) {
      setStatus("idle");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      toast.error("Couldn't save your request. Please try again.");
    }
  };

  return (
    <section id="early-access" className="relative z-10 scroll-mt-24 bg-ink-2 py-14 md:py-20">
      <div className="glow-gold-faint absolute inset-0" aria-hidden />
      <div className="container relative mx-auto max-w-6xl px-4 md:px-8">
        {/* Registry frame */}
        <div className="border border-gold/20 p-8 md:p-14 lg:p-16">
          {status === "success" ? (
            <div className="py-14 text-center" role="status" aria-live="polite">
              <CheckCircle2 className="mx-auto mb-7 h-10 w-10 stroke-1 text-gold" aria-hidden="true" />
              <h2 className="font-serif text-4xl font-medium text-cream md:text-5xl">
                Your place is <em className="italic text-gold-bright">reserved</em>.
              </h2>
              <p className="mx-auto mt-5 max-w-md text-base font-light leading-relaxed text-cream/60">
                You will receive priority access to registration and sponsorship tiers
                before the public announcement.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Invitation */}
              <div className="lg:col-span-5">
                <h2 className="font-serif text-4xl font-medium leading-[1.05] tracking-[-0.015em] text-cream md:text-5xl">
                  <MaskLines
                    lines={[
                      <>Reserve your place</>,
                      <>for <em className="italic text-gold-bright">2027</em>.</>,
                    ]}
                  />
                </h2>
                <Reveal delay={0.2}>
                  <p className="mt-6 max-w-sm text-base font-light leading-relaxed text-cream/60">
                    The inaugural field reached capacity quickly. The early registry is
                    invited first to select starting times and partnership tiers.
                  </p>
                  <p className="mt-6 text-xs font-light text-cream/55">
                    Direct inquiries:{" "}
                    <ContactLink className="link-rule text-gold-bright/90" />
                  </p>
                </Reveal>
              </div>

              {/* Form */}
              <Reveal delay={0.15} className="lg:col-span-7">
                <form onSubmit={handleSubmit} className="space-y-9">
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="pointer-events-none absolute h-0 w-0 opacity-0"
                  />

                  <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 sm:gap-8">
                    <div className="space-y-2">
                      <label
                        htmlFor="ea-name"
                        className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/55"
                      >
                        Full Name *
                      </label>
                      <input
                        id="ea-name"
                        name="name"
                        required
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={inputClass}
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="ea-email"
                        className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/55"
                      >
                        Email Address *
                      </label>
                      <input
                        id="ea-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={inputClass}
                        placeholder="name@organization.com"
                      />
                    </div>
                  </div>

                  <fieldset>
                    <legend className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/55">
                      Primary Interest
                    </legend>
                    <div className="grid grid-cols-3 gap-3" role="radiogroup">
                      {INTEREST_OPTIONS.map((opt) => {
                        const active = interest === opt.value;
                        return (
                          <label
                            key={opt.value}
                            className={cn(
                              "cursor-pointer select-none border py-3.5 text-center text-[11px] font-semibold uppercase tracking-[0.16em] transition-all duration-400",
                              active
                                ? "border-gold bg-gold/[0.08] text-gold-bright"
                                : "border-cream/15 text-cream/55 hover:border-cream/35 hover:text-cream/75"
                            )}
                          >
                            <input
                              type="radio"
                              name="interest"
                              value={opt.value}
                              checked={active}
                              onChange={() => setInterest(opt.value)}
                              className="sr-only"
                            />
                            {opt.label}
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>

                  {error && (
                    <p role="alert" className="text-xs text-[#d98a75]">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group/cta relative flex h-14 w-full items-center justify-center gap-3 overflow-hidden bg-gold text-[11px] font-semibold uppercase tracking-[0.25em] text-ink transition-colors duration-500 hover:bg-gold-bright active:scale-[0.99] disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        <span className="relative z-10">Request Early Access</span>
                        <ArrowRight
                          size={14}
                          strokeWidth={1.75}
                          className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/cta:translate-x-1"
                        />
                        <span
                          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/cta:translate-x-full"
                          aria-hidden
                        />
                      </>
                    )}
                  </button>
                </form>
              </Reveal>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
