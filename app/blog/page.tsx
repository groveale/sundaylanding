import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Sunday Unplugged",
  description:
    "Thoughts on digital rest, phone addiction, and unplugging for a healthier relationship with technology.",
  alternates: { canonical: "https://sundayunplugged.app/blog" },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="mb-4 text-4xl font-bold text-[color:var(--text-primary)]">Blog</h1>
      <p className="mb-16 text-lg text-[color:var(--text-secondary)]">
        On rest, screens, and reclaiming your time.
      </p>

      {posts.length === 0 ? (
        <p className="text-[color:var(--text-secondary)]">Posts coming soon.</p>
      ) : (
        <ul className="flex flex-col gap-8">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group flex flex-col gap-2">
                <span className="text-sm text-[color:var(--text-secondary)]">
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <h2 className="text-2xl font-semibold text-[color:var(--text-primary)] group-hover:text-[color:var(--primary)] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[color:var(--text-secondary)]">{post.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
