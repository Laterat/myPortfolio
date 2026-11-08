import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import PayloadImage from "@/components/PayloadImage";
import { getExperience, getProjects, getSiteSettings, getSkills, type MediaAsset } from "@/lib/payload/content";

export default async function Home() {
  const [settings, projects, experience, skills] = await Promise.all([getSiteSettings(), getProjects(), getExperience(), getSkills()]);
  const identity = settings?.identity;
  const portrait = identity?.profileImage && typeof identity.profileImage !== "number" ? identity.profileImage as MediaAsset : null;
  const featured = projects.filter((project) => project.featured);
  const selectedProjects = (featured.length ? featured : projects).slice(0, 3);

  return <main id="main-content">
    <section className="site-shell grid min-h-0 content-center gap-12 py-16 md:min-h-[min(760px,calc(100svh-4.5rem))] md:py-20 lg:grid-cols-[1.2fr_.8fr] lg:gap-20">
      <div>
        <p className="eyebrow">{identity?.location || "Addis Ababa"} · {identity?.professionalTitle || "Software Developer"}</p>
        <h1 className="mt-6 max-w-4xl text-[clamp(3.5rem,9vw,7.2rem)] font-semibold leading-[.96] tracking-[-.07em]">{identity?.fullName || "Latera Mekonnen"}</h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)]">{identity?.introduction || "I build web products with clear interfaces and reliable engineering, connecting thoughtful design decisions to maintainable software."}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/projects" className="bg-[var(--ink)] px-5 py-3 text-sm font-medium text-white hover:opacity-80">Explore selected work <span aria-hidden="true">↗</span></Link>
          <Link href="/contact" className="border rule px-5 py-3 text-sm font-medium hover:bg-[var(--surface)]">Get in touch</Link>
        </div>
      </div>
      <aside className="self-end border-t rule pt-5 lg:justify-self-end lg:max-w-sm" aria-label="Professional profile">
        {portrait?.url ? <PayloadImage asset={portrait} className="mb-6 aspect-[4/5] max-h-80 w-auto object-cover grayscale" priority /> : null}
        <p className="eyebrow">Approach</p>
        <p className="mt-4 text-xl font-medium leading-8">Understand the real problem. Make the system clear. Refine the details that help people get things done.</p>
        {identity?.availability === "open" ? <p className="mt-6 border-t rule pt-4 text-sm text-[var(--muted)]">Open to opportunities</p> : null}
      </aside>
    </section>

    {selectedProjects.length ? <section className="border-y rule" aria-labelledby="selected-work-heading">
      <div className="site-shell py-16 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow">Selected work</p><h2 id="selected-work-heading" className="section-title mt-3">Projects shaped around real use.</h2></div><Link href="/projects" className="text-sm font-medium hover:underline">All projects <span aria-hidden="true">↗</span></Link></div>
        <div className="mt-8">{selectedProjects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
      </div>
    </section> : null}

    {experience.length ? <section className="site-shell grid gap-8 py-16 md:grid-cols-[.7fr_1.3fr] md:py-20" aria-labelledby="experience-heading">
      <div><p className="eyebrow">Professional experience</p><h2 id="experience-heading" className="section-title mt-3">Where I&apos;ve contributed.</h2></div>
      <div className="divide-y divide-[var(--surface-border)]">{experience.slice(0, 3).map((item) => <article key={item.id} className="grid gap-2 py-5 first:pt-0 sm:grid-cols-[1fr_auto]"><div><h3 className="text-lg font-medium">{item.position}</h3><p className="mt-1 text-sm text-[var(--muted)]">{item.organization}{item.location ? ` · ${item.location}` : ""}</p></div><p className="text-sm text-[var(--muted)] sm:text-right">{new Date(item.startDate).getFullYear()} – {item.current ? "Present" : item.endDate ? new Date(item.endDate).getFullYear() : ""}</p></article>)}</div>
      <Link href="/about" className="text-sm font-medium hover:underline md:col-start-2">More about my background <span aria-hidden="true">↗</span></Link>
    </section> : null}

    {skills.length ? <section className="bg-[var(--surface)]" aria-labelledby="capabilities-heading">
      <div className="site-shell grid gap-8 py-16 md:grid-cols-[.7fr_1.3fr] md:py-20"><div><p className="eyebrow">Technical capabilities</p><h2 id="capabilities-heading" className="section-title mt-3">Tools for the work at hand.</h2></div><ul className="flex flex-wrap content-start gap-x-6 gap-y-3">{skills.slice(0, 16).map((skill) => <li key={skill.id} className="border-b rule pb-2 text-sm">{skill.name}</li>)}</ul></div>
    </section> : null}

    <section className="site-shell py-16 md:py-24"><div className="grid gap-6 border-y rule py-10 md:grid-cols-[1fr_auto] md:items-center md:py-14"><div><p className="eyebrow">Contact</p><h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-.045em] md:text-5xl">Have a thoughtful problem to solve?</h2></div><Link href="/contact" className="inline-flex w-fit items-center gap-2 border border-[var(--ink)] px-5 py-3 text-sm font-medium hover:bg-[var(--ink)] hover:text-white">Start a conversation <span aria-hidden="true">↗</span></Link></div></section>
  </main>;
}
