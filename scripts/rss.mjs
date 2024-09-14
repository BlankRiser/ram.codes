import { compareDesc, parseISO } from 'date-fns';
import { Feed } from 'feed';
import { writeFileSync } from 'fs';
import { allBlogs, allSnippets } from 'content-collections';

const feed = new Feed({
  title: 'ram.codes',
  description: 'Personal website of Ram Shankar',
  id: 'https://ram.codes',
  link: 'https://ram.codes',
  language: 'en',
  favicon: 'https://ram.codes/favicon.ico',
  copyright: 'All rights reserved 2023, Ram Shankar Choudhary',
  author: {
    name: 'Ram Shanakar Choudhary',
    email: 'hi@ram.codes',
    link: 'https://ram.codes',
  },
});

allBlogs
  .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  .forEach((post) => {
    const url = `https://ram.codes/blog/${post._raw.flattenedPath}`;
    feed.addItem({
      id: url,
      link: url,
      title: post.title,
      description: post.summary,
      date: new Date(post.date).toISOString[0],
      // category: post.tags.map((name) => ({ name })),
      // image: post.image,
      author: [
        {
          name: 'Ram Shankar Choudhary',
          email: 'hi@ram.codes',
          link: 'https://ram.codes',
        },
      ],
    });
  });

allSnippets
  .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  .forEach((post) => {
    const url = `https://ram.codes/blog/${post._raw.flattenedPath}`;
    feed.addItem({
      id: url,
      link: url,
      title: post.title,
      description: post.summary,
      date: new Date(post.date).toISOString[0],
      // category: post.tags.map((name) => ({ name })),
      // image: post.image,
      author: [
        {
          name: 'Ram Shankar Choudhary',
          email: 'hi@ram.codes',
          link: 'https://ram.codes',
        },
      ],
    });
  });

writeFileSync('./public/rss.xml', feed.rss2(), { encoding: 'utf-8' });
