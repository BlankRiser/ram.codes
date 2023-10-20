import { Metadata } from 'next';
import { NavbarOffset } from '~/components/layouts';
import { WorkCard, WorkHeader } from '~/components/pages/work';
import { WORK } from '~/constants/work';

export const metadata: Metadata = {
	title: 'work',
	description: 'Read my thoughts on software development, design, and more.',
};

export default function Page() {
	return (
		<div className='mx-auto max-w-7xl '>
			<NavbarOffset className='h-28 ' />
			<WorkHeader />
			<section className='flex flex-col gap-16 md:gap-32'>
				{WORK.map((item, index) => {
					return (
						<WorkCard
							key={index}
							brandClasses={item.brandClasses}
							year={item.year}
							role={item.role}
							description={item.description}
							url={item.url}
							technologies={item.technologies}
							company={item.company}
							image={item.image}
							position={item.position}
						/>
					);
				})}
			</section>
		</div>
	);
}
