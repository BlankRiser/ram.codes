import { allBlogs } from 'contentlayer/generated';
import { List } from 'iconoir-react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { useMemo } from 'react';
import Balancer from 'react-wrap-balancer';
import { LongArrowDownRight } from '~/components/icons/misc';
import { Markdown } from '~/components/mdx/markdown';
import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '~/components/ui';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { formatDate } from '~/utils/date-utils';
import { cn } from '~/utils/text-transforms';

export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.slug === params.slug[0]);
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
      canonical: `https://ram.codes/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      publishedTime: post.publishedAt,
      url: `https://ram.codes/blog/${post.slug}`,
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
  const post = allBlogs.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section className='px-2'>
      <script
        type='application/ld+json'
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(post.structuredData),
        }}
      />

      <div className='relative mb-4 mt-2 flex min-h-[200px] flex-col items-center justify-center gap-4 overflow-hidden text-sm  md:min-h-[400px]'>
        <div className='absolute inset-x-0 top-0 z-10 mx-auto h-[35px] w-[75%] max-w-3xl rounded-full bg-devhaven-800/80 blur-3xl' />
        <div className='h-16'></div>
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
          <Markdown code={post.body.code} />
        </div>
        <div className='sticky bottom-4 w-full '>
          {post.toc && <TableOfContent headings={post.headings} />}
        </div>
      </div>
    </section>
  );
}

const LEVELS = ['one', 'two', 'three']; // contentlayer supports only 3 levels
type Headings = (typeof allBlogs)[number]['headings'];

const areHeadingsUniform = (headings: Headings, levels: string[]): boolean => {
  if (headings.length === 0) return false;

  const firstLevel = headings[0].level;
  if (!levels.includes(firstLevel)) return false;

  return headings.every(
    (heading: Headings[number]) => heading.level === firstLevel,
  );
};

const TableOfContent = ({ headings }: { headings: Headings }) => {
  const isUniform = useMemo(
    () => areHeadingsUniform(headings, LEVELS),
    [headings],
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size='icon' variant='secondary'>
          <List />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='max-h-[400px] overflow-y-auto px-2 py-1 text-neutral-500'>
        {headings.map((heading: Headings[number]) => {
          return (
            <div
              key={`#${heading.slug}`}
              className='mb-1 max-w-[40ch] overflow-hidden truncate'
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    data-level={heading.level}
                    href={`#${heading.slug}`}
                    className={cn([
                      'flex items-center gap-1',
                      'opacity-40 hover:text-primary hover:opacity-100',
                      isUniform && 'pl-2',
                      isUniform ? '' : 'data-[level=one]:pl-2',
                      isUniform ? '' : 'data-[level=two]:pl-4',
                      isUniform ? '' : 'data-[level=three]:pl-8',
                    ])}
                  >
                    {['two', 'three'].includes(heading.level) && !isUniform && (
                      <LongArrowDownRight />
                    )}
                    <span className='truncate'>{heading.text}</span>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p className='capitalize'>{heading.text}</p>
                </TooltipContent>
              </Tooltip>
            </div>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
