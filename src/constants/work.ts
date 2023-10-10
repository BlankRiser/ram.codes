import { Attri, Midas } from '~/components/icons';
import { ICONMAP } from './icon-map';
import { cn } from '~/utils/text-transforms';

type Technologies =  keyof typeof ICONMAP


export const WORK= [
	{
		year: 2023,
		role: 'Frontend Developer',
		description: `Developing performant and Secure NextJs apps for fintech needs.`,
		url: 'https://midasfintechsolutions.com?=ram.codes',
		technologies: ['vite', 'mapbox', 'tailwind', 'typescript', 'material-ui','radix-ui', 'echarts', 'react-query', 'javascript'] as Technologies[],
		'logo': Attri,
		brandClasses: cn('bg-[#000] border border-neutral-700 transition-shadow hover:border-black/50 hover:shadow-attri')
	},
	{
		year: 2022,
		role: 'Frontend Developer',
		description: `Developing performant and Secure NextJs apps for fintech needs.`,
		url: 'https://midasfintechsolutions.com?=ram.codes',
		technologies: [ 'vite','framer-motion', 'react', 'tailwind', 'typescript', 'react-hook-form', 'swr','react-query','zod','nginx'] as Technologies[],
		'logo': Midas,
		brandClasses: cn('bg-[#0F62FE] border border-neutral-700 transition-shadow hover:border-midas-primary/50 hover:shadow-midas')
	},
];
