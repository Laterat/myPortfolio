import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "./data";

const skillGroups = [
  {
    title: "Core stack",
    skills: ["Next.js", "React", "TypeScript", "Node.js"],
  },
  {
    title: "Product engineering",
    skills: ["UI Systems", "Design APIs", "Performance", "Accessibility"],
  },
  {
    title: "Data & delivery",
    skills: ["PostgreSQL", "Prisma", "REST APIs", "Cloud Deployments"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-surface text-white">
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-accent">
            Portfolio
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
            Selected projects built with care, speed, and clarity.
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-300">
            These experiences span product strategy, polished frontend work, and
            dependable engineering decisions that scale beyond the launch day.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-12">
        <div className="rounded-[32px] border border-surface-border bg-[radial-gradient(circle_at_top,_rgba(255,90,38,0.16),_transparent_42%),linear-gradient(135deg,#111111_0%,#0a0a0a_48%,#111111_100%)] p-8 md:p-10">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-accent">
              Skills
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              A calm, modern toolkit for building thoughtful digital products.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {skillGroups.map((group, groupIndex) => (
              <div
                key={group.title}
                className="rounded-3xl border border-surface-border bg-surface-raised/80 p-6 shadow-lg shadow-black/20"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">
                    {group.title}
                  </h3>
                  <span className="text-sm text-neutral-500">
                    0{groupIndex + 1}
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {group.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="group flex items-center justify-between rounded-2xl border border-surface-border bg-white/5 px-4 py-3 transition duration-300 hover:-translate-y-1 hover:border-accent/40"
                    >
                      <span className="text-sm text-neutral-200">{skill}</span>
                      <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 transition duration-300 group-hover:text-accent">
                        {skillIndex + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
