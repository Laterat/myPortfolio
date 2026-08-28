import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "../data";

interface ProjectDetailPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-surface text-white">
      <section className="mx-auto max-w-3xl px-6 py-16 md:px-10 lg:px-12 lg:py-20">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent transition hover:text-accent-soft"
        >
          ← Back to projects
        </Link>

        <p className="mt-8 text-sm font-medium uppercase tracking-[0.28em] text-accent">
          {project.category}
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-neutral-300">
          {project.summary}
        </p>
        <p className="mt-4 text-base leading-7 text-neutral-400">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-surface-border px-2.5 py-1 text-xs text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
