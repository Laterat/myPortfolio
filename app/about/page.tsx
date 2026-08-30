import Link from "next/link";

export default function About() {
  return (
    <div className="bg-surface text-white">
      {/* Intro */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-12 md:px-10 lg:px-12 lg:pb-24">
        <div className="rounded-[32px] border border-surface-border bg-[radial-gradient(circle_at_top_left,_rgba(255,90,38,0.14),_transparent_38%),linear-gradient(135deg,#111111_0%,#0a0a0a_55%,#111111_100%)] px-6 py-10 shadow-2xl shadow-black/30 md:px-10 lg:px-14 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-accent">
                About me
              </p>

              <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white md:text-5xl lg:text-7xl">
                I care about building software that makes complicated things
                feel simple.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
                I&apos;m Latera, a software developer who enjoys turning ideas,
                requirements, and messy problems into reliable digital products.
                My approach combines engineering discipline with product
                thinking, so the result is not just functional code, but
                software people can actually use.
              </p>
            </div>

            <div className="rounded-[28px] border border-surface-border bg-surface-raised p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-neutral-500">
                My approach
              </p>

              <div className="mt-6 space-y-5">
                <div className="flex gap-4">
                  <span className="text-lg font-bold text-accent">01</span>
                  <div>
                    <h2 className="font-semibold text-white">
                      Understand the problem
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-neutral-400">
                      I start with the user, the business goal, and the actual
                      constraints before deciding what to build.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-lg font-bold text-accent">02</span>
                  <div>
                    <h2 className="font-semibold text-white">
                      Design the right system
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-neutral-400">
                      I focus on clear architecture, reusable components, and
                      interfaces that can evolve as the product grows.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-lg font-bold text-accent">03</span>
                  <div>
                    <h2 className="font-semibold text-white">
                      Ship and improve
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-neutral-400">
                      I value working software, measurable improvements, and
                      continuous refinement over unnecessary complexity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
              The developer behind the work
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Engineering with a product mindset.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-neutral-300">
            <p>
              I enjoy working at the intersection of technology, design, and
              business. That means thinking beyond whether something can be
              built and asking whether it solves the right problem, communicates
              clearly, and will remain maintainable six months from now.
            </p>

            <p>
              My work spans frontend architecture, backend development, APIs,
              databases, testing, and deployment. I&apos;m comfortable working
              across the stack when a product needs someone who can understand
              how all of its pieces fit together.
            </p>

            <p>
              I also care about the details users notice: responsive layouts,
              interaction states, loading behavior, accessibility, performance,
              and the small decisions that make an interface feel considered
              rather than assembled.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="mx-auto max-w-7xl px-6 py-5 md:px-10 lg:px-12">
        <div className="rounded-[28px] border border-surface-border bg-surface-raised p-6 md:p-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
              How I work
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              A few principles behind my engineering decisions.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-surface-border bg-[#121212] p-6">
              <span className="text-sm font-bold text-accent">01</span>
              <h3 className="mt-4 text-xl font-semibold text-white">
                Clarity over cleverness
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                Code should be understandable by the next developer, not just
                impressive to the person who wrote it.
              </p>
            </div>

            <div className="rounded-2xl border border-surface-border bg-[#121212] p-6">
              <span className="text-sm font-bold text-accent">02</span>
              <h3 className="mt-4 text-xl font-semibold text-white">
                Build for the real requirement
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                I prefer solving the actual product problem instead of adding
                complexity for hypothetical future requirements.
              </p>
            </div>

            <div className="rounded-2xl border border-surface-border bg-[#121212] p-6">
              <span className="text-sm font-bold text-accent">03</span>
              <h3 className="mt-4 text-xl font-semibold text-white">
                Quality is part of the feature
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                Performance, accessibility, testing, responsive behavior, and
                reliability are part of building the product—not cleanup for
                later.
              </p>
            </div>

            <div className="rounded-2xl border border-surface-border bg-[#121212] p-6">
              <span className="text-sm font-bold text-accent">04</span>
              <h3 className="mt-4 text-xl font-semibold text-white">
                Keep learning
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-400">
                Tools change quickly, so I focus on understanding the underlying
                engineering principles that make new technologies useful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
              Beyond the code
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              I think about the entire product, not just the implementation.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-400">
              Good engineering decisions depend on understanding what the
              software is supposed to achieve. I like being involved early
              enough to help shape the solution, not simply receive a finished
              specification.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Product thinking",
              "System architecture",
              "User experience",
              "API design",
              "Database design",
              "Testing strategy",
              "Performance",
              "Deployment",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-surface-border bg-surface-raised px-5 py-4 text-sm font-medium text-neutral-200"
              >
                <span className="mr-3 text-accent">+</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-5 md:px-10 lg:px-12">
        <div className="rounded-[30px] border border-surface-border bg-[linear-gradient(135deg,#1c1c1c_0%,#121212_100%)] p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-accent">
                Let&apos;s work together
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-bold text-white md:text-5xl">
                Have a product idea or a problem worth solving?
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-neutral-300">
                If you need someone who can think through the problem, design
                the solution, and turn it into dependable software, I&apos;d
                like to hear about it.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:bg-accent-soft"
            >
              Start a conversation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
