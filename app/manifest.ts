import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "Latera Mekonnen | Software Developer", short_name: "Latera", description: "Product-minded software engineering portfolio.", start_url: "/", display: "standalone", background_color: "#0b0c0d", theme_color: "#0b0c0d" };
}
