import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMDX, Options } from '@content-collections/mdx';
import externalLinks from 'rehype-external-links';
import rehypeKatex from 'rehype-katex';
import rehypePrettyCode, {
  type Options as rehypePrettyCodeOptions,
} from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
// import { remarkCodeHike } from "codehike/mdx";
// import theme from "./src/styles/themes/vitesse-dark.json" assert { type: "json" };

const mdxOptions = {
  remarkPlugins: [remarkMath,remarkGfm, 
  //   [remarkCodeHike, {
  //   theme,
  //   showCopyButton: true, autoImport: true
  // }]
],
  rehypePlugins: [
    rehypeKatex,
    rehypeSlug,
    [externalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
    [
      rehypePrettyCode,
      {
        theme: "vitesse-dark", // Theme list: https://shiki.style/themes
        // theme: JSON.parse(
        //   readFileSync('./src/styles/themes/aura-dark.json', 'utf-8'),
        // ),
        grid: true,
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
    const mdx = await compileMDX(context, document, mdxOptions);
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

const SupportedThemes = [
  'css-variables',
  'dark-plus',
  'dracula-soft',
  'dracula',
  'github-dark-dimmed',
  'github-dark',
  'github-light',
  'hc_light',
  'light-plus',
  'material-theme-darker',
  'material-theme-lighter',
  'material-theme-ocean',
  'material-theme-palenight',
  'material-theme',
  'min-dark',
  'min-light',
  'monokai',
  'nord',
  'one-dark-pro',
  'poimandres',
  'rose-pine-dawn',
  'rose-pine-moon',
  'rose-pine',
  'slack-dark',
  'slack-ochin',
  'solarized-dark',
  'solarized-light',
  'vitesse-dark',
  'vitesse-light',
];
