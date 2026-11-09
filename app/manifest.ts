import type { MetadataRoute } from "next";
import { portfolioContent } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return { name: portfolioContent.site.title, short_name: portfolioContent.identity.nameLines[0], description: portfolioContent.site.description, start_url: "/", display: "standalone", background_color: portfolioContent.site.themeColor, theme_color: portfolioContent.site.themeColor };
}
