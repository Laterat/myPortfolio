import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          <div>
            <div>L</div>
            <div>
              <p>Latera</p>
              <p>Developer</p>
            </div>
          </div>
        </Link>

        <nav className="flex gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div>
          <button>View more</button>
          <button>Hire me</button>
        </div>
      </div>
    </header>
  );
}
