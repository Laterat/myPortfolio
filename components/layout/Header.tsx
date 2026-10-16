"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/projects", label: "Work" },
  { href: "/about", label: "Profile" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b rule bg-[#0b0c0d]/95 backdrop-blur-md">
      <div className="site-shell flex min-h-16 items-center justify-between gap-5">
        <Link href="/" className="group inline-flex items-center gap-3" aria-label="Latera Mekonnen — home">
          <span className="grid h-8 w-8 place-items-center border border-accent bg-accent text-sm font-black text-[#180b06] transition-transform group-hover:rotate-6">L</span>
          <span className="font-mono text-sm font-bold tracking-tight text-white">latera.dev</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {links.map((link) => <Link key={link.href} href={link.href} className="text-sm text-neutral-300 transition hover:text-accent-soft">{link.label}</Link>)}
          <Link href="/contact" className="border border-accent px-3 py-2 text-sm font-semibold text-accent-soft transition hover:bg-accent hover:text-[#180b06]">Start a project</Link>
        </nav>
        <button type="button" className="grid h-9 w-9 place-items-center border rule text-sm md:hidden" aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen((open) => !open)}>
          <span className="sr-only">{isOpen ? "Close" : "Open"} navigation</span>{isOpen ? "×" : "Menu"}
        </button>
      </div>
      {isOpen && <nav id="mobile-navigation" className="border-t rule bg-[#0b0c0d] px-4 py-4 md:hidden" aria-label="Mobile navigation">
        <div className="site-shell grid gap-1">{links.map((link) => <Link onClick={close} key={link.href} href={link.href} className="px-3 py-3 text-base text-neutral-200 hover:bg-white/5">{link.label}</Link>)}</div>
      </nav>}
    </header>
  );
}
