"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { portfolioContent } from "@/lib/content";

export default function CommandPalette() {
  const [open, setOpen] = useState(false); const [query, setQuery] = useState(""); const input = useRef<HTMLInputElement>(null); const dialog = useRef<HTMLDialogElement>(null); const router = useRouter();
  useEffect(() => { const onKey = (event: KeyboardEvent) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === portfolioContent.navigation.shortcutKey.toLowerCase()) { event.preventDefault(); setOpen((state) => !state); } }; window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey); }, []);
  useEffect(() => { if (open && !dialog.current?.open) dialog.current?.showModal(); if (!open && dialog.current?.open) dialog.current.close(); if (open) window.setTimeout(() => input.current?.focus(), 0); }, [open]);
  const shown = portfolioContent.navigation.sections.filter((section) => section.label.toLowerCase().includes(query.toLowerCase()));
  const choose = (href: string) => { setOpen(false); setQuery(""); router.push(href); };
  const text = portfolioContent.commandPalette;
  return <><button type="button" onClick={() => setOpen(true)} className="fixed bottom-4 right-4 z-40 hidden border rule bg-[var(--canvas)] px-3 py-2 text-xs text-[var(--muted)] shadow-lg hover:text-[var(--ink)]" aria-label={portfolioContent.navigation.openButton}>{portfolioContent.navigation.shortcutLabel}</button><dialog ref={dialog} aria-label={text.title} onClose={() => { setOpen(false); setQuery(""); }} onClick={(event) => { if (event.target === dialog.current) dialog.current?.close(); }} className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none bg-transparent p-4 pt-[15vh] backdrop:bg-black/30"><section className="mx-auto w-full max-w-xl border rule bg-[var(--canvas)] shadow-xl"><div className="flex items-center border-b rule px-4"><label className="sr-only" htmlFor="site-command-search">{text.searchLabel}</label><input id="site-command-search" ref={input} value={query} onChange={(event) => setQuery(event.target.value)} className="w-full bg-transparent px-1 py-4 text-base outline-none placeholder:text-[var(--faint)]" placeholder={text.placeholder} /><kbd className="text-xs text-[var(--muted)]">{text.closeLabel}</kbd></div><div className="p-2">{shown.length ? shown.map((section) => <button key={section.id} type="button" onClick={() => choose(`/#${section.id}`)} className="flex w-full items-center px-3 py-3 text-left text-sm hover:bg-[var(--surface)]">{section.label}</button>) : <p className="px-3 py-4 text-sm text-[var(--muted)]">{text.emptyMessage}</p>}</div><p className="border-t rule px-4 py-3 text-xs text-[var(--muted)]">{text.footerHint}</p></section></dialog></>;
}
