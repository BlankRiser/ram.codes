import { SiGithub, SiLinkedin, SiPeerlist, SiTwitter } from '@icons-pack/react-simple-icons';

export default function SocialsPage() {
	return (
		<section className='flex h-[calc(100vh-5.6rem)] items-center justify-center px-2'>
			<div className='flex flex-col gap-4 rounded-md border border-neutral-800 py-8'>
				{SOCIALS.map((item, index) => {
					return (
						<a
							href={item.link}
							key={index}
							className='flex min-w-[200px] items-center gap-4 rounded-sm px-8 py-2 hover:bg-neutral-900 active:bg-neutral-900/80'
						>
							<span>{item.icon}</span>
							<span>{item.username}</span>
						</a>
					);
				})}
			</div>
		</section>
	);
}

const SOCIALS = [
	{
		source: 'Github',
		link: 'https://github.com/BlankRiser/',
		username: '@BlankRiser',
		icon: <SiGithub />,
		color: '',
	},
	{
		source: 'Twitter',
		link: 'https://twitter.com/rschoudhary1999',
		username: '@rschoudhary1999',
		icon: <SiTwitter />,
		color: '',
	},
	{
		source: 'Linkedin',
		link: 'https://linkedin.com/in/ram-shankar-choudhary',
		username: 'Ram Shankar Choudhary',
		icon: <SiLinkedin />,
		color: '',
	},
	{
		source: 'Peerlist',
		link: 'https://peerlist.io/ramshankar',
		username: 'ramshankar',
		icon: <SiPeerlist />,
		color: '',
	},
];
