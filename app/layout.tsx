import "./globals.css";
import type { Metadata, Viewport } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CommandPalette from "@/components/CommandPalette";

export const metadata: Metadata = {
  title: { default: "Latera Mekonnen | Software Developer", template: "%s | Latera Mekonnen" },
  description:
    "Portfolio of Latera Mekonnen, a product-minded software developer building clear, reliable web experiences.",
  applicationName: "Latera Mekonnen Portfolio",
  keywords: ["Latera Mekonnen", "software developer", "frontend engineer", "Next.js", "TypeScript", "web development"],
  authors: [{ name: "Latera Mekonnen" }],
  robots: { index: true, follow: true },
  openGraph: { type: "website", locale: "en_US", title: "Latera Mekonnen | Software Developer", description: "Product-minded software engineering for useful, considered web experiences." },
  twitter: { card: "summary", title: "Latera Mekonnen | Software Developer", description: "Product-minded software engineering for useful, considered web experiences." },
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
      </body>
    </html>
  );
}
