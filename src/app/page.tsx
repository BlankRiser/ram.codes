'use client';

import Hero from '~/components/pages/home/hero';
import { Projects } from '~/components/pages/home/projects';
import { RevealWords } from '~/components/shared/reveal-words';
import { TechMarquee } from '~/components/shared/tech-marquee';

export default function Home() {
	return (
		<div>
			<Hero />
			<div className='relative'>
				<TechMarquee />
			</div>
			<div className="px-2 md:px-8 mt-8">
        <Projects />
      </div>
		</div>
	);
}
