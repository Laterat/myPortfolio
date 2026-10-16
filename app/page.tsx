import Link from "next/link";

const practices = [
  ["01", "Product interfaces", "Clear, responsive interfaces that earn user confidence."],
  ["02", "Systems that last", "Maintainable frontend architecture, APIs, and data flows."],
  ["03", "Quality in the details", "Accessibility, performance, and states designed into the work."],
];

export default function Home() {
  return <div className="overflow-hidden">
    <section className="site-shell grid min-h-[calc(100svh-4rem)] content-center gap-12 py-16 lg:grid-cols-[1.35fr_.65fr] lg:py-24">
      <div>
        <p className="eyebrow">Independent software developer / Addis Ababa</p>
        <h1 className="mt-6 max-w-4xl text-[clamp(3.35rem,9vw,7.5rem)] font-black leading-[.86] tracking-[-.08em] text-white">Useful software,<br /><span className="text-accent-soft">beautifully</span> resolved.</h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-300">I&apos;m Latera Mekonnen. I build considered web products where reliable engineering and a sharp user experience meet.</p>
        <div className="mt-9 flex flex-wrap gap-3"><Link href="/projects" className="bg-accent px-5 py-3 text-sm font-bold text-[#180b06] transition hover:bg-accent-soft">Explore selected work <span aria-hidden="true">↗</span></Link><Link href="/contact" className="border rule px-5 py-3 text-sm font-semibold text-white transition hover:border-neutral-400 hover:bg-white/5">Let&apos;s work together</Link></div>
      </div>
      <aside className="panel relative self-end overflow-hidden p-5 lg:p-6" aria-label="Developer status">
        <div className="flex items-center justify-between border-b rule pb-4 font-mono text-[.68rem] uppercase tracking-[.12em] text-neutral-500"><span>Workbench</span><span className="text-accent-soft">online</span></div>
        <div className="space-y-5 py-7"><p className="font-mono text-xs text-neutral-500">current_focus</p><p className="text-3xl font-bold tracking-tight">Product engineering</p><p className="text-sm leading-6 text-neutral-400">Turning complex requirements into calm, fast experiences.</p></div>
        <div className="border-t rule pt-4 font-mono text-xs text-neutral-400"><span className="text-accent">$</span> available_for_collaboration</div>
      </aside>
    </section>
    <section className="border-y rule"><div className="site-shell grid divide-y divide-[var(--surface-border)] md:grid-cols-3 md:divide-x md:divide-y-0">{practices.map(([number, title, body]) => <article key={number} className="py-8 md:px-7 md:first:pl-0"><p className="font-mono text-xs text-accent-soft">/{number}</p><h2 className="mt-5 text-xl font-bold">{title}</h2><p className="mt-3 max-w-xs text-sm leading-6 text-neutral-400">{body}</p></article>)}</div></section>
    <section className="site-shell py-20 md:py-28"><div className="flex flex-wrap items-end justify-between gap-6"><div><p className="eyebrow">Selected work</p><h2 className="section-title mt-4">Built for the people using it.</h2></div><Link href="/projects" className="font-mono text-sm text-accent-soft hover:text-white">View all projects →</Link></div><div className="mt-12 grid gap-px border rule bg-[var(--surface-border)] md:grid-cols-3">{["Atlas CRM", "SignalOps", "Northstar Commerce"].map((project, index) => <Link key={project} href="/projects" className="group bg-[#0b0c0d] p-6 transition hover:bg-[var(--surface)]"><p className="font-mono text-xs text-neutral-500">0{index + 1} / case study</p><h3 className="mt-16 text-2xl font-bold tracking-tight group-hover:text-accent-soft">{project}</h3><p className="mt-2 text-sm text-neutral-400">Product-focused digital experience</p><span className="mt-7 inline-block text-accent">↗</span></Link>)}</div></section>
    <section className="site-shell pb-24"><div className="border-y rule py-12 text-center md:py-20"><p className="eyebrow">A good fit if you value clarity</p><h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-[-.06em] md:text-6xl">Let&apos;s make the next useful thing.</h2><Link href="/contact" className="mt-8 inline-block border border-accent px-5 py-3 text-sm font-bold text-accent-soft transition hover:bg-accent hover:text-[#180b06]">Start a conversation</Link></div></section>
  </div>;
}
