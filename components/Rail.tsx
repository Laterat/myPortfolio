"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { portfolioContent } from "@/lib/content";

export default function Rail({ name, role }: { name: string; role: string }) {
  const [active, setActive] = useState("intro");
  const [time, setTime] = useState("");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat(portfolioContent.navigation.timeLocale, { hour: "2-digit", minute: "2-digit", timeZone: portfolioContent.navigation.timeZone });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const timer = setInterval(tick, 30000);
    const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-35% 0px -60% 0px" });
    portfolioContent.navigation.sections.forEach(({ id }) => { const el = document.getElementById(id); if (el) io.observe(el); });
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const d = document.documentElement;
        d.style.setProperty("--p", String(d.scrollTop / Math.max(1, d.scrollHeight - d.clientHeight)));
      });
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { clearInterval(timer); io.disconnect(); removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  return <header className="rail">
    <div className="rail-id">
      <Link href="/#intro" className="rail-name">{name}</Link>
      <p className="rail-role">{role}</p>
    <p className="rail-time" aria-label={portfolioContent.navigation.localTimeLabel}>{time ? `${time} ${portfolioContent.navigation.localTimeSuffix}` : portfolioContent.identity.location}</p>
    </div>
    <nav aria-label="Page sections" className="rail-nav">
      {portfolioContent.navigation.sections.map(({ id, label }) => <Link key={id} href={`/#${id}`} aria-current={active === id ? "location" : undefined}>{label}</Link>)}
    </nav>
    <p className="rail-hint">{portfolioContent.navigation.shortcutHint}</p>
  </header>;
}
