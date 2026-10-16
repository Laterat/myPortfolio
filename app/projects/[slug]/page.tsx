import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "../data";

export function generateStaticParams() { return projectsData.map(({ slug }) => ({ slug })); }

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData.find((entry) => entry.slug === slug);
  if (!project) notFound();
  return <main className="site-shell py-14 md:py-24"><Link href="/projects" className="font-mono text-sm text-accent-soft hover:text-white">← Project index</Link><article className="mt-16"><p className="eyebrow">{project.category}</p><h1 className="mt-5 max-w-4xl text-5xl font-black tracking-[-.07em] md:text-7xl">{project.title}</h1><p className="mt-8 max-w-2xl text-xl leading-8 text-neutral-300">{project.summary}</p><div className="mt-14 grid border-y rule md:grid-cols-3"><div className="border-b rule py-6 md:border-b-0 md:border-r md:pr-6"><p className="font-mono text-xs text-neutral-500">ROLE</p><p className="mt-3 text-sm text-neutral-200">{project.role}</p></div><div className="border-b rule py-6 md:border-b-0 md:border-r md:px-6"><p className="font-mono text-xs text-neutral-500">ENGINEERING FOCUS</p><p className="mt-3 text-sm text-neutral-200">{project.focus}</p></div><div className="py-6 md:pl-6"><p className="font-mono text-xs text-neutral-500">TOOLKIT</p><div className="mt-3 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="font-mono text-xs text-neutral-300">{tag}</span>)}</div></div></div><div className="mt-14 max-w-2xl"><h2 className="text-2xl font-bold">The approach</h2><p className="mt-5 leading-8 text-neutral-300">{project.description}</p></div></article></main>;
}
