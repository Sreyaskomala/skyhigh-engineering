import "@fontsource-variable/manrope";
import "@fontsource-variable/dm-sans";
import type { Metadata } from "next";
import Header from "@/components/header";
import { Footer } from "@/components/ui";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "Skyhigh Engineering | Spaces built around you",
    template: "%s | Skyhigh Engineering",
  },
  description:
    "Explore prefabricated structures, modular buildings, container spaces and customized engineering solutions from Skyhigh Engineering.",
  ...(process.env.NEXT_PUBLIC_SITE_URL
    ? { metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL) }
    : {}),
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
