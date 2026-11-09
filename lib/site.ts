import { portfolioContent } from "@/lib/content";

export const siteConfig = {
  name: portfolioContent.site.name,
  title: portfolioContent.site.title,
  description: portfolioContent.site.description,
  url: portfolioContent.site.canonicalUrl.replace(/\/$/, "") || undefined,
  socials: portfolioContent.socialLinks.map(({ url }) => url),
};

export function absoluteUrl(path = "/") {
  return siteConfig.url ? new URL(path, siteConfig.url).toString() : undefined;
}
