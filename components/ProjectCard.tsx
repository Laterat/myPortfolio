import Link from "next/link";

export interface ProjectItem {
  title: string;
  category: string;
  summary: string;
  description: string;
  tags: string[];
  link?: string;
}

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-surface-border bg-[#111111] p-6 transition duration-300 hover:-translate-y-2 hover:border-accent/50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,69,0,0.16),_transparent_46%)] opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-neutral-300">
            {project.category}
          </span>
          <span className="text-xs uppercase tracking-[0.28em] text-neutral-500">
            0{index + 1}
          </span>
        </div>

        <h3 className="mt-6 text-2xl font-semibold text-white">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-neutral-300">
          {project.summary}
        </p>
        <p className="mt-4 text-sm leading-7 text-neutral-400">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-surface-border px-2.5 py-1 text-xs text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.link ? (
          <Link
            href={project.link}
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent transition hover:text-accent-soft"
          >
            View case study
            <span aria-hidden="true">→</span>
          </Link>
        ) : null}
      </div>
    </article>
  );
}
