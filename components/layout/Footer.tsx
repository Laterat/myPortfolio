import Link from "next/link";

const links = [{ label: "Work", href: "/projects" }, { label: "Profile", href: "/about" }, { label: "Contact", href: "/contact" }];

export default function Footer() { return <footer className="border-t rule"><div className="site-shell grid gap-8 py-10 sm:grid-cols-[1fr_auto] sm:items-end"><div><Link href="/" className="font-mono text-base font-bold text-white hover:text-accent-soft">latera.dev</Link><p className="mt-3 max-w-sm text-sm leading-6 text-neutral-500">Product-minded software engineering for useful, considered web experiences.</p></div><nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2">{links.map((link) => <Link key={link.href} href={link.href} className="text-sm text-neutral-400 hover:text-accent-soft">{link.label}</Link>)}</nav><p className="font-mono text-xs text-neutral-600 sm:col-span-2">© {new Date().getFullYear()} Latera Mekonnen</p></div></footer>; }
