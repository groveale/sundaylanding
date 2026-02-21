import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/blog";
import type { Metadata } from "next";
import Link from "next/link";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.meta.title} — Sunday Unplugged`,
    description: post.meta.description,
    alternates: { canonical: `https://sundayunplugged.app/blog/${slug}` },
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      type: "article",
      publishedTime: post.meta.date,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <Link
        href="/blog"
        className="mb-8 inline-block text-sm text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors"
      >
        ← Back to Blog
      </Link>
      <p className="mb-2 text-sm text-[color:var(--text-secondary)]">
        {new Date(post.meta.date).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
      <h1 className="mb-4 text-4xl font-bold text-[color:var(--text-primary)]">{post.meta.title}</h1>
      <p className="mb-12 text-xl text-[color:var(--text-secondary)]">{post.meta.description}</p>
      <article className="prose prose-lg max-w-none prose-headings:text-[color:var(--text-primary)] prose-p:text-[color:var(--text-secondary)] prose-a:text-[color:var(--primary)] prose-strong:text-[color:var(--text-primary)]">
        <MDXRemote source={post.content} />
      </article>
    </main>
  );
}
