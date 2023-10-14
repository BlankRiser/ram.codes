import { Variants, motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import { ElementRef, useEffect, useRef } from 'react';
import Balancer from 'react-wrap-balancer';
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/tooltip';
import { ICONMAP } from '~/constants/icon-map';
import { WORK } from '~/constants/work';
import { cn } from '~/utils/text-transforms';

type Work = (typeof WORK)[number];

const variants: Variants = {
	hidden: {
		y: 10,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
	},
};

export const WorkCard: React.FC<Work> = ({
	description,
	role,
	technologies,
	url,
	year,
	brandClasses,
	company,
	image,
}) => {
	const ref = useRef<ElementRef<'div'>>(null);
	const isInView = useInView(ref, { once: true });

	const controls = useAnimation();

	useEffect(() => {
		if (isInView) {
			controls.start('visible');
		}
	}, [controls, isInView]);

	return (
		<motion.div
			ref={ref}
			variants={variants}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, amount: 0.8 }}
			animate={controls}
			className='border-t border-neutral-700'
		>
			<div className='grid w-full grid-cols-3 justify-between py-8'>
				<div className='flex items-start gap-4'>
					<span className='text-sm text-neutral-500'>{year}</span>
					<span className='font-spaceGrotesk text-3xl font-semibold text-neutral-300'>{role}</span>
				</div>
				<p className='max-w-[40ch] font-spaceGrotesk text-lg text-neutral-300'>{description}</p>
				<div className='ml-auto flex max-w-[14rem] flex-wrap items-start justify-end gap-4'>
					{technologies.map((item) => {
						return (
							<Tooltip key={item}>
								<TooltipTrigger asChild>{ICONMAP[item as keyof typeof ICONMAP]}</TooltipTrigger>
								<TooltipContent>
									<p className='capitalize'>{item}</p>
								</TooltipContent>
							</Tooltip>
						);
					})}
				</div>
			</div>
			<a href={url} target='_blank' rel='noreferrer noopener'>
				<div
					className={cn(
						'grid min-h-[600px] w-full place-items-center rounded-[6rem]',
						brandClasses,
					)}
				>
					<div className='relative h-full w-[600px]'>
						<Image
							fill={true}
							fetchPriority='high'
							src={image}
							alt={company}
							className='pointer-events-none left-1/2 top-1/2 w-full select-none object-contain'
						/>
					</div>
				</div>
			</a>
		</motion.div>
	);
};

export const WorkHeader = () => {
	return (
		<motion.section
			variants={variants}
			initial='hidden'
			whileInView='visible'
			className='mx-auto my-24 flex w-full max-w-4xl flex-col items-center justify-center text-center'
		>
			<h1 className='bg-gradient-to-br from-neutral-200 from-10% via-neutral-500 via-60% to-neutral-900 bg-clip-text py-5 font-spaceGrotesk text-4xl font-bold leading-10 tracking-tight text-transparent md:text-7xl'>
				Professional Experience
			</h1>
			<Balancer>
				<p className='font-generalSans text-lg text-neutral-300'>
					Welcome to my professional journey. Here, I&apos;ve curated a collection of the companies
					I&apos;ve had the privilege to work with. Each experience has contributed to my growth,
					expertise, and passion in Software Engineering. Take a glimpse into my career and the
					valuable contributions I&apos;ve made to these organizations.
				</p>
			</Balancer>
		</motion.section>
	);
};
