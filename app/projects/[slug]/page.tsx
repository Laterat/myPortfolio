import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PortfolioImage from "@/components/PortfolioImage";
import { portfolioContent, type Project } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

function projectBySlug(slug: string): Project | undefined {
  return portfolioContent.projects.find((project) => project.slug === slug);
}

export function generateStaticParams() {
  return portfolioContent.projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) return { title: portfolioContent.copy.labels.projectNotFound, robots: { index: false, follow: false } };
  return { title: project.title, description: project.summary, openGraph: { title: project.title, description: project.summary, type: "article" } };
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) notFound();

  const labels = portfolioContent.copy.labels;
  return <main id="main-content" className="site-shell py-12 md:py-20">
    <Link href="/#work" className="text-sm text-[var(--muted)] hover:text-[var(--ink)]">← {labels.allProjects}</Link>
    <header className="mt-12 grid gap-8 border-b rule pb-10 md:grid-cols-[1fr_auto] md:items-end">
      <div><p className="eyebrow">{project.category}</p><h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-[-.065em] md:text-7xl">{project.title}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">{project.summary}</p></div>
      <div className="flex flex-wrap gap-3">{project.liveURL ? <a href={project.liveURL} target="_blank" rel="noreferrer" className="bg-[var(--ink)] px-4 py-3 text-sm font-medium text-white">{labels.liveProject} ↗</a> : null}{project.githubURL ? <a href={project.githubURL} target="_blank" rel="noreferrer" className="border rule px-4 py-3 text-sm font-medium">{labels.repository} ↗</a> : null}</div>
    </header>

    {project.coverImage ? <figure className="mt-10 overflow-hidden bg-[var(--surface)]"><PortfolioImage asset={project.coverImage} className="h-auto w-full object-cover" priority /><figcaption className="px-4 py-3 text-xs text-[var(--muted)]">{project.coverImage.alt}</figcaption></figure> : null}

    <div className="grid gap-12 py-12 md:grid-cols-[minmax(0,1fr)_17rem] md:gap-20 md:py-16">
      <article className="rich-text max-w-3xl leading-7 text-[var(--muted)]">
        {project.overview?.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        {project.problem ? <section className="mt-10"><h2 className="text-xl font-semibold text-[var(--ink)]">{labels.problem}</h2><p className="mt-3">{project.problem}</p></section> : null}
        {project.solution ? <section className="mt-10"><h2 className="text-xl font-semibold text-[var(--ink)]">{labels.solution}</h2><p className="mt-3">{project.solution}</p></section> : null}
        {project.responsibilities?.length ? <section className="mt-10"><h2 className="text-xl font-semibold text-[var(--ink)]">{labels.responsibilities}</h2><ul className="mt-4 list-disc space-y-2 pl-5">{project.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul></section> : null}
        {project.screenshots?.length ? <section className="mt-12" aria-label={project.title}><div className="space-y-8">{project.screenshots.map((image) => <figure key={`${image.src}-${image.caption || ""}`} className="overflow-hidden bg-[var(--surface)]"><PortfolioImage asset={image} className="h-auto w-full" />{image.caption ? <figcaption className="px-4 py-3 text-sm text-[var(--muted)]">{image.caption}</figcaption> : null}</figure>)}</div></section> : null}
      </article>
      <aside className="h-fit border-t rule pt-5 md:sticky md:top-24">
        {project.role ? <div><p className="eyebrow">{labels.myRole}</p><p className="mt-2 text-sm leading-6">{project.role}</p></div> : null}
        {project.technologies?.length ? <div className="mt-7"><p className="eyebrow">{labels.technologies}</p><ul className="mt-2 space-y-2 text-sm">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul></div> : null}
        {project.projectDate ? <div className="mt-7"><p className="eyebrow">{labels.projectDate}</p><p className="mt-2 text-sm">{new Date(project.projectDate).getFullYear()}</p></div> : null}
      </aside>
    </div>
  </main>;
}
