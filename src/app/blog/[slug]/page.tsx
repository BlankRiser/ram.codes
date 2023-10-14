import { allBlogs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

import { Metadata } from 'next';
import Balancer from 'react-wrap-balancer';
import { Markdown } from '~/components/mdx/markdown';
import { formatDate } from '~/utils/date-utils';

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
		<section className='px-2'>
			<script
				type='application/ld+json'
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(post.structuredData),
				}}
			/>

			<div className='relative mb-8 mt-2 flex min-h-[400px] flex-col items-center justify-center gap-4 bg-gradient-to-b from-neutral-800 via-neutral-900 to-neutral-950 text-sm'>
				<h1 className='text-4xl font-bold tracking-tighter md:text-7xl'>
					<Balancer>{post.title}</Balancer>
				</h1>
				<p className='text-lg text-neutral-300'>
					<Balancer>{post.summary}</Balancer>
				</p>
				<p className='text-sm text-neutral-400'>
					{formatDate(post.publishedAt)}
				</p>
			</div>
			<div className='mx-auto w-full max-w-4xl'>
				<Markdown code={post.body.code} />
			</div>
		</section>
	);
}
