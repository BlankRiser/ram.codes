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
      <h1 className="font-bold text-5xl mb-8 tracking-tighter text-neutral-300 font-jet-mono">Articles</h1>
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
            className="flex flex-col space-y-1 mb-4 group"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full grid grid-cols-3 group-hover:bg-neutral-800 px-4 gap-2 py-1 items-center">
              <span className="text-neutral-300 tracking-tight text-sm">
                 {post.publishedAt}
              </span>
              <p className="text-neutral-100 tracking-tight text-lg">
                {post.title} 
              </p>
              <p className="text-neutral-100 tracking-tight text-lg">
                {post.summary} 
              </p>
             
            </div>
          </Link>
        ))}
    </section>
  );
}
