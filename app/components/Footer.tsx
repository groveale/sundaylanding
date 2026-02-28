import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--surface)] py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <span className="text-lg font-bold text-[color:var(--text-primary)]">Sunday Unplugged</span>
            <p className="text-sm text-[color:var(--text-secondary)]">No accounts. No tracking. Local only.</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-[color:var(--text-secondary)]">
            <Link href="/blog" className="hover:text-[color:var(--text-primary)] transition-colors">Blog</Link>
            <a
              href="https://apps.apple.com/app/id6758394813"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[color:var(--text-primary)] transition-colors"
            >
              App Store
            </a>
            <Link href="/privacy" className="hover:text-[color:var(--text-primary)] transition-colors">Privacy Policy</Link>
          </nav>
        </div>

        <div className="mt-8 border-t border-[color:var(--border)] pt-8 text-center text-xs text-[color:var(--text-secondary)]">
          © {new Date().getFullYear()} Sunday Unplugged. Made with care, offline on Sundays.
        </div>
      </div>
    </footer>
  );
}
