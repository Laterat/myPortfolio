"use client";

import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  const copy = async () => {
    try { await navigator.clipboard.writeText(email); setState("copied"); } catch { setState("failed"); }
    setTimeout(() => setState("idle"), 2500);
  };
  return <div className="mail">
    <button type="button" onClick={copy} className="mail-btn">{email}</button>
    <p aria-live="polite" className="mail-note">
      {state === "copied" ? "Copied to clipboard" : state === "failed" ? "Copy failed, use the mail link" : <>Click to copy, or <a href={`mailto:${email}`}>open your mail app</a></>}
    </p>
  </div>;
}
