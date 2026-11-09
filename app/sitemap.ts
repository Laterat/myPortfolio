import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { portfolioContent } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", ...portfolioContent.projects.map((project) => `/projects/${project.slug}`)];
  return routes.flatMap((route) => {
    const url = absoluteUrl(route);
    return url ? [{ url, lastModified: new Date(), changeFrequency: "monthly" as const, priority: route === "/" ? 1 : 0.7 }] : [];
  });
}
