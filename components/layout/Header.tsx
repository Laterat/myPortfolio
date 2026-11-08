"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b rule bg-[var(--canvas)]/95 backdrop-blur">
      <div className="site-shell flex min-h-[4.5rem] items-center justify-between gap-5">
        <Link href="/" className="text-sm font-semibold tracking-tight" aria-label="Latera Mekonnen, home">Latera Mekonnen</Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {links.map((link) => { const active = pathname === link.href || pathname.startsWith(`${link.href}/`); return <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined} className={`text-sm ${active ? "font-medium text-[var(--ink)]" : "text-[var(--muted)] hover:text-[var(--ink)]"}`}>{link.label}</Link>; })}
          <Link href="/contact" className="border border-[var(--ink)] px-4 py-2 text-sm font-medium hover:bg-[var(--ink)] hover:text-white">Get in touch</Link>
        </nav>
        <button type="button" className="border rule px-3 py-2 text-sm md:hidden" aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen((open) => !open)}>
          <span>{isOpen ? "Close" : "Menu"}</span>
        </button>
      </div>
      {isOpen && <nav id="mobile-navigation" className="border-t rule bg-[var(--canvas)] px-5 py-3 md:hidden" aria-label="Mobile navigation">
        <div className="site-shell grid gap-1">{links.map((link) => <Link onClick={close} key={link.href} href={link.href} aria-current={pathname === link.href || pathname.startsWith(`${link.href}/`) ? "page" : undefined} className="py-3 text-base">{link.label}</Link>)}<Link onClick={close} href="/contact" className="mt-1 border-t rule py-4 text-base font-medium">Get in touch</Link></div>
      </nav>}
    </header>
  );
}
