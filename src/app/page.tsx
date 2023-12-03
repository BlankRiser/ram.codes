'use client';

import { Hero } from '~/components/pages/home/hero';
import { TechMarquee } from '~/components/shared/tech-marquee';

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />

      {/* <div className="mt-8 px-2 md:px-8">
        <Projects />
      </div> */}
    </>
  );
}
