import "./globals.css";
import type { Metadata, Viewport } from "next";
import Rail from "@/components/Rail";
import CommandPalette from "@/components/CommandPalette";
import { siteConfig } from "@/lib/site";
import { getSiteSettings } from "@/lib/payload/content";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const title = settings?.seo?.title || siteConfig.title;
  const description = settings?.seo?.description || siteConfig.description;
  return {
  metadataBase: siteConfig.url ? new URL(siteConfig.url) : undefined,
  title: { default: title, template: `%s | ${settings?.identity?.fullName || "Latera Mekonnen"}` },
  description,
  applicationName: "Latera Mekonnen Portfolio",
  keywords: ["Latera Mekonnen", "software developer", "frontend engineer", "Next.js", "TypeScript", "web development"],
  authors: [{ name: "Latera Mekonnen" }],
  robots: { index: true, follow: true },
  openGraph: { type: "website", locale: "en_US", siteName: settings?.identity?.fullName || "Latera Mekonnen", title, description },
  twitter: { card: "summary", title, description },
  };
}

export const viewport: Viewport = { themeColor: "#f5f4f0", colorScheme: "light" };

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const identity = (await getSiteSettings())?.identity;
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="sr-only z-[100] bg-[var(--ink)] px-4 py-3 text-sm font-medium text-white focus:fixed focus:left-4 focus:top-4 focus:not-sr-only">Skip to main content</a>
        <div className="frame"><Rail name={identity?.fullName || siteConfig.name} role={identity?.professionalTitle || "Software Developer"} /><div className="min-w-0">{children}</div></div>
        <CommandPalette />
        <PersonStructuredData />
      </body>
    </html>
  );
}

async function PersonStructuredData() {
  const settings = await getSiteSettings();
  const identity = settings?.identity;
  const value = { "@context": "https://schema.org", "@type": "Person", name: identity?.fullName || siteConfig.name, jobTitle: identity?.professionalTitle || "Software Developer", url: siteConfig.url, sameAs: settings?.socialLinks?.map(({ url }) => url) || siteConfig.socials };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(value).replace(/</g, "\\u003c") }} />;
}
