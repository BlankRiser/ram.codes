import {
  Context,
  defineCollection,
  defineConfig,
} from '@content-collections/core';
import { compileMDX, Options } from '@content-collections/mdx';
import externalLinks from 'rehype-external-links';
import rehypePrettyCode, {
  type Options as rehypePrettyCodeOptions,
} from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

const mdxOptions = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [
    rehypeSlug,
    [externalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
    [
      rehypePrettyCode,
      {
        theme: 'poimandres',
        filterMetaString: (string) => string.replace(/filename="[^"]*"/, ''),
      } satisfies rehypePrettyCodeOptions,
    ],
  ],
} as Options;

export const Blog = defineCollection({
  name: 'Blog',
  directory: 'content/blog',
  include: '*.mdx',
  schema: (z) => ({
    title: z.string().min(1),
    publishedAt: z.string().min(1),
    updatedAt: z.string().optional(),
    updated: z.string().optional(),
    summary: z.string().min(1),
    image: z.string().optional(),
    draft: z.boolean().default(true),
    series: z.string().optional(),
    toc: z.boolean().default(false),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [externalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
        [
          rehypePrettyCode,
          {
            theme: 'poimandres',
            filterMetaString: (string) =>
              string.replace(/filename="[^"]*"/, ''),
            // onVisitLine(node) {
            //   // Prevent lines from collapsing in `display: grid` mode, and allow empty
            //   // lines to be copy/pasted
            //   if (node.children.length === 0) {
            //     node.children = [{ type: 'text', value: ' ' }];
            //   }
            // },
            // onVisitHighlightedLine(node) {
            //   node.properties.className = ['line--highlighted'];
            // },
            // onVisitHighlightedChars(node) {
            //   node.properties.className = ['word--highlighted'];
            // },
          } satisfies rehypePrettyCodeOptions,
        ],
      ],
    });
    return {
      ...document,
      mdx,
    };
  },
});

export const Snippets = defineCollection({
  name: 'Snippets',
  directory: 'content/snippets',
  include: '**/*.mdx',
  schema: (z) => ({
    title: z.string().min(1),
    publishedAt: z.string().min(1),
    updatedAt: z.string().optional(),
    updated: z.string().optional(),
    summary: z.string().min(1),
    image: z.string().optional(),
    draft: z.boolean().default(true),
    toc: z.boolean().default(false),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, mdxOptions);
    return {
      ...document,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [Blog, Snippets],
});
