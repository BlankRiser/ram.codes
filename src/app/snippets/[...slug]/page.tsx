import { notFound } from 'next/navigation';

import { Metadata } from 'next';
import Balancer from 'react-wrap-balancer';
import { Markdown } from '~/components/mdx/markdown';
import { formatDate } from '~/utils/date-utils';
import Link from 'next/link';
import { allSnippets } from 'content-collections';

export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  const snippet = allSnippets.find((post) => post._meta.path === params.slug);
  if (!snippet) {
    return;
  }
  const slug = snippet._meta.path;

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = snippet;
  const ogImage = image
    ? `https://v2.ram.codes${image}`
    : `https://v2.ram.codes/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://v2.ram.codes/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join('/'));
  const snippet = allSnippets.find((snippet) => snippet._meta.path === slug);

  if (!snippet) {
    notFound();
  }

  return (
    <section className='px-2'>
      <div className='relative mx-auto max-w-3xl flex-col items-center justify-center gap-4 bg-gradient-to-b py-8 text-sm'>
        <Link href={'/snippets'}>
          <span className='block max-w-fit font-generalSans text-xs text-neutral-400 hover:bg-devhaven-500 hover:text-black'>
            Snippet
          </span>
        </Link>
        <h1 className='max-w-7xl bg-gradient-to-br from-neutral-400 via-neutral-800 via-30% to-neutral-900 bg-clip-text text-left font-space-grotesk text-4xl font-semibold tracking-wide md:text-4xl'>
          <Balancer>{snippet.title}</Balancer>
        </h1>
      </div>
      <div className='relative w-full'>
        <div className='mx-auto w-full max-w-3xl'>
          <Markdown mdx={snippet.mdx} />
        </div>
        <aside className='fixed right-24 top-[25vh] hidden text-neutral-500 opacity-40 hover:opacity-100 md:block'>
          {/* {snippet.toc &&
            snippet.headings.map(
              (heading: (typeof snippet.headings)[number]) => {
                return (
                  <div
                    key={`#${heading.slug}`}
                    className='mb-1 max-w-[25ch] overflow-hidden truncate'
                  >
                    <a
                      data-level={heading.level}
                      href={`#${heading.slug}`}
                      className=' hover:text-primary data-[level=three]:pl-4 data-[level=two]:pl-2'
                    >
                      {heading.text}
                    </a>
                  </div>
                );
              },
            )} */}
        </aside>
      </div>
    </section>
  );
}
