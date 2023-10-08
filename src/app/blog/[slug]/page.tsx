import { allBlogs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

import { Metadata } from 'next';
import Balancer from 'react-wrap-balancer';
import { formatDate } from '~/utils/date-utils';
import { Markdown } from '~/components/mdx/markdown';

export async function generateMetadata({ params }: any): Promise<Metadata | undefined> {
	const post = allBlogs.find((post) => post.slug === params.slug);
	if (!post) {
		return;
	}

	const { title, publishedAt: publishedTime, summary: description, image, slug } = post;
	const ogImage = image ? `https://v2.ram.codes${image}` : `https://v2.ram.codes/og?title=${title}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'article',
			publishedTime,
			url: `https://v2.ram.codes/blog/${slug}`,
			images: [
				{
					url: ogImage,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

export default async function Blog({ params }: any) {
	const post = allBlogs.find((post) => post.slug === params.slug);

	if (!post) {
		notFound();
	}

	return (
		<section className='mx-auto max-w-4xl px-2'>
			<script
				type='application/ld+json'
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(post.structuredData),
				}}
			/>
			<h1 className='text-2xl font-bold tracking-tighter'>
				<Balancer>{post.title}</Balancer>
			</h1>
			<div className='mb-8 mt-2 flex items-center justify-between text-sm'>
				<p className='text-sm text-neutral-600 dark:text-neutral-400'>
					{formatDate(post.publishedAt)}
				</p>
			</div>
			<Markdown code={post.body.code} />
		</section>
	);
}
