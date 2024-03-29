'use client';

import { Blog, Snippets } from 'contentlayer/generated';
import { matchSorter } from 'match-sorter';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useDeferredValue, useState } from 'react';
import Balancer from 'react-wrap-balancer';
import { Input } from '~/components/ui/input';

type Props = {
  allArticles: Array<Blog>;
};

const ArticleList: React.FC<Props> = ({ allArticles }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const [search, setSearch] = useState(searchParams.get('q')?.toString() ?? '');
  const debouncedSearch = useDeferredValue(search);

  const filteredArticles = matchSorter(allArticles, debouncedSearch, {
    keys: ['title', 'summary'],
    threshold: 2,
  });

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    setSearch(term);

    if (term) {
      params.set('q', term);
    } else {
      params.delete('q');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className='flex w-full max-w-3xl flex-col gap-4 '>
      <Input
        type='text'
        placeholder='Search all the articles...'
        name='search-blog'
        id='search-blog'
        defaultValue={searchParams.get('q')?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <ul className='flex flex-col gap-2'>
        {filteredArticles
          .sort((a, b) => {
            if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
              return -1;
            }
            return 1;
          })
          .filter((item) => {
            if (process.env.NODE_ENV === 'development') {
              return true;
            }

            return !item.draft;
          })
          .map((post) => (
            <Link
              key={post.slug}
              className='group flex flex-col space-y-1 rounded-md border-b-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-devhaven-500'
              href={post.path}
            >
              <li className='flex w-full flex-col-reverse items-start justify-start gap-2 rounded-md p-2 group-hover:bg-neutral-900 md:flex-row md:gap-8 md:p-4'>
                <span className='py-1 font-jet-mono text-sm text-neutral-500 group-hover:text-neutral-200'>
                  {post.publishedAt}
                </span>
                <div className='flex flex-col items-start md:gap-2'>
                  <p className='text-lg font-semibold tracking-tight text-neutral-300 group-hover:text-neutral-100 md:text-xl'>
                    <Balancer>{post.title}</Balancer>
                  </p>
                  <span className='font-generalSans text-base text-neutral-400 md:text-base'>
                    <Balancer>{post.summary}</Balancer>
                  </span>
                </div>
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default ArticleList;
