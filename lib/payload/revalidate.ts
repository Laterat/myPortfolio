import { revalidatePath } from "next/cache";

export function revalidatePortfolio(slug?: string) {
  revalidatePath("/", "page");
  revalidatePath("/projects", "page");
  revalidatePath("/sitemap.xml", "page");
  if (slug) revalidatePath(`/projects/${slug}`, "page");
}
