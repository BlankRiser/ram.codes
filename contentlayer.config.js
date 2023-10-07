import { defineDocumentType, makeSource } from 'contentlayer/source-files'


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
  },
 computedFields
}));

export default makeSource({ contentDirPath: 'blog', documentTypes: [Blog] })