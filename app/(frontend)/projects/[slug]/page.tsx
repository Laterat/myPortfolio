import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { getProjectBySlug, type MediaAsset } from "@/lib/payload/content";
import PayloadImage from "@/components/PayloadImage";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: "Project not found", robots: { index: false, follow: false } };
  return { title: project.title, description: project.summary, openGraph: { title: project.title, description: project.summary, type: "article" } };
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();
  const cover = project.coverImage && typeof project.coverImage !== "number" ? project.coverImage as MediaAsset : null;
  const images = (project.screenshots || []).flatMap((item) => item.image && typeof item.image !== "number" ? [{ ...item, image: item.image as MediaAsset }] : []);

  return <main id="main-content" className="site-shell py-12 md:py-20">
    <Link href="/projects" className="text-sm text-[var(--muted)] hover:text-[var(--ink)]">← All projects</Link>
    <header className="mt-12 grid gap-8 border-b rule pb-10 md:grid-cols-[1fr_auto] md:items-end">
      <div><p className="eyebrow">{project.category}</p><h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-.065em] md:text-7xl">{project.title}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">{project.summary}</p></div>
      <div className="flex flex-wrap gap-3">{project.liveURL ? <a href={project.liveURL} target="_blank" rel="noreferrer" className="bg-[var(--ink)] px-4 py-3 text-sm font-medium text-white">Open live project ↗</a> : null}{project.githubURL ? <a href={project.githubURL} target="_blank" rel="noreferrer" className="border rule px-4 py-3 text-sm font-medium">View repository ↗</a> : null}</div>
    </header>

    {cover?.url ? <figure className="mt-10 overflow-hidden bg-[var(--surface)]"><PayloadImage asset={cover} alt={cover.alt || ""} className="h-auto w-full object-cover" priority /><figcaption className="px-4 py-3 text-xs text-[var(--muted)]">{cover.alt}</figcaption></figure> : null}

    <div className="grid gap-12 py-12 md:grid-cols-[minmax(0,1fr)_17rem] md:gap-20 md:py-16">
      <article className="rich-text max-w-3xl leading-7 text-[var(--muted)]"><RichText data={project.overview as never} />
        {project.problem ? <section className="mt-10"><h2 className="text-xl font-semibold text-[var(--ink)]">Problem</h2><p className="mt-3">{project.problem}</p></section> : null}
        {project.solution ? <section className="mt-10"><h2 className="text-xl font-semibold text-[var(--ink)]">Solution</h2><p className="mt-3">{project.solution}</p></section> : null}
        {project.responsibilities?.length ? <section className="mt-10"><h2 className="text-xl font-semibold text-[var(--ink)]">Responsibilities</h2><ul className="mt-4 list-disc space-y-2 pl-5">{project.responsibilities.map((item, index) => item.item ? <li key={index}>{item.item}</li> : null)}</ul></section> : null}
        {images.length ? <section className="mt-12" aria-label="Project screenshots"><div className="space-y-8">{images.filter(({ image }) => image.url).map(({ image, caption }, index) => <figure key={`${image.url}-${index}`} className="overflow-hidden bg-[var(--surface)]"><PayloadImage asset={image} alt={image.alt || caption || ""} className="h-auto w-full" />{caption ? <figcaption className="px-4 py-3 text-sm text-[var(--muted)]">{caption}</figcaption> : null}</figure>)}</div></section> : null}
      </article>
      <aside className="h-fit border-t rule pt-5 md:sticky md:top-24">
        {project.role ? <div><p className="eyebrow">My role</p><p className="mt-2 text-sm leading-6">{project.role}</p></div> : null}
        {project.technologies?.length ? <div className="mt-7"><p className="eyebrow">Technologies</p><ul className="mt-2 space-y-2 text-sm">{project.technologies.map((technology, index) => technology.name ? <li key={`${technology.name}-${index}`}>{technology.name}</li> : null)}</ul></div> : null}
        {project.projectDate ? <div className="mt-7"><p className="eyebrow">Project date</p><p className="mt-2 text-sm">{new Date(project.projectDate).getFullYear()}</p></div> : null}
      </aside>
    </div>
  </main>;
}
