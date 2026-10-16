import Link from "next/link";
import type { ProjectItem } from "@/interfaces/product";

export default function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  return <article className="group border-t rule py-8 first:border-t-0 md:grid md:grid-cols-[6rem_1fr_auto] md:gap-6">
    <p className="font-mono text-xs text-accent-soft">0{index + 1}</p>
    <div><p className="font-mono text-xs uppercase tracking-[.12em] text-neutral-500">{project.category}</p><h2 className="mt-3 text-3xl font-black tracking-[-.05em] text-white md:text-4xl">{project.title}</h2><p className="mt-4 max-w-xl leading-7 text-neutral-300">{project.summary}</p><p className="mt-5 text-sm text-neutral-500"><span className="text-neutral-300">Focus: </span>{project.focus}</p><div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="border rule px-2 py-1 font-mono text-[.68rem] text-neutral-400">{tag}</span>)}</div></div>
    <Link href={`/projects/${project.slug}`} className="mt-6 inline-flex h-fit items-center gap-2 border border-transparent px-3 py-2 text-sm font-bold text-accent-soft transition group-hover:border-accent hover:-translate-y-0.5 md:mt-0">Read case study <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span></Link>
  </article>;
}
