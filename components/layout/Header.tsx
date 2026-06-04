import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-surface-border sticky top-0 justify-content">
      <div className="mx-auto max-w-6xl h-20 px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent font-bold text-black hover:bg-accent-strong transition-all duration-400  hover:-rotate-15 hover:cursor-pointer">
            L
          </div>

          <div>
            <p className="font-bold leading-none">Latera</p>
            <p className="text-sm text-neutral-400">Developer</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <button className="rounded-lg border border-surface-border px-4 py-2 text-sm hover:bg-accent transition-colors hover:text-black">
            View Work
          </button>

          <button className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-black cursor-pointer transition-all duration-300 ease-out hover:bg-accent-soft hover:-translate-y-1 hover:scale-105 active:scale-95">
            Hire Me
          </button>
        </div>
      </div>
    </header>
  );
}
