import { Metadata } from 'next';
import '../styles/global.css';

import { Global, Navbar, NavbarOffset } from '~/components/layouts';
import { Analytics } from '~/components/layouts/analytics';
import { ScrollToTop } from '~/components/shared';
import { CommandBar } from '~/components/shared/command-bar';
import { TooltipProvider } from '~/components/ui/tooltip';
import { generalSans, inter, jetBrainsMono, spaceGrotesk } from '~/utils/fonts';
import { BASE_URL } from '~/constants/links';

export const metadata: Metadata = {
	title: 'ram.codes',
	description: 'Portfolio of Ram Shankar',
	openGraph: {
		title: 'ram.codes',
		description: 'Portfolio of Ram Shankar',
		url: BASE_URL,
		siteName: 'ram.codes',
		images: [
			{
				url: `${BASE_URL}/og.png`,
				width: 1920,
				height: 1080,
			},
		],
		locale: 'en-US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	twitter: {
		title: 'ram.codes',
		card: 'summary_large_image',
	},
	icons: {
		shortcut: '/favicon.png',
	},
};

const extraFonts = [generalSans.variable, jetBrainsMono.variable, spaceGrotesk.variable];

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<TooltipProvider>
			<html lang='en' className={`${inter.className} ${extraFonts.join(' ')}`}>
				<head>
					<Analytics />
				</head>
				<body className={`relative bg-stone-950 `}>
					<Navbar />
					<NavbarOffset />
					<Global>{children}</Global>
					<ScrollToTop />
					<CommandBar />
					{/* <Footer /> */}
				</body>
			</html>
		</TooltipProvider>
	);
}
