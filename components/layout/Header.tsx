import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-surface-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          aria-label="Latera Developer - Home"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent font-bold text-black transition-all duration-300 hover:-rotate-[15deg] hover:bg-accent-strong">
            L
          </div>

          <div className="hidden sm:block">
            <p className="font-bold leading-none">Latera</p>
            <p className="mt-1 text-sm text-neutral-400">Developer</p>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-6 md:flex lg:gap-8"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-accent"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-accent"
          >
            About
          </Link>

          <Link
            href="/projects"
            className="text-sm font-medium transition-colors hover:text-accent"
          >
            Projects
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-accent"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/projects"
            className="rounded-lg border border-surface-border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-black"
          >
            View Work
          </Link>

          <Link
            href="/contact"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-black transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-accent-soft active:scale-95"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Open navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-surface-border transition-colors hover:bg-accent hover:text-black md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  );
}
```;
