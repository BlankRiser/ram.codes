import { Marquee } from './marquee';
import { Divider } from '../ui';

const tech = [
	'React',
	'NextJs',
	'AstroJs',
	'Remix',

	'|',

	'AWS',
	'Docker',
	'Github Actions',

	'|',

	'TypeScript',
	'JavaScript',
	'Python',

	'|',

	'HTML',
	'CSS',
	'SCSS',
	'Tailwind CSS',
	'Chakra UI',
	'Panda CSS',
	'Mantine UI',
	'Material UI',

	'|',

	'Apache Echarts',
	'Highcharts',
	'ChartJs',

	'|',

	'Express',
];

export function TechMarquee() {
	return (
		<div className='relative'>
			<div className={`absolute bottom-0 `}>
				<Marquee>
					{tech.map((t, i) => (
						<span key={i} className='inline-block p-4 text-gray-400'>
							{t}
						</span>
					))}
				</Marquee>
				<Divider className='my-0' />
			</div>
		</div>
	);
}
