import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '@radix-ui/react-hover-card';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@radix-ui/react-tooltip';
import { Button } from '@react-email/components';
import { allBlogs } from 'content-collections';
import { LongArrowDownRight } from 'iconoir-react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { useMemo } from 'react';
import Balancer from 'react-wrap-balancer';
import { Markdown } from '~/components/mdx/markdown';
import { StickyNav, TableOfContent } from '~/components/shared/sticky-nav';
import { formatDate } from '~/utils/date-utils';
import { cn } from '~/utils/text-transforms';

export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post._meta.path === params.slug[0]);

  if (!post) {
    return {
      title: 'Blog post not found',
      description: 'Blog post not found',
    };
  }

  const ogImage = post.image
    ? `https://ram.codes${post.image}`
    : `https://ram.codes/blog/default_post_image.jpg`;

  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical: `https://ram.codes/blog/${post._meta.path}`,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      publishedTime: post.publishedAt,
      url: `https://ram.codes/blog/${post._meta.path}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join('/'));

  const postIndex = allBlogs.findIndex((p) => p._meta.path === slug);
  const post = allBlogs[postIndex];

  if (!post || postIndex === -1) {
    notFound();
  }

  const prev = !!allBlogs[postIndex - 1]
    ? allBlogs[postIndex - 1]
    : allBlogs[allBlogs.length - 1];

  const next = !!allBlogs[postIndex + 1]
    ? allBlogs[postIndex + 1]
    : allBlogs[0];

  console.log('post.mdx', post.mdx);

  return (
    <section className='px-2'>
      <div className='relative mb-4 mt-2 flex min-h-[200px] flex-col items-center justify-center gap-4 overflow-hidden text-sm  md:min-h-[400px]'>
        <div className='absolute inset-x-0 top-0 z-10 mx-auto h-[35px] w-[75%] max-w-3xl rounded-full bg-devhaven-800/80 blur-3xl' />
        <div className='h-16' />
        <h1 className='max-w-7xl bg-gradient-to-br from-neutral-400 via-neutral-800 via-30% to-neutral-900 bg-clip-text text-center font-space-grotesk text-4xl font-semibold tracking-wide md:text-4xl'>
          <Balancer>{post.title}</Balancer>
        </h1>
        <p className='max-w-5xl text-center text-lg text-neutral-300'>
          <Balancer>{post.summary}</Balancer>
        </p>
        <p className='text-sm text-neutral-400'>
          {formatDate(post.publishedAt)}
        </p>
      </div>
      <div className='relative size-full'>
        <div className='relative mx-auto w-full max-w-3xl'>
          <Markdown mdx={post.mdx} />
        </div>
      </div>
      {/* {post.toc && (
        <div id='toc' className='grid scroll-mt-16 place-items-center py-4'>
          <TableOfContent headings={post.headings} />
        </div>
      )} */}
      <StickyNav hasTOC={post.toc} next={next} prev={prev} />
    </section>
  );
}
