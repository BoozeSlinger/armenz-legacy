import type { Metadata, Viewport } from "next";
import { Playfair_Display, Hanken_Grotesk, Cinzel } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Allow pinch zoom for accessibility
  themeColor: "#0A0D0B",
  colorScheme: "dark",
};

const playfair = Playfair_Display({
  variable: "--font-display-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.armenzlegacy.com"),
  title: {
    default: "Armenz Legacy Charity Golf Tournament | Beaumont, CA",
    template: "%s | Armenz Legacy Charity Golf Tournament",
  },
  description:
    "The inaugural Armenz Legacy Charity Golf Tournament raised funds for CARMA's retired racehorses and the Permanently Disabled Jockeys Fund at Morongo Golf Club at Tukwet Canyon, Beaumont CA — June 22, 2026. View 97 photos & join the 2027 early-access list.",
  keywords: [
    "Armenz Legacy Charity Golf Tournament",
    "Armen Zennedjian memorial golf",
    "Beaumont CA golf tournaments 2026",
    "Inland Empire charity golf scramble",
    "Morongo Golf Club at Tukwet Canyon events",
    "Legacy on the Greens golf tournament",
    "Southern California charity golf 2027",
    "CARMA retired racehorses charity",
    "Permanently Disabled Jockeys Fund golf",
    "Horse racing charity events California",
    "Corporate golf sponsorship Beaumont CA",
    "Charity event sponsorships Inland Empire",
    "golf tournament sponsor packages California",
    "four-person scramble charity golf",
    "909 Market Foundation golf event",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Armenz Legacy Charity Golf Tournament | Beaumont, CA",
    description:
      "The inaugural charity golf scramble at Morongo Golf Club at Tukwet Canyon benefited CARMA and the Permanently Disabled Jockeys Fund. Relive 2026 — and join the 2027 early-access list.",
    url: "https://www.armenzlegacy.com",
    siteName: "Armenz Legacy Charity Golf Tournament",
    locale: "en_US",
    type: "website",
    images: [
      { url: "/og/og-image.png", width: 1200, height: 630, alt: "Armenz Legacy Charity Golf Tournament — June 22, 2026 at Morongo Golf Club, Beaumont CA" },
      { url: "/og/og-image-sq.png", width: 600, height: 600, alt: "Armenz Legacy Golf Tournament Logo" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Armenz Legacy Charity Golf Tournament | Beaumont, CA",
    description:
      "97 photos from the inaugural Classic at Morongo Golf Club. Raised real money for CARMA & PDJF. 2027 is next — join the list.",
    images: ["/og/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-video-preview": -1, "max-snippet": -1 },
  },
  category: "sports",
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: "Armenz Legacy Charity Golf Tournament — Legacy on the Greens: The Armen Zennedjian Classic",
    description: "Inaugural four-person scramble charity golf tournament in Beaumont, CA benefiting CARMA (retired racehorses) and the Permanently Disabled Jockeys Fund (PDJF).",
    startDate: "2026-06-22T08:00-07:00",
    endDate: "2026-06-22T21:00-07:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    sport: "Golf",
    url: "https://www.armenzlegacy.com",
    image: ["https://www.armenzlegacy.com/og/og-image.png", "https://www.armenzlegacy.com/images/hero/logo.png"],
    location: {
      "@type": "Place",
      name: "Morongo Golf Club at Tukwet Canyon",
      url: "https://tukwetcanyon.com/",
      address: {
        "@type": "PostalAddress",
        streetAddress: "36400 Champions Dr",
        addressLocality: "Beaumont",
        addressRegion: "CA",
        postalCode: "92223",
        addressCountry: "US",
      },
      geo: { "@type": "GeoCoordinates", latitude: 33.9244, longitude: -116.9897 },
    },
    organizer: { "@type": "Organization", name: "Armenz Legacy", url: "https://www.armenzlegacy.com" },
    funder: [
      { "@type": "Organization", name: "CARMA", url: "https://www.carma4horses.org" },
      { "@type": "Organization", name: "Permanently Disabled Jockeys Fund", url: "https://pdjf.org" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Armenz Legacy",
    url: "https://www.armenzlegacy.com",
    logo: "https://www.armenzlegacy.com/images/hero/logo.png",
    sameAs: [],
    description: "Charity golf tournament organization honoring Armen Zennedjian and raising funds for CARMA and the PDJF.",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to Cloudinary for gallery images */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        {/* Mobile browser chrome color */}
        <meta name="theme-color" content="#0A0D0B" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body
        className={`${playfair.variable} ${hanken.variable} ${cinzel.variable} antialiased font-sans bg-background text-foreground`}
      >
        {structuredData.map((data, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
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

