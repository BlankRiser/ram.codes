import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import GithubSlugger from 'github-slugger';

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
	slug: {
		type: 'string',
		resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, ''),
	},
	path: {
		type: 'string',
		resolve: (doc) => doc._raw.flattenedPath,
	},
	filePath: {
		type: 'string',
		resolve: (doc) => doc._raw.sourceFilePath,
	},
	structuredData: {
		type: 'object',
		resolve: (doc) => ({
			'@context': 'https://schema.org',
			'@type': 'BlogPosting',
			headline: doc.title,
			datePublished: doc.publishedAt,
			dateModified: doc.publishedAt,
			description: doc.summary,
			image: doc.image ? `https://v2.ram.codes${doc.image}` : `https://v2.ram.codes/og?title=${doc.title}`,
			url: `https://v2.ram.codes/blog/${doc._raw.flattenedPath}`,
			author: {
				'@type': 'Person',
				name: 'Ram Shankar Choudhary',
			},
		}),
	},
	headings: {
		type: 'json',
		resolve: async (doc) => {
			const regXHeader = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
			const slugger = new GithubSlugger();
			const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(({ groups }) => {
				const flag = groups?.flag;
				const content = groups?.content;
				return {
					level: flag?.length == 1 ? 'one' : flag?.length == 2 ? 'two' : 'three',
					text: content,
					slug: content ? slugger.slug(content) : undefined,
				};
			});
			return headings;
		},
	},
};

export const Blog = defineDocumentType(() => ({
	name: 'Blog',
	filePathPattern: 'blog/**/*.mdx',
	contentType: 'mdx',
	fields: {
		title: {
			type: 'string',
			required: true,
		},
		publishedAt: {
			type: 'string',
			required: true,
		},
		summary: {
			type: 'string',
			required: true,
		},
		image: {
			type: 'string',
		},
		draft: {
			type: 'boolean',
			required: true,
			default: true,
		},
		series: {
			type: 'string',
			required: false,
			
		},
		toc: {
			type: 'boolean',
			required: false,
			default: false,
		},
	},
	computedFields,
}));
export const Snippets = defineDocumentType(() => ({
	name: 'Snippets',
	filePathPattern: 'snippets/**/*.mdx',
	contentType: 'mdx',
	fields: {
		title: {
			type: 'string',
			required: true,
		},
		publishedAt: {
			type: 'string',
			required: true,
		},
		summary: {
			type: 'string',
			required: true,
		},
		image: {
			type: 'string',
		},
		draft: {
			type: 'boolean',
			required: true,
			default: true,
		},
		toc: {
			type: 'boolean',
			required: false,
			default: false,
		},
	},
	computedFields,
}));

const rehypeSyntaxHighlight = [
	rehypePrettyCode,
	{
		theme: 'poimandres', 
		onVisitLine(node) {
			// Prevent lines from collapsing in `display: grid` mode, and allow empty
			// lines to be copy/pasted
			if (node.children.length === 0) {
				node.children = [{ type: 'text', value: ' ' }];
			}
		},
		onVisitHighlightedLine(node) {
			node.properties.className.push('line--highlighted');
		},
		onVisitHighlightedWord(node) {
			node.properties.className = ['word--highlighted'];
		},
	},
];

export default makeSource({
	contentDirPath: 'content',
	documentTypes: [Blog, Snippets],
	mdx: {
		cwd: process.cwd(),
		rehypePlugins: [rehypeSlug, rehypeSyntaxHighlight],
	},
});

// type Theme =
//   | 'css-variables'
//   | 'dark-plus'
//   | 'dracula-soft'
//   | 'dracula'
//   | 'github-dark-dimmed'
//   | 'github-dark'
//   | 'github-light'
//   | 'hc_light'
//   | 'light-plus'
//   | 'material-theme-darker'
//   | 'material-theme-lighter'
//   | 'material-theme-ocean'
//   | 'material-theme-palenight'
//   | 'material-theme'
//   | 'min-dark'
//   | 'min-light'
//   | 'monokai'
//   | 'nord'
//   | 'one-dark-pro'
//   | 'poimandres'
//   | 'rose-pine-dawn'
//   | 'rose-pine-moon'
//   | 'rose-pine'
//   | 'slack-dark'
//   | 'slack-ochin'
//   | 'solarized-dark'
//   | 'solarized-light'
//   | 'vitesse-dark'
//   | 'vitesse-light'
