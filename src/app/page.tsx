import { Hero } from '~/components/pages/home/hero';
import { TechMarquee } from '~/components/shared/tech-marquee';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ram.codes',
  description: 'Portfolio of Ram Shankar',
  keywords: [
    'react',
    'react-native',
    'python',
    'javascript',
    'typescript',
    'aws',
  ],
  openGraph: {
    url: 'https://ram.codes',
    type: 'website',
    title: 'Portfolio of Ram Shankar | ram.codes',
    description: 'Portfolio of Ram Shankar',
    images: [
      {
        url: 'https://ram.codes/thumbnail.png',
        width: 1600,
        height: 900,
        alt: 'ram.codes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Build applications | ram.codes',
    description: 'Portfolio of Ram Shankar',
    creator: '@rschoudhary1999',
    site: '@rschoudhary1999',
    images: [
      {
        url: 'https://ram.codes/thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'dminhvu',
      },
    ],
  },
  alternates: {
    canonical: 'https://ram.codes',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
    </>
  );
}
