"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const commands = [{ label: "Go to home", href: "/" }, { label: "Browse projects", href: "/projects" }, { label: "Read about me", href: "/about" }, { label: "Contact", href: "/contact" }];

export default function CommandPalette() {
  const [open, setOpen] = useState(false); const [query, setQuery] = useState(""); const input = useRef<HTMLInputElement>(null); const dialog = useRef<HTMLDialogElement>(null); const router = useRouter();
  useEffect(() => { const onKey = (event: KeyboardEvent) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setOpen((state) => !state); } }; window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey); }, []);
  useEffect(() => { if (open && !dialog.current?.open) dialog.current?.showModal(); if (!open && dialog.current?.open) dialog.current.close(); if (open) window.setTimeout(() => input.current?.focus(), 0); }, [open]);
  const shown = commands.filter((command) => command.label.toLowerCase().includes(query.toLowerCase()));
  const choose = (href: string) => { setOpen(false); setQuery(""); router.push(href); };
  return <><button type="button" onClick={() => setOpen(true)} className="fixed bottom-4 right-4 z-40 hidden border rule bg-[var(--canvas)] px-3 py-2 text-xs text-[var(--muted)] shadow-lg hover:text-[var(--ink)]" aria-label="Open site navigation">Ctrl K</button><dialog ref={dialog} aria-label="Site navigation" onClose={() => { setOpen(false); setQuery(""); }} onClick={(event) => { if (event.target === dialog.current) dialog.current?.close(); }} className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none bg-transparent p-4 pt-[15vh] backdrop:bg-black/30"><section className="mx-auto w-full max-w-xl border rule bg-[var(--canvas)] shadow-xl"><div className="flex items-center border-b rule px-4"><label className="sr-only" htmlFor="site-command-search">Search navigation</label><input id="site-command-search" ref={input} value={query} onChange={(event) => setQuery(event.target.value)} className="w-full bg-transparent px-1 py-4 text-base outline-none placeholder:text-[var(--faint)]" placeholder="Search pages" /><kbd className="text-xs text-[var(--muted)]">Esc</kbd></div><div className="p-2">{shown.length ? shown.map((command) => <button key={command.href} type="button" onClick={() => choose(command.href)} className="flex w-full items-center px-3 py-3 text-left text-sm hover:bg-[var(--surface)]">{command.label}</button>) : <p className="px-3 py-4 text-sm text-[var(--muted)]">No pages found.</p>}</div><p className="border-t rule px-4 py-3 text-xs text-[var(--muted)]">Use Ctrl K to open navigation</p></section></dialog></>;
}
