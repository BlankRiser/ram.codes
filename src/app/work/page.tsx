'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Midas } from '~/components/icons';
import { NavbarOffset } from '~/components/layouts';
import { WORK } from '~/constants/work';

export default function Page() {
	return (
		<div className='mx-auto max-w-7xl '>
			<NavbarOffset className='h-28 ' />
			<div>
				{WORK.map((item, index) => {
					return (
						<WorkCard
							brandColor={item.brancdColor}
							key={index}
							year={item.year}
							role={item.role}
							description={item.description}
							logo={item.logo}
							url={item.url}
							technologies={item.technologies}
						/>
					);
				})}
			</div>
		</div>
	);
}

function Card() {
	return (
		<motion.div
			className={`grid h-[300px] w-[300px] place-items-center rounded-2xl bg-neutral-900/50 transition-shadow duration-200 ease-in-out hover:border hover:border-midas-primary/25 hover:shadow-midas`}
		>
			<Midas className='h-1/2 w-1/2' />
		</motion.div>
	);
}

type Work = {
	year: number;
	role: string;
	description: string;
	logo: any;
	url: string;
	brandColor: string;
	technologies: Array<string>;
};

const WorkCard: React.FC<Work> = ({
	description,
	role,
	logo,
	technologies,
	url,
	year,
	brandColor,
}) => {
	const Svg = logo as any;

	return (
		<div className='border-t border-neutral-700'>
			<div className='grid w-full grid-cols-3 justify-between py-8'>
				<div className='flex items-start gap-4'>
					<span className='text-sm text-neutral-500'>{year}</span>
					<span className='font-spaceGrotesk text-3xl font-semibold'>{role}</span>
				</div>
				<p className='max-w-[40ch] font-spaceGrotesk text-lg'>{description}</p>
				<p className='ml-auto font-spaceGrotesk text-lg'>{technologies.join(', ')}</p>
			</div>
			<a href={url} target='_blank' rel='noreferrer noopener'>
				<div className='grid min-h-[600px] w-full place-items-center rounded-3xl border border-neutral-700 hover:border-midas-primary/50 hover:shadow-midas'>
					<Svg
						className='h-1/2 w-1/2'
						style={{
							color: brandColor,
						}}
					/>
				</div>
			</a>
		</div>
	);
};
