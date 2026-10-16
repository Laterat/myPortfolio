import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "./data";

export default function ProjectsPage() {
  return <main className="site-shell py-16 md:py-24"><header className="max-w-3xl"><p className="eyebrow">Project index / 03 selected</p><h1 className="mt-5 text-5xl font-black tracking-[-.07em] md:text-7xl">Work with a point of view.</h1><p className="mt-7 text-lg leading-8 text-neutral-300">A focused selection of product experiences. Each project is organized around a real workflow, a clear technical approach, and the small decisions that make software easier to use.</p></header><section className="mt-16 border-y rule" aria-label="Selected projects">{projectsData.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</section><p className="mt-8 font-mono text-xs leading-6 text-neutral-500">Project details describe the scope and approach represented in this portfolio. External demos and repositories are not listed where they are not publicly available.</p></main>;
}
