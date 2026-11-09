import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "Latera Mekonnen | Software Developer", short_name: "Latera", description: "Product-minded software engineering portfolio.", start_url: "/", display: "standalone", background_color: "#f5f4f0", theme_color: "#f5f4f0" };
}
