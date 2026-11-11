"use client";

import { useState } from "react";
import { portfolioContent } from "@/lib/content";

export default function CopyEmail({ email }: { email: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  const copy = async () => {
    try { await navigator.clipboard.writeText(email); setState("copied"); } catch { setState("failed"); }
    setTimeout(() => setState("idle"), 2500);
  };
  return <div className="mail">
    <button type="button" onClick={copy} className="mail-btn">{email}</button>
    <p aria-live="polite" className="mail-note">
      {state === "copied" ? portfolioContent.copy.emailCopied : state === "failed" ? portfolioContent.copy.emailCopyFailed : <>{portfolioContent.copy.emailCopyHint} <a href={`mailto:${email}`}>{portfolioContent.copy.openMailApp}</a></>}
    </p>
  </div>;
}
