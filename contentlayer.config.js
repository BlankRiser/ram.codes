import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
	slug: {
		type: 'string',
		resolve: (doc) => doc._raw.flattenedPath,
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
			image: doc.image
				? `https://v2.ram.codes${doc.image}`
				: `https://v2.ram.codes/og?title=${doc.title}`,
			url: `https://v2.ram.codes/blog/${doc._raw.flattenedPath}`,
			author: {
				'@type': 'Person',
				name: 'Ram Shankar Choudhary',
			},
		}),
	},
};

export const Blog = defineDocumentType(() => ({
	name: 'Blog',
	filePathPattern: `**/*.mdx`,
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
	contentDirPath: 'blog',
	documentTypes: [Blog],
	mdx: {
		rehypePlugins: [rehypeSyntaxHighlight],
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
