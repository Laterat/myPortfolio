import "./globals.css";
import type { Metadata, Viewport } from "next";
import Rail from "@/components/Rail";
import CommandPalette from "@/components/CommandPalette";
import { siteConfig } from "@/lib/site";
import { portfolioContent } from "@/lib/content";

export const metadata: Metadata = (() => {
  const title = siteConfig.title;
  const description = siteConfig.description;
  return {
  metadataBase: siteConfig.url ? new URL(siteConfig.url) : undefined,
  title: { default: title, template: `%s | ${portfolioContent.identity.fullName}` },
  description,
  applicationName: portfolioContent.site.title,
  keywords: portfolioContent.site.keywords,
  authors: [{ name: portfolioContent.identity.fullName }],
  robots: { index: true, follow: true },
  openGraph: { type: "website", locale: "en_US", siteName: portfolioContent.identity.fullName, title, description },
  twitter: { card: "summary", title, description },
  };
})();

export const viewport: Viewport = { themeColor: portfolioContent.site.themeColor, colorScheme: "light" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const identity = portfolioContent.identity;
  return (
    <html lang={portfolioContent.site.language}>
      <body>
        <a href="#main-content" className="sr-only z-[100] bg-[var(--ink)] px-4 py-3 text-sm font-medium text-white focus:fixed focus:left-4 focus:top-4 focus:not-sr-only">{portfolioContent.copy.labels.skipToMainContent}</a>
        <div className="frame"><Rail name={identity.fullName} role={identity.professionalTitle} /><div className="min-w-0">{children}</div></div>
        <CommandPalette />
        <PersonStructuredData />
      </body>
    </html>
  );
}

function PersonStructuredData() {
  const identity = portfolioContent.identity;
  const value = { "@context": "https://schema.org", "@type": "Person", name: identity.fullName, jobTitle: identity.professionalTitle, url: siteConfig.url, sameAs: portfolioContent.socialLinks.map(({ url }) => url) };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(value).replace(/</g, "\\u003c") }} />;
}
