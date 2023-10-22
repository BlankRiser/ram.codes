import { allBlogs } from 'contentlayer/generated';
import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import Balancer from 'react-wrap-balancer';
import { Markdown } from '~/components/mdx/markdown';
import { BASE_URL } from '~/constants/links';
import { formatDate } from '~/utils/date-utils';

type Props = {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
	const post = allBlogs.find((post) => post.slug === params.slug);
	if (!post) {
		return {};
	}

	const { title, publishedAt: publishedTime, summary: description, image, slug } = post;
	const ogImage = image ? `${BASE_URL}${image}` : `${BASE_URL}/og?title=${title}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'article',
			publishedTime,
			url: `${BASE_URL}/blog/${slug}`,
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

export default async function Blog({ params }: Props) {
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
				<h1 className='z-10 max-w-7xl bg-gradient-to-br from-neutral-400 via-neutral-800 via-30% to-neutral-900 bg-clip-text text-center font-spaceGrotesk text-4xl font-semibold tracking-wide md:text-4xl'>
					<Balancer>{post.title}</Balancer>
				</h1>
				<p className='z-10 text-lg text-neutral-300'>
					<Balancer>{post.summary}</Balancer>
				</p>
				<p className='z-10 text-sm text-neutral-400'>{formatDate(post.publishedAt)}</p>
				<p className='z-10 text-sm text-neutral-400'>{post.readingTime.text}</p>
				{/* {post.image && <Image src={post.image} alt={post.title} layout='fill' className='object-cover' />} */}
			</div>
			<div className='relative w-full'>
				<div className='mx-auto w-full max-w-3xl'>
					<Markdown code={post.body.code} />
				</div>
				<aside className='fixed right-24 top-[25vh] hidden text-neutral-500 opacity-40 hover:opacity-100 md:block'>
					{post.toc &&
						post.headings.map((heading: (typeof post.headings)[number]) => {
							return (
								<div key={`#${heading.slug}`} className='mb-1 max-w-[25ch] overflow-hidden truncate'>
									<a
										data-level={heading.level}
										href={`#${heading.slug}`}
										className=' hover:text-primary data-[level=three]:pl-4 data-[level=two]:pl-2'
									>
										{heading.text}
									</a>
								</div>
							);
						})}
				</aside>
			</div>
		</section>
	);
}
