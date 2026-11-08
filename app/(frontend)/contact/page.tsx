import type { Metadata } from "next";
import { getSiteSettings } from "@/lib/payload/content";

export const metadata: Metadata = { title: "Contact", description: "Contact Latera Mekonnen about software and product engineering." };

const existingProfiles = [
  { platform: "GitHub", url: "https://github.com/Laterat" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/latera-mekonnen/" },
  { platform: "X", url: "https://twitter.com/lateramekonnen" },
];

export default async function Contact() {
  const settings = await getSiteSettings();
  const links = settings?.socialLinks?.length ? settings.socialLinks : existingProfiles;
  const email = settings?.identity?.contactEmail;
  return <main id="main-content" className="site-shell py-16 md:py-24">
    <header className="max-w-4xl"><p className="eyebrow">Contact</p><h1 className="mt-4 text-5xl font-semibold tracking-[-.065em] md:text-7xl">Let&apos;s talk about what&apos;s next.</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">For product work, an engineering collaboration, or a conversation about software, reach me through one of these channels.</p></header>
    <section className="mt-14 border-y rule" aria-label="Ways to connect">
      {email ? <a href={`mailto:${email}`} className="grid gap-3 border-b rule py-6 sm:grid-cols-[1fr_auto] sm:items-center"><span><span className="block font-medium">Email</span><span className="mt-1 block text-sm text-[var(--muted)]">{email}</span></span><span className="text-sm">Write a message ↗</span></a> : null}
      {links.map(({ platform, url }) => <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="grid gap-3 border-b rule py-6 last:border-b-0 sm:grid-cols-[1fr_auto] sm:items-center"><span className="font-medium">{platform}</span><span className="text-sm text-[var(--muted)]">Open profile ↗<span className="sr-only"> (opens in a new tab)</span></span></a>)}
    </section>
    <p className="mt-8 max-w-xl text-sm leading-6 text-[var(--muted)]">{settings?.identity?.availability === "open" ? "I’m currently open to opportunities." : "I aim to keep communication clear and focused from the first conversation."}</p>
  </main>;
}
