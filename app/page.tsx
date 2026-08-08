import Link from "next/link";

const stats = [
  { value: "6+", label: "Years building software" },
  { value: "18", label: "Projects launched" },
  { value: "99%", label: "Client retention" },
];

const services = [
  {
    title: "Product Development",
    description:
      "End-to-end product design and engineering for web apps, internal tools, and scalable SaaS experiences.",
  },
  {
    title: "Frontend Architecture",
    description:
      "Fast, accessible interfaces built with modern JavaScript frameworks and clean, maintainable component systems.",
  },
  {
    title: "Performance & Growth",
    description:
      "Optimization, analytics integration, and UX refinements that improve adoption and conversion across the funnel.",
  },
];

const skills = [
  "Next.js",
  "TypeScript",
  "React",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "REST APIs",
  "UI/UX",
  "Prisma",
  "Cloud Deployments",
  "Testing",
  "System Design",
];

const projects = [
  {
    name: "Atlas CRM",
    type: "B2B SaaS platform",
    summary:
      "A sales workflow platform with lead tracking, automation, and analytics dashboards for growing teams.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    name: "SignalOps",
    type: "Operations dashboard",
    summary:
      "A monitoring and reporting tool built to streamline internal operations, reduce downtime, and improve visibility.",
    tags: ["React", "Node.js", "Charts"],
  },
  {
    name: "Northstar Commerce",
    type: "E-commerce experience",
    summary:
      "A conversion-focused storefront with performance improvements, streamlined checkout flow, and a cleaner product experience.",
    tags: ["Next.js", "Tailwind", "UX"],
  },
];

export default function Home() {
  return (
    <div className="bg-surface text-white">
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-12 md:px-10 lg:px-12">
        <div className="rounded-[32px] border border-surface-border bg-[radial-gradient(circle_at_top,_rgba(255,90,38,0.16),_transparent_42%),linear-gradient(135deg,#111111_0%,#0a0a0a_48%,#111111_100%)] px-6 py-10 shadow-2xl shadow-black/30 md:px-10 lg:px-14 lg:py-16">
          <div className="mb-10 flex items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-neutral-300">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Available for select projects
            </div>
            <Link
              href="/contact"
              className="hidden rounded-full border border-surface-border px-4 py-2 text-sm text-neutral-200 transition hover:border-accent hover:text-white md:inline-flex"
            >
              Let&apos;s talk
            </Link>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-accent">
                Software developer
              </p>

              <h1 className="max-w-2xl text-4xl font-black tracking-tight text-white md:text-5xl lg:text-7xl">
                I build products that feel premium and perform under pressure.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
                I&apos;m Latera, a software developer focused on building clear,
                reliable digital experiences for startups and growing
                businesses.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:bg-accent-soft"
                >
                  View projects
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-surface-border px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/5"
                >
                  Hire me
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-neutral-300">
                <span>Full-stack product work</span>
                <span>UX-minded engineering</span>
                <span>Business-aware delivery</span>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[28px] border border-surface-border bg-surface-raised p-5 shadow-xl shadow-black/30">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-400">Current focus</p>
                    <p className="mt-1 text-xl font-semibold">
                      Product Engineering
                    </p>
                  </div>
                  <div className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
                    Open for work
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    "Design systems and reusable UI",
                    "API development and integrations",
                    "Performance optimization and reliability",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-surface-border bg-white/3 p-3"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-sm font-bold text-black">
                        ✓
                      </div>
                      <p className="text-sm text-neutral-200">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-surface-border bg-surface-raised p-6"
            >
              <p className="text-3xl font-black text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-neutral-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
            What I do
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Strategy, design, and engineering that turns ideas into products.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-surface-border bg-surface-raised p-6"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-lg font-bold text-accent">
                {service.title.charAt(0)}
              </div>
              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-neutral-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-5 md:px-10 lg:px-12">
        <div className="rounded-[28px] border border-surface-border bg-surface-raised p-6 md:p-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
                Selected work
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white">
                Recent product experiences
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden text-sm font-medium text-neutral-200 hover:text-white md:inline-block"
            >
              See all projects →
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="rounded-3xl border border-surface-border bg-[#121212] p-5"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
                    {project.type}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                    Case study
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {project.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-neutral-300">
                  {project.summary}
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
            Stack
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white">
            Tools I use to ship quality software
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-surface-border bg-surface-raised px-4 py-2 text-sm text-neutral-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-5 md:px-10 lg:px-12">
        <div className="rounded-[30px] border border-surface-border bg-[linear-gradient(135deg,#1c1c1c_0%,#121212_100%)] p-8 text-center md:p-12">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
            Let&apos;s build
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold text-white md:text-5xl">
            Need a reliable developer for your next product milestone?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-neutral-300">
            From early product strategy to launch-ready engineering, I help
            teams deliver polished software without the chaos.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:bg-accent-soft"
            >
              Book a call
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-surface-border px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              About me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
