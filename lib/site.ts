export const siteConfig = {
  name: "Latera Mekonnen",
  title: "Latera Mekonnen | Software Developer",
  description: "Portfolio of Latera Mekonnen, a product-minded software developer building clear, reliable web experiences.",
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, ""),
  socials: ["https://github.com/Laterat", "https://www.linkedin.com/in/latera-mekonnen/", "https://twitter.com/lateramekonnen"],
};

export function absoluteUrl(path = "/") {
  return siteConfig.url ? new URL(path, siteConfig.url).toString() : undefined;
}
