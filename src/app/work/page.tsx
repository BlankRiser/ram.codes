'use client';

import { NavbarOffset } from '~/components/layouts';
import { WorkCard } from '~/components/pages/work';
import { WORK } from '~/constants/work';

export default function Page() {
	return (
		<div className='mx-auto max-w-7xl '>
			<NavbarOffset className='h-28 ' />
			<div className='flex flex-col gap-32'>
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
				
			</div>
		</div>
	);
}
