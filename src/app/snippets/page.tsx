import { allSnippets } from 'content-collections';
import { Metadata } from 'next';
import { SnippetsList } from '~/components/pages/snippets/snippet-list';
import { ContentHeader } from '~/components/shared/header';

export const metadata: Metadata = {
  title: {
    absolute: 'Snippets', // removes "| ram.codes" being appended to the title
  },
  description: 'ram.codes',
  keywords: [
    'elastic',
    'python',
    'javascript',
    'react',
    'machine learning',
    'data science',
  ],
  openGraph: {
    url: 'https://ram.codes',
    type: 'website',
    title: 'Snippets',
    description: 'Snippets for React, React Native, Python, and more',
    images: [
      {
        url: 'https://ram.codes/og?title=Snippets',
        width: 1200,
        height: 630,
        alt: 'ram.codes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Snippets',
    description: 'Snippets for React, JavaScript, Python, and more',
    creator: '@rschoudhary1999',
    site: '@rschoudhary1999',
    images: [
      {
        url: 'https://ram.codes/og?title=Snippets',
        width: 1200,
        height: 630,
        alt: 'ram.codes',
      },
    ],
  },
  alternates: {
    canonical: 'https://ram.codes',
  },
};
export default async function BlogPage() {
  return (
    <section className='mx-auto max-w-4xl px-2 py-8'>
      <ContentHeader
        title={'Snippets'}
        description={`A collection of small code snippets that I've written to solve
            specific problems.`}
      />
      <SnippetsList allSnippets={allSnippets} />
    </section>
  );
}
