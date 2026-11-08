import Link from "next/link";
import { getSiteSettings } from "@/lib/payload/content";

const links = [{ label: "Work", href: "/projects" }, { label: "About", href: "/about" }, { label: "Contact", href: "/contact" }];

export default async function Footer() {
  const settings = await getSiteSettings();
  const identity = settings?.identity;
  return <footer className="border-t rule">
    <div className="site-shell grid gap-8 py-10 sm:grid-cols-[1fr_auto] sm:items-end">
      <div><Link href="/" className="text-base font-semibold hover:opacity-70">{identity?.fullName || "Latera Mekonnen"}</Link><p className="mt-3 max-w-sm text-sm leading-6 text-[var(--muted)]">{settings?.footerInformation || "Product-minded software engineering for useful, considered web experiences."}</p></div>
      <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-2">{links.map((link) => <Link key={link.href} href={link.href} className="text-sm text-[var(--muted)] hover:text-[var(--ink)]">{link.label}</Link>)}</nav>
      <p className="text-xs text-[var(--muted)] sm:col-span-2">© {new Date().getFullYear()} {identity?.fullName || "Latera Mekonnen"}</p>
    </div>
  </footer>;
}
