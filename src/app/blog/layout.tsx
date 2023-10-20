import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Blog',
	description: 'Read my thoughts on software development, design, and more.',
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
