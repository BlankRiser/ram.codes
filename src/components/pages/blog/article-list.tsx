'use client';

import { Blog } from 'contentlayer/generated';
import { matchSorter } from 'match-sorter';
import Link from 'next/link';
import React, { useDeferredValue, useState } from 'react';
import Balancer from 'react-wrap-balancer';
import { Input } from '~/components/ui/input';

type Props = {
	allArticles: Array<Blog>;
};

const ArticleList: React.FC<Props> = ({ allArticles }) => {
	const [search, setSearch] = useState('');
	const debouncedSearch = useDeferredValue(search);

	const filteredArticles = matchSorter(allArticles, debouncedSearch, {
		keys: ['title', 'summary', 'publishedAt'],
		threshold: 2,
	});

	return (
		<div className='flex max-w-2xl flex-col gap-4 '>
			<Input
				type='text'
				placeholder='Search all the articles...'
				name='search-articles'
				id='search-articles'
				onChange={(e) => setSearch(e.target.value)}
			/>
			<ul>
				{filteredArticles
					.sort((a, b) => {
						if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
							return -1;
						}
						return 1;
					})
					.filter((item) => !item.draft)
					.map((post) => (
						<Link
							key={post.slug}
							className='group flex flex-col space-y-1 border-b-neutral-800'
							href={`/blog/${post.slug}`}
						>
							<li className='flex flex-col w-full items-start justify-start rounded-md p-4 group-hover:bg-neutral-900'>
								<div className='flex gap-2 justify-between items-center w-full'>
									<p className='text-lg font-semibold tracking-tight leading-7 text-neutral-300 group-hover:text-neutral-100 md:text-xl'>
										<Balancer>{post.title}</Balancer>
									</p>
									<span className='font-jet-mono text-sm text-neutral-500 group-hover:text-neutral-200'>
										{post.publishedAt}
									</span>
								</div>
								<span className='text-sm text-right text-neutral-500 group-hover:text-neutral-200'>
									{post.readingTime.text}
								</span>
							</li>
						</Link>
					))}
			</ul>
		</div>
	);
};

export default ArticleList;
