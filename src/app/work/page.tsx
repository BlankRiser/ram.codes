'use client';

import { motion } from 'framer-motion';
import { Midas } from '~/components/icons';
import { NavbarOffset } from '~/components/layouts';
import { ICONMAP } from '~/constants/icon-map';
import { WORK } from '~/constants/work';
import { cn } from '~/utils/text-transforms';

export default function Page() {
	return (
		<div className='mx-auto max-w-7xl '>
			<NavbarOffset className='h-28 ' />
			<div className='flex flex-col gap-32'>
				{WORK.map((item, index) => {
					return (
						<WorkCard
							brandClasses={item.brandClasses}
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


type Work = {
	year: number;
	role: string;
	description: string;
	logo: any;
	url: string;
	brandClasses: string;
	technologies: Array<string>;
};

const WorkCard: React.FC<Work> = ({
	description,
	role,
	logo,
	technologies,
	url,
	year,
	brandClasses,
}) => {
	const Svg = logo as any;

	return (
		<div className='border-t border-neutral-700'>
			<div className='grid w-full grid-cols-3 justify-between py-8'>
				<div className='flex items-start gap-4'>
					<span className='text-sm text-neutral-500'>{year}</span>
					<span className='font-spaceGrotesk text-3xl font-semibold text-neutral-300'>{role}</span>
				</div>
				<p className='max-w-[40ch] font-spaceGrotesk text-lg text-neutral-300'>{description}</p>
				{/* <p className='ml-auto text-base text-neutral-300'>{technologies.join(', ')}</p> */}
				<div className='flex flex-wrap items-start justify-end gap-4'>
					{technologies.map((item) => {
						return <>{ICONMAP[item as keyof typeof ICONMAP]}</>;
					})}
				</div>
			</div>
			<a href={url} target='_blank' rel='noreferrer noopener'>
				<div className={cn('grid min-h-[600px] w-full place-items-center rounded-[6rem]',brandClasses)}>
					<Svg
						className={cn('h-1/2 w-1/2')}
					/>
				</div>
			</a>
		</div>
	);
};




function Card() {
	return (
		<motion.div
			className={`grid h-[300px] w-[300px] place-items-center rounded-2xl bg-neutral-900/50 transition-shadow duration-200 ease-in-out hover:border hover:border-midas-primary/25 hover:shadow-midas`}
		>
			<Midas className='h-1/2 w-1/2' />
		</motion.div>
	);
}