import { Attri, Midas, Opspod, Potion } from '~/components/icons';
import { ICONMAP } from './icon-map';
import { cn } from '~/utils/text-transforms';

type Technologies = keyof typeof ICONMAP;

type Work = {
  year: number;
  role: string;
  position: string;
  company: string;
  description: string;
  url: string;
  image: string;
  technologies: Array<Technologies>;
  brandClasses: string;
  accomplishments?: Array<string>;
  keyDetails?: Array<string>;
};

export const WORK: Array<Work> = [
  {
    year: 2023,
    role: 'Frontend Developer',
    position: 'Freelance',
    company: 'AR Genie',
    description: `Assisting in development of a platform for AR based applications.`,
    keyDetails: [''],
    url: 'https://www.argenie.ai/?ref=ram.codes',
    image: '/images/work/ar-genie.png',
    technologies: [
      'vite',
      'material-ui',
      'tailwind',
      'javascript',
      'typescript',
      'react-query',
      'graphql',
      'zod',
    ],
    brandClasses: cn(
      'bg-neutral-950 --border --border-neutral-700 transition-shadow  --hover:shadow-attri',
    ),
  },
  {
    year: 2023,
    role: 'Frontend Developer',
    position: 'FTE',
    company: 'Attri.AI',
    description: `Developing performant and Secure applications.`,
    keyDetails: [
      'Developing map based application for meterological data',
      'Part of hiring frontend team',
    ],
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
    ],
    brandClasses: cn(
      'bg-neutral-950 --border --border-neutral-700 transition-shadow  --hover:shadow-attri',
    ),
  },
  {
    year: 2023,
    role: 'Frontend Developer',
    position: 'Freelance',
    company: 'Studio Rhaya',
    description: `Building a portfolio website for a design studio.`,
    keyDetails: ['Developed a portfolio website for the company'],
    url: 'https://studiorhaya.com/?ref=ram.codes',
    image: '/images/work/rhaya.png',
    technologies: ['next', 'tailwind', 'typescript', 'framer-motion'],
    brandClasses: cn(
      'bg-neutral-950 --border --border-neutral-700 transition-shadow  --hover:shadow-attri',
    ),
  },
  {
    year: 2022,
    role: 'Frontend Developer',
    position: 'FTE',
    company: 'Midas Fintech Solutions Pvt Ltd',
    description: `Developing performant and Secure NextJs apps for fintech needs.`,
    keyDetails: [
      'Developed internal tools that helped the company to scale',
      'Developed customer facing applications that helped company to acquire more customers',
      'Developed a design system for the company',
    ],
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
    ],
    brandClasses: cn(
      'bg-neutral-950 --border --border-neutral-700 transition-shadow --hover:shadow-midas',
    ),
  },
  {
    year: 2022,
    role: 'Frontend Developer',
    position: 'Freelance',
    company: 'Potion Inc',
    description: `Developed an e-commerce platform for international customers.`,
    url: 'https://potion-inc.io/?ref=ram.codes',
    image: '/images/work/potion.png',
    technologies: [
      'framer-motion',
      'next',
      'tailwind',
      'typescript',
      'zod',
      'stripe',
    ],
    brandClasses: cn(
      'bg-neutral-950 --border --border-neutral-700 transition-shadow --hover:shadow-potion',
    ),
  },
  {
    year: 2021,
    role: 'Frontend Developer',
    position: 'Freelance',
    company: 'Opsopod',
    description: `Built an IoT platform landing page.`,
    url: 'https://www.opspod.in/?ref=ram.codes',
    image: '/images/work/opspod.png',
    technologies: ['next', 'tailwind', 'framer-motion', 'typescript'],
    brandClasses: cn(
      'bg-neutral-950 --border --border-neutral-700 transition-shadow --hover:shadow-cosmic-zoom',
    ),
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
      'create-react-app',
      'tailwind',
      'framer-motion',
      'nginx',
      'google-drive-api',
    ],
    brandClasses: cn(
      'bg-neutral-950 --border --border-neutral-700 transition-shadow --hover:shadow-cosmic-zoom',
    ),
  },
  {
    year: 2021,
    role: 'Data Engineer',
    position: 'FTE',
    company: 'Nabler Web Solutions Pvt Ltd',
    description: `Built ETL pipelines and dashboards using Amazon Quicksight.`,
    url: 'https://potion-inc.io/?ref=ram.codes',
    image: '/images/work/nabler.png',
    technologies: [
      'python',
      'aws',
      'postgres-sql',
      'simple storage service (s3)',
      'elastic cloud compute (ec2)',
      'nginx',
    ],
    brandClasses: cn(
      'bg-neutral-950 --border --border-neutral-700 transition-shadow --hover:shadow-nabler',
    ),
  },
];
