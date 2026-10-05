import "@fontsource-variable/manrope";
import "@fontsource-variable/dm-sans";
import type { Metadata, Viewport } from "next";
import Header from "@/components/header";
import { Footer } from "@/components/ui";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://skyhigh-engineering.vercel.app";

export const viewport: Viewport = {
  themeColor: "#131713",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Skyhigh Engineering | Built Smart. Built Strong.",
    template: "%s | Skyhigh Engineering",
  },
  description:
    "Explore customized prefabricated structures, modular buildings, container spaces, and precision turnkey engineering solutions from Skyhigh Engineering.",
  keywords: [
    "prefab buildings",
    "modular structures",
    "shipping container homes",
    "commercial prefab",
    "turnkey engineering",
    "Skyhigh Engineering",
  ],
  authors: [{ name: "Skyhigh Engineering" }],
  openGraph: {
    title: "Skyhigh Engineering | Spaces Built Around You",
    description:
      "Prefab, modular and container solutions shaped by precision engineering. Engineered to rise.",
    url: siteUrl,
    siteName: "Skyhigh Engineering",
    images: [
      {
        url: "/images/hero.webp",
        width: 1200,
        height: 630,
        alt: "Skyhigh Engineering Modular Spaces",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skyhigh Engineering | Built Smart. Built Strong.",
    description:
      "Prefab, modular and container solutions shaped by precision engineering. Engineered to rise.",
    images: ["/images/hero.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
