import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/lib/payload/content";

export const metadata: Metadata = { title: "Projects", description: "Selected projects by Latera Mekonnen." };

export default async function ProjectsPage() {
  const projects = await getProjects();
  return <main id="main-content" className="site-shell py-16 md:py-24">
    <header className="max-w-3xl"><p className="eyebrow">Project index</p><h1 className="mt-4 text-5xl font-semibold tracking-[-.065em] md:text-7xl">Selected work</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">A selection of projects, with context on the problem, the approach, and the work behind each one.</p></header>
    {projects.length ? <section className="mt-12 border-y rule" aria-label="Published projects">{projects.map((project) => <ProjectCard key={project.id} project={project} />)}</section> : <p className="mt-12 border-y rule py-8 text-sm text-[var(--muted)]">Project case studies will appear here as they are published.</p>}
  </main>;
}
