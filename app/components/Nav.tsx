"use client";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

export default function Nav() {
  const { theme, toggle } = useTheme();

  return (
    <nav className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--bg)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight text-[color:var(--text-primary)]">
          Sunday Unplugged
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/blog" className="text-sm text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors">
            Blog
          </Link>

          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="flex items-center gap-1.5 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1.5 text-sm transition-colors hover:bg-[color:var(--accent)]"
          >
            {theme === "light" ? "🌙" : "☀️"}
            <span className="text-[color:var(--text-secondary)]">{theme === "light" ? "Dark" : "Light"}</span>
          </button>

          <a
            href="https://apps.apple.com/app/id6758394813"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[color:var(--text-primary)] px-4 py-2 text-sm font-semibold text-[color:var(--bg)] transition-opacity hover:opacity-80"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  );
}
