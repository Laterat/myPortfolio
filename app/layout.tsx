import "./globals.css";
import type { Metadata, Viewport } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CommandPalette from "@/components/CommandPalette";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: siteConfig.url ? new URL(siteConfig.url) : undefined,
  title: { default: siteConfig.title, template: "%s | Latera Mekonnen" },
  description: siteConfig.description,
  applicationName: "Latera Mekonnen Portfolio",
  keywords: ["Latera Mekonnen", "software developer", "frontend engineer", "Next.js", "TypeScript", "web development"],
  authors: [{ name: "Latera Mekonnen" }],
  robots: { index: true, follow: true },
  openGraph: { type: "website", locale: "en_US", siteName: "Latera Mekonnen", title: siteConfig.title, description: siteConfig.description },
  twitter: { card: "summary", title: siteConfig.title, description: siteConfig.description },
};

export const viewport: Viewport = { themeColor: "#0b0c0d", colorScheme: "dark" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <CommandPalette />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Person", name: siteConfig.name, jobTitle: "Software Developer", url: siteConfig.url, sameAs: siteConfig.socials }).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
