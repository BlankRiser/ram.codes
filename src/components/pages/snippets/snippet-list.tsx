'use client';

import { Snippets } from 'contentlayer/generated';
import { matchSorter } from 'match-sorter';
import Link from 'next/link';
import React, { useDeferredValue, useState } from 'react';
import Balancer from 'react-wrap-balancer';
import { Input } from '~/components/ui/input';

type Props = {
  allSnippets: Array<Snippets>;
};

export const SnippetsList: React.FC<Props> = ({ allSnippets }) => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDeferredValue(search);

  const filteredArticles = matchSorter(allSnippets, debouncedSearch, {
    keys: ['title', 'summary'],
    threshold: 2,
  });

  return (
    <div className='flex max-w-2xl flex-col gap-4 '>
      <Input
        type='text'
        placeholder='Search all the snippets...'
        name=''
        id=''
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
          .filter((item) => {
            if (process.env.NODE_ENV === 'development') {
              return true;
            }

            return !item.draft;
          })
          .map((post) => (
            <Link
              key={post.slug}
              className='group flex flex-col space-y-1 border-b-neutral-800'
              href={`${post.path}`}
            >
              <li className='flex w-full items-start justify-start gap-8 rounded-md p-4 group-hover:bg-neutral-900'>
                <span className='py-1 font-jet-mono text-sm text-neutral-500 group-hover:text-neutral-200'>
                  {post.publishedAt}
                </span>
                <div className='flex flex-col items-start gap-2'>
                  <p className='text-lg font-semibold tracking-tight text-neutral-300 group-hover:text-neutral-100 md:text-xl'>
                    <Balancer>{post.title}</Balancer>
                  </p>
                  <span className='font-generalSans text-sm text-neutral-400 md:text-base'>
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
