export default function About() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[32px] border border-gray-800 px-6 py-10 shadow-2xl md:px-10 lg:px-14 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-blue-600">
                Software developer
              </p>

              <h1 className="max-w-2xl text-4xl font-black tracking-tight text-white md:text-5xl lg:text-7xl">
                I build products that feel premium and perform under pressure.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
                I'm Latera, a software developer focused on building clear, reliable digital experiences for startups and growing businesses. I specialize in turning ideas into polished products through clean code, thoughtful design, and performance-first engineering.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-black transition hover:bg-blue-500"
                >
                  View projects
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-gray-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/5"
                >
                  Hire me
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-500">
                <span>Full-stack product work</span>
                <span>UX-minded engineering</span>
                <span>Business-aware delivery</span>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[28px] border border-gray-800 bg-gray-700 p-5 shadow-xl shadow-black/30">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Current focus</p>
                    <p className="mt-1 text-xl font-semibold">
                      Product Engineering
                    </p>
                  </div>
                  <div className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
                    Open for work
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 rounded-2xl border border-gray-700 bg-gray-600/30 p-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-black">
                      ✓
                    </div>
                    <p className="text-sm text-gray-300">
                      Design systems and reusable UI
                    </p>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-gray-700 bg-gray-600/30 p-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-black">
                      ✓
                    </div>
                    <p className="text-sm text-gray-300">
                      API development and integrations
                    </p>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border border-gray-700 bg-gray-600/30 p-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-black">
                      ✓
                    </div>
                    <p className="text-sm text-gray-300">
                      Performance optimization and reliability
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-gray-500">
                Years building software
              </p>
              <p className="mt-2 text-4xl font-black text-white">
                6+
              </p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-gray-500">
                Projects launched
              </p>
              <p className="mt-2 text-4xl font-black text-white">
                18
              </p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-gray-500">
                Client retention
              </p>
              <p className="mt-2 text-4xl font-black text-white">
                99%
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-gray-500">
              What I do
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Strategy, design, and engineering that turns ideas into products.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/15 text-lg font-bold text-blue-600">
                P
              </div>
              <h3 className="text-xl font-semibold text-white">
                Product Development
              </h3>
              <p className="mt-3 text-base leading-7 text-gray-300">
                End-to-end product design and engineering for web apps, internal tools, and scalable SaaS experiences.
              </p>
            </div>
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/15 text-lg font-bold text-blue-600">
                F
              </div>
              <h3 className="text-xl font-semibold text-white">
                Frontend Architecture
              </h3>
              <p className="mt-3 text-base leading-7 text-gray-300">
                Fast, accessible interfaces built with modern JavaScript frameworks and clean, maintainable component systems.
              </p>
            </div>
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/15 text-lg font-bold text-blue-600">
                P
              </div>
              <h3 className="text-xl font-semibold text-white">
                Performance & Growth
              </h3>
              <p className="mt-3 text-base leading-7 text-gray-300">
                Optimization, analytics integration, and UX refinements that improve adoption and conversion across the funnel.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 pt-5 md:px-10 lg:px-12">
          <div className="rounded-[30px] border border-gray-800 bg-gray-900 p-8 text-center md:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-gray-500">
              Let's build
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold text-white md:text-5xl">
              Need a reliable developer for your next product milestone?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-300">
              From early product strategy to launch-ready engineering, I help teams deliver polished software without the chaos.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="/contact"
                className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-black transition hover:bg-blue-500"
              >
                Book a call
              </a>
              <a
                href="/about"
                className="rounded-full border border-gray-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                About me
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}