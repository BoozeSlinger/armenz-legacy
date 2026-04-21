import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://armenzlegacy.com"),
  title: {
    default: "Armenz Legacy Charity Golf Tournament | Beaumont, CA | June 22, 2026",
    template: "%s | Armenz Legacy Charity Golf Tournament",
  },
  description:
    "Play in the inaugural Armenz Legacy Charity Golf Tournament at Morongo Golf Club at Tukwet Canyon in Beaumont, CA. Support retired racehorses (CARMA) and injured jockeys (PDJF). Register or sponsor today!",
  keywords: [
    "Beaumont CA golf tournaments",
    "Inland Empire charity golf",
    "Morongo Golf Club events",
    "Southern California golf scrambles",
    "Horse racing charity events California",
    "CARMA charity events",
    "Equestrian charity golf tournament",
    "Corporate sponsorship opportunities Beaumont CA",
    "Charity event sponsorships Inland Empire",
    "Golf tournament sponsor packages California",
    "Armen Zennedjian",
    "Permanently Disabled Jockeys Fund",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Armenz Legacy Charity Golf Tournament | Beaumont, CA | June 22, 2026",
    description:
      "Inaugural charity golf scramble at Morongo Golf Club at Tukwet Canyon in Beaumont, CA. Benefiting CARMA and the Permanently Disabled Jockeys Fund. Register or sponsor today.",
    url: "https://armenzlegacy.com",
    siteName: "Armenz Legacy Charity Golf Tournament",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "Armenz Legacy Charity Golf Tournament — June 22, 2026 at Morongo Golf Club, Beaumont CA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Armenz Legacy Charity Golf Tournament | Beaumont, CA",
    description:
      "Charity golf scramble at Morongo Golf Club in Beaumont, CA on June 22, 2026. Benefiting retired racehorses and injured jockeys.",
    images: ["/og/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  name: "Armenz Legacy Charity Golf Tournament — Legacy on the Greens: The Armen Zennedjian Classic",
  description:
    "Inaugural charity golf scramble in Beaumont, CA benefiting retired racehorses (CARMA) and the Permanently Disabled Jockeys Fund (PDJF).",
  startDate: "2026-06-22T08:00-07:00",
  endDate: "2026-06-22T21:00-07:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  sport: "Golf",
  url: "https://armenzlegacy.com",
  image: "https://armenzlegacy.com/images/hero/logo.png",
  location: {
    "@type": "Place",
    name: "Morongo Golf Club at Tukwet Canyon",
    address: {
      "@type": "PostalAddress",
      streetAddress: "36400 Champions Dr",
      addressLocality: "Beaumont",
      addressRegion: "CA",
      postalCode: "92223",
      addressCountry: "US",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Armenz Legacy",
    url: "https://armenzlegacy.com",
  },
  offers: {
    "@type": "Offer",
    url: "https://armenzlegacy.com/register",
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
