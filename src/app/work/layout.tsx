import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'work',
	description: 'Read my thoughts on software development, design, and more.',
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
