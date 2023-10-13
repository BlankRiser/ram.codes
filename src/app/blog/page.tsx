import type { Metadata } from 'next';
import Link from 'next/link';
import { allBlogs } from 'contentlayer/generated';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default async function BlogPage() {
  return (
    <section className='mx-auto max-w-7xl py-8'>
      <h1 className="mb-8 font-jet-mono text-5xl font-bold tracking-tighter text-neutral-300">Articles</h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="group mb-4 flex flex-col space-y-1"
            href={`/blog/${post.slug}`}
          >
            <div className="grid w-full grid-cols-3 items-center gap-2 px-4 py-1 group-hover:bg-neutral-800">
              <span className="text-sm tracking-tight text-neutral-300">
                 {post.publishedAt}
              </span>
              <p className="text-lg tracking-tight text-neutral-100">
                {post.title} 
              </p>
              <p className="text-lg tracking-tight text-neutral-100">
                {post.summary} 
              </p>
            </div>
          </Link>
        ))}
    </section>
  );
}
