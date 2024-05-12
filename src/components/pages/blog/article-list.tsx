'use client';

import { Blog, Snippets } from 'contentlayer/generated';
import { matchSorter } from 'match-sorter';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useDeferredValue, useState } from 'react';
import Balancer from 'react-wrap-balancer';
import { Input } from '~/components/ui/input';
import { formatDate } from '~/utils/date-utils';

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
          .map((post) => {
            const publisedAt = formatDate(post.publishedAt);

            return (
              <Link
                key={post.slug}
                className='group flex flex-col space-y-1 rounded-md border-b-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-devhaven-500'
                href={post.path}
              >
                <li className='flex items-start gap-2'>
                  {/* <div className='relative size-full max-w-[172px]'>
                    <Image
                      src={post.image ?? '/blog/default_post_image.jpg'}
                      alt='default'
                      width={1920}
                      height={1080}
                      layout='responsive'
                      className=' aspect-[16/10] rounded-lg'
                    />
                  </div> */}

                  <div className=' w-full flex-col items-start justify-start rounded-md p-2 group-hover:bg-neutral-900 md:flex-row md:gap-8 md:p-4'>
                    <div className='flex flex-col items-start md:gap-2'>
                      <p className='text-lg font-semibold tracking-tight text-neutral-300 group-hover:text-neutral-100 md:text-xl'>
                        <Balancer>{post.title}</Balancer>
                      </p>
                      <span className='font-generalSans text-base text-neutral-400 md:text-base'>
                        <Balancer>{post.summary}</Balancer>
                      </span>
                    </div>
                    <span className='min-w-[10ch] py-1 font-jet-mono text-xs text-neutral-500 group-hover:text-neutral-200 md:text-sm'>
                      {publisedAt}
                    </span>
                  </div>
                </li>
              </Link>
            );
          })}
      </ul>
    </div>
  );
};

export default ArticleList;
