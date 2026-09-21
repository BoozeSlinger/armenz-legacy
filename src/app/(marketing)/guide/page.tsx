import type { Metadata } from "next";
import { GuideClient } from "./GuideClient";

export const metadata: Metadata = {
  title: "Design Guide",
  description:
    "The design system behind the Armenz Legacy Classic site: palette, typography, and motion principles for a memorial charity tournament.",
  alternates: { canonical: "/guide" },
  robots: { index: false, follow: true },
};

export default function GuidePage() {
  return (
    <div className="relative min-h-screen bg-ink">
      <GuideClient />
    </div>
  );
}
