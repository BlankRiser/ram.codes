import { Attri, Midas, Opspod, Potion } from '~/components/icons';
import { ICONMAP } from './icon-map';
import { cn } from '~/utils/text-transforms';

type Technologies = keyof typeof ICONMAP;

export const WORK = [
	{
		year: 2023,
		role: 'Frontend Developer',
		position: 'FTE',
		company: 'Attri.AI',
		description: `Developing performant and Secure NextJs apps for fintech needs.`,
		url: 'https://attri.ai/?ref=ram.codes',
		image: '/images/work/attri.png',
		technologies: [
			'vite',
			'mapbox',
			'tailwind',
			'typescript',
			'material-ui',
			'radix-ui',
			'echarts',
			'react-query',
			'javascript',
			'zod',
		] as Technologies[],
		brandClasses: cn('bg-[#000] border border-neutral-700 transition-shadow  hover:shadow-attri'),
	},
	{
		year: 2022,
		role: 'Frontend Developer',
		position: 'FTE',
		company: 'Midas Fintech Solutions Pvt Ltd',
		description: `Developing performant and Secure NextJs apps for fintech needs.`,
		url: 'https://midasfintechsolutions.com?=ram.codes',
		image: '/images/work/midas.png',
		technologies: [
			'vite',
			'framer-motion',
			'react',
			'tailwind',
			'typescript',
			'react-hook-form',
			'swr',
			'react-query',
			'zod',
			'nginx',
		] as Technologies[],
		brandClasses: cn('bg-[#000] border border-neutral-700 transition-shadow hover:shadow-midas'),
	},
	{
		year: 2022,
		role: 'Frontend Developer',
		position: 'Freelance',
		company: 'Potion Inc',
		description: `Developed an e-commerce platform to international customers.`,
		url: 'https://potion-inc.io/?ref=ram.codes',
		image: '/images/work/potion.png',
		technologies: [
			'framer-motion',
			'next',
			'tailwind',
			'typescript',
			'zod',
			'stripe',
		] as Technologies[],
		brandClasses: cn('bg-[#000] border border-neutral-700 transition-shadow'),
	},
	{
		year: 2021,
		role: 'Frontend Developer',
		position: 'Freelance',
		company: 'CosmicZoom.in',
		description: `Developed an e-commerce platform to international customers.`,
		url: 'https://potion-inc.io/?ref=ram.codes',
		image: '/images/work/cosmic-zoom.png',
		technologies: [
			'framer-motion',
			'next',
			'tailwind',
			'typescript',
			'zod',
			'stripe',
		] as Technologies[],
		brandClasses: cn('bg-[#000] border border-neutral-700 transition-shadow'),
	},
];
