import { Variants, motion, useAnimation, useInView, useScroll } from 'framer-motion';
import Image from 'next/image';
import { ElementRef, useEffect, useRef } from 'react';
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
							className='left-1/2 top-1/2 w-full object-contain'
						/>
					</div>
				</div>
			</a>
		</motion.div>
	);
};
