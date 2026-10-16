"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const commands = [{ label: "Go to home", href: "/", key: "H" }, { label: "Browse selected work", href: "/projects", key: "W" }, { label: "Read my profile", href: "/about", key: "P" }, { label: "Start a conversation", href: "/contact", key: "C" }];

export default function CommandPalette() {
  const [open, setOpen] = useState(false); const [query, setQuery] = useState(""); const input = useRef<HTMLInputElement>(null); const router = useRouter();
  useEffect(() => { const onKey = (event: KeyboardEvent) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setOpen((state) => !state); } if (event.key === "Escape") setOpen(false); }; window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey); }, []);
  useEffect(() => { if (open) window.setTimeout(() => input.current?.focus(), 0); }, [open]);
  const shown = commands.filter((command) => command.label.toLowerCase().includes(query.toLowerCase()));
  const choose = (href: string) => { setOpen(false); setQuery(""); router.push(href); };
  return <><button type="button" onClick={() => setOpen(true)} className="fixed bottom-4 right-4 z-40 hidden border rule bg-[var(--surface)] px-3 py-2 font-mono text-xs text-neutral-400 shadow-xl transition hover:border-accent hover:text-accent-soft md:block" aria-label="Open site command palette"><span className="text-accent">⌘</span> K</button>{open && <div className="fixed inset-0 z-[60] grid place-items-start bg-black/70 p-4 pt-[15vh] backdrop-blur-sm" role="presentation" onMouseDown={() => setOpen(false)}><section role="dialog" aria-modal="true" aria-label="Site command palette" className="w-full max-w-xl border rule bg-[#121416] shadow-2xl" onMouseDown={(event) => event.stopPropagation()}><div className="flex items-center border-b rule px-4"><span className="font-mono text-accent">$</span><input ref={input} value={query} onChange={(event) => setQuery(event.target.value)} className="w-full bg-transparent px-3 py-4 text-base outline-none placeholder:text-neutral-600" placeholder="Type a command…" /><kbd className="font-mono text-xs text-neutral-500">ESC</kbd></div><div className="p-2">{shown.length ? shown.map((command) => <button key={command.href} type="button" onClick={() => choose(command.href)} className="flex w-full items-center justify-between px-3 py-3 text-left text-sm text-neutral-200 hover:bg-white/5 hover:text-accent-soft"><span>{command.label}</span><kbd className="font-mono text-xs text-neutral-500">{command.key}</kbd></button>) : <p className="px-3 py-4 text-sm text-neutral-500">No matching commands.</p>}</div><p className="border-t rule px-4 py-3 font-mono text-[.68rem] text-neutral-500">KEYBOARD-FIRST NAVIGATION / CTRL + K</p></section></div>}</>;
}
