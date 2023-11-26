import { ICONMAP } from "./icon-map";

export const SOCIALS = [
  {
    name: "github",
    link: "https://github.com/BlankRiser/",
  },
  {
    name: "linkedin",
    link: "https://linkedin.com/in/ram-shankar-choudhary",
  },
  {
    name: "twitter",
    link: "https://twitter.com/rschoudhary1999",
  },
  {
    name: "peerlist",
    link: "https://peerlist.io/ramshankar",
  },
  {
    name: "medium",
    link: "https://devhaven.medium.com/",
  },
  {
    name: "codepen",
    link: "https://codepen.io/blankriser",
  },
] as const;

/**
 * @description
 * PROJECTS contains information about all the miscellaneous projects I've worked on personally.
 */
export const PROJECTS: Project[] = [
  {
    name: "Ajeeb Component Library",
    github: "",
    link: "",
    status: "WIP",
    images: [],
    video: "",
    description: "",
    tech: [
      {
        name: "react",
        link: "https://reactjs.org/",
      },
      {
        name: "tailwind",
        link: "https://tailwindcss.com/",
      },
      {
        name: "typescript",
        link: "https://www.typescriptlang.org/",
      },
    ],
  },
];

const WORK: Work[] = [
  // {
  // 	company: 'International Centre for Theoretical Sciences',
  // 	ogImage: '/cosmiczoom/og.png',
  // 	images: [],
  // 	role: 'Lead Developer',
  // 	start: '01-10-2020',
  // 	end: '01-04-2021',
  // 	description: `
  // 		Developed a web application for the International Centre for Theoretical Sciences, Bengaluru.
  // 		The application was used to manage the events conducted by the institute.
  // 		The application is built using React and Tailwind CSS.
  // 		Developed a custom CMS using google docs for the application using React and Tailwind CSS.
  // 	`,
  // 	tech: [
  // 		{
  // 			name: 'react',
  // 			link: 'https://reactjs.org/',
  // 		},
  // 	],
  // 	live: {
  // 		emoji: '🟢',
  // 		status: 'DONE',
  // 		link: 'https://www.cosmic-zoom.in/',
  // 	},
  // },
  {
    company: "Opspod",
    ogImage: "/opspod/og.png",
    images: [],
    role: "Frontend Developer",
    start: "01-10-2020",
    end: "01-04-2021",
    description: ``,
    tech: [
      {
        name: "typescript",
        link: "",
      },
      {
        name: "next",
        link: "",
      },
      {
        name: "framer-motion",
        link: "",
      },
      {
        name: "tailwind",
        link: "",
      },
    ],
    live: {
      emoji: "🟢",
      status: "DONE",
      link: "https://www.opspod.in/",
    },
  },
  {
    company: "Potion",
    ogImage: "/potion/og.png",
    images: [],
    role: "Frontend Developer",
    start: "01-10-2020",
    end: "01-04-2021",
    description: ``,
    tech: [
      {
        name: "react",
        link: "https://reactjs.org/",
      },
    ],
    live: {
      emoji: "🟢",
      status: "DONE",
      link: "https://potion-inc.io/",
    },
  },
];

type Work = {
  company: string;
  role: string;
  start: string;
  end: string;
  ogImage: string;
  images: string[];
  description: string;
  tech: Tech[];
  live?: {
    emoji: "🟢" | "🚧" | "👨🏻‍💻" | (string & {});
    status:
      | "WIP"
      | "DONE"
      | "PAUSED"
      | "NOT WORKING"
      | "MAINTENANCE"
      | "COMING SOON"
      | "DEAD"
      | (string & {});
    link: string;
    notWorking?: WebsiteNotWorking;
  };
};

type WebsiteNotWorking = {
  reason: string;
  backupLink: string;
};

export type Project = {
  name: string;
  github: string;
  link: string;
  status: "WIP" | "DONE" | "PAUSED";
  images: string[];
  video: string;
  description: string;
  tech: Tech[];
};

type Tech = {
  name: keyof typeof ICONMAP;
  link: string;
};
