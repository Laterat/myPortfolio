import type { MetadataRoute } from "next";
import { projectsData } from "./projects/data";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/about", "/projects", "/contact", ...projectsData.map((project) => `/projects/${project.slug}`)];
  return routes.flatMap((route) => {
    const url = absoluteUrl(route);
    return url ? [{ url, lastModified: new Date(), changeFrequency: "monthly" as const, priority: route === "/" ? 1 : 0.7 }] : [];
  });
}
