import Link from "next/link";
import type { MediaAsset, Project } from "@/lib/payload/content";
import PayloadImage from "@/components/PayloadImage";

export default function ProjectCard({ project }: { project: Project }) {
  const cover = project.coverImage && typeof project.coverImage !== "number" ? project.coverImage as MediaAsset : null;
  return <article className="grid gap-5 border-b rule py-8 last:border-0 md:grid-cols-[minmax(12rem,.8fr)_1.2fr_auto] md:items-center md:gap-10 md:py-10">
    <Link href={`/projects/${project.slug}`} className="block overflow-hidden bg-[var(--surface)]" aria-label={`Read ${project.title}`}>
      {cover?.url ? <PayloadImage asset={cover.sizes?.card || cover} alt={cover.alt || ""} className="aspect-[3/2] w-full object-cover" /> : <div className="aspect-[3/2]" aria-hidden="true" />}
    </Link>
    <div>
      <p className="eyebrow">{project.category}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-[-.035em] md:text-3xl"><Link href={`/projects/${project.slug}`} className="hover:underline">{project.title}</Link></h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)]">{project.summary}</p>
      {project.technologies?.length ? <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-[var(--muted)]" aria-label="Technologies">{project.technologies.map((technology, index) => technology.name ? <li key={`${technology.name}-${index}`}>{technology.name}</li> : null)}</ul> : null}
    </div>
    <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 text-sm font-medium md:justify-self-end">View project <span aria-hidden="true">↗</span></Link>
  </article>;
}
