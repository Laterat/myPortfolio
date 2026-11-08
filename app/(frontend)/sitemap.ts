import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { getProjects } from "@/lib/payload/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects();
  const routes = ["/", "/about", "/projects", "/contact", ...projects.map((project) => `/projects/${project.slug}`)];
  return routes.flatMap((route) => {
    const url = absoluteUrl(route);
    return url ? [{ url, lastModified: new Date(), changeFrequency: "monthly" as const, priority: route === "/" ? 1 : 0.7 }] : [];
  });
}
