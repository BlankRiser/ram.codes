import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({
	subsets: ['latin', 'greek'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-inter',
});
export const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-space-grotesk',
});

export const jetBrainsMono = JetBrains_Mono({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '200', '100', '800'],
	variable: '--font-jetbrains-mono',
});

export const generalSans = localFont({
	src: [
		{
			path: '../../public/fonts/general-sans/GeneralSans-Variable.ttf',
			style: 'normal',
		},
		{
			path: '../../public/fonts/general-sans/GeneralSans-VariableItalic.ttf',
			style: 'italic',
		},
		{
			path: '../../public/fonts/general-sans/GeneralSans-Extralight.ttf',
			weight: '200',
			style: 'normal',
		},
		{
			path: '../../public/fonts/general-sans/GeneralSans-ExtralightItalic.ttf',
			weight: '200',
			style: 'italic',
		},
		{
			path: '../../public/fonts/general-sans/GeneralSans-Light.ttf',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../../public/fonts/general-sans/GeneralSans-LightItalic.ttf',
			weight: '300',
			style: 'italic',
		},
		{
			path: '../../public/fonts/general-sans/GeneralSans-Italic.ttf',
			weight: '400',
			style: 'italic',
		},
		{
			path: '../../public/fonts/general-sans/GeneralSans-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/general-sans/GeneralSans-Medium.ttf',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../public/fonts/general-sans/GeneralSans-MediumItalic.ttf',
			weight: '500',
			style: 'italic',
		},
		{
			path: '../../public/fonts/general-sans/GeneralSans-Semibold.ttf',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../../public/fonts/general-sans/GeneralSans-SemiboldItalic.ttf',
			weight: '600',
			style: 'italic',
		},
		{
			path: '../../public/fonts/general-sans/GeneralSans-Bold.ttf',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../../public/fonts/general-sans/GeneralSans-BoldItalic.ttf',
			weight: '700',
			style: 'italic',
		},
	],
	variable: '--font-general-sans',
});
