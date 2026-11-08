import type { Metadata } from "next";
import Link from "next/link";
import PayloadImage from "@/components/PayloadImage";
import { getCertificates, getEducation, getExperience, getSiteSettings, getSkills, type MediaAsset } from "@/lib/payload/content";

export const metadata: Metadata = { title: "About", description: "Professional background, education, certifications, and technical skills." };

function period(start: string, end?: string, current?: boolean) {
  const year = (value: string) => new Date(value).getFullYear();
  return `${year(start)} – ${current ? "Present" : end ? year(end) : ""}`;
}

export default async function About() {
  const [settings, experience, education, certificates, skills] = await Promise.all([getSiteSettings(), getExperience(), getEducation(), getCertificates(), getSkills()]);
  const identity = settings?.identity;
  const skillGroups = [...new Set(skills.map(({ category }) => category))];
  return <main id="main-content" className="site-shell py-16 md:py-24">
    <header className="grid gap-10 border-b rule pb-12 md:grid-cols-[1fr_17rem] md:items-end md:pb-16">
      <div><p className="eyebrow">About</p><h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-.065em] md:text-7xl">The work behind the work.</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">{identity?.aboutDescription || "I turn ideas, requirements, and messy problems into dependable digital products. My work connects engineering discipline with the details that make an interface feel clear and considered."}</p></div>
      <aside className="border-t rule pt-5 text-sm leading-6 text-[var(--muted)]"><p>{identity?.professionalTitle || "Software Developer"}</p><p>{identity?.location || "Addis Ababa"}</p>{identity?.resume && typeof identity.resume !== "number" && identity.resume.url ? <a className="mt-4 inline-block font-medium text-[var(--ink)] underline underline-offset-4" href={identity.resume.url}>Download résumé ↗</a> : null}</aside>
    </header>

    <section className="grid gap-8 border-b rule py-12 md:grid-cols-[.7fr_1.3fr] md:py-16" aria-labelledby="experience-heading">
      <div><p className="eyebrow">Experience</p><h2 id="experience-heading" className="section-title mt-3">Professional experience</h2></div>
      {experience.length ? <div className="divide-y divide-[var(--surface-border)]">{experience.map((item) => { const logo = item.organizationLogo && typeof item.organizationLogo !== "number" ? item.organizationLogo as MediaAsset : null; return <article key={item.id} className="grid gap-2 py-6 first:pt-0 sm:grid-cols-[1fr_auto]"><div className="flex gap-4">{logo?.url ? <PayloadImage asset={logo} className="h-10 w-10 shrink-0 object-contain" /> : null}<div><h3 className="text-lg font-medium">{item.position}</h3><p className="mt-1 text-sm text-[var(--muted)]">{item.organization}{item.location ? ` · ${item.location}` : ""}</p>{item.responsibilities?.length ? <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--muted)]">{item.responsibilities.map(({ item: text }, index) => text ? <li key={index}>{text}</li> : null)}</ul> : null}</div></div><p className="text-sm text-[var(--muted)] sm:text-right">{period(item.startDate, item.endDate, item.current)}</p></article>; })}</div> : <p className="text-sm text-[var(--muted)]">Professional experience will appear here when published.</p>}
    </section>

    <section className="grid gap-8 border-b rule py-12 md:grid-cols-[.7fr_1.3fr] md:py-16" aria-labelledby="education-heading">
      <div><p className="eyebrow">Education</p><h2 id="education-heading" className="section-title mt-3">Education</h2></div>
      {education.length ? <div className="divide-y divide-[var(--surface-border)]">{education.map((item) => { const logo = item.institutionLogo && typeof item.institutionLogo !== "number" ? item.institutionLogo as MediaAsset : null; return <article key={item.id} className="grid gap-2 py-6 first:pt-0 sm:grid-cols-[1fr_auto]"><div className="flex gap-4">{logo?.url ? <PayloadImage asset={logo} className="h-10 w-10 shrink-0 object-contain" /> : null}<div><h3 className="text-lg font-medium">{item.qualification}{item.fieldOfStudy ? ` · ${item.fieldOfStudy}` : ""}</h3><p className="mt-1 text-sm text-[var(--muted)]">{item.institution}{item.location ? ` · ${item.location}` : ""}</p>{item.description ? <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)]">{item.description}</p> : null}</div></div><p className="text-sm text-[var(--muted)] sm:text-right">{period(item.startDate, item.endDate, item.current)}</p></article>; })}</div> : <p className="text-sm text-[var(--muted)]">Education details will appear here when published.</p>}
    </section>

    <section className="grid gap-8 border-b rule py-12 md:grid-cols-[.7fr_1.3fr] md:py-16" aria-labelledby="certificates-heading">
      <div><p className="eyebrow">Certificates</p><h2 id="certificates-heading" className="section-title mt-3">Learning and credentials</h2></div>
      {certificates.length ? <ul className="divide-y divide-[var(--surface-border)]">{certificates.map((certificate) => { const file = certificate.credentialFile && typeof certificate.credentialFile !== "number" ? certificate.credentialFile as MediaAsset : null; return <li key={certificate.id} className="grid gap-3 py-5 first:pt-0 sm:grid-cols-[1fr_auto] sm:items-center"><div><h3 className="font-medium">{certificate.title}</h3><p className="mt-1 text-sm text-[var(--muted)]">{certificate.issuer} · {new Date(certificate.issueDate).getFullYear()}{certificate.credentialID ? ` · ${certificate.credentialID}` : ""}</p>{file?.url ? <a href={file.url} className="mt-2 inline-block text-sm underline underline-offset-4">View certificate file ↗</a> : null}</div>{certificate.verificationURL ? <a href={certificate.verificationURL} target="_blank" rel="noreferrer" className="text-sm underline underline-offset-4">Verify credential ↗</a> : null}</li>; })}</ul> : <p className="text-sm text-[var(--muted)]">Credentials will appear here when published.</p>}
    </section>

    <section className="grid gap-8 py-12 md:grid-cols-[.7fr_1.3fr] md:py-16" aria-labelledby="skills-heading">
      <div><p className="eyebrow">Skills</p><h2 id="skills-heading" className="section-title mt-3">Technical toolkit</h2></div>
      {skills.length ? <div className="space-y-8">{skillGroups.map((category) => <div key={category}><h3 className="text-sm font-medium">{category}</h3><ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--muted)]">{skills.filter((skill) => skill.category === category).map((skill) => <li key={skill.id}>{skill.name}</li>)}</ul></div>)}</div> : <p className="text-sm text-[var(--muted)]">Skills will appear here when published in the CMS.</p>}
    </section>

    <div className="border-t rule pt-8"><Link href="/contact" className="text-sm font-medium underline underline-offset-4">Get in touch ↗</Link></div>
  </main>;
}
