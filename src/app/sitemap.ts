import { allBlogs, allSnippets } from 'contentlayer/generated';
import { MetadataRoute } from 'next';
import { BASE_URL } from '~/constants/links';

export default function sitemap(): MetadataRoute.Sitemap {
	const snippets: MetadataRoute.Sitemap = allSnippets.map((item) => ({
		url: BASE_URL + '/snippets/' + item.slug,
		lastModified: new Date(),
		changeFrequency: 'yearly',
		priority: 1,
	}));
	const blogPosts: MetadataRoute.Sitemap = allBlogs.map((item) => ({
		url: BASE_URL + '/blog/' + item.slug,
		lastModified: new Date(),
		changeFrequency: 'yearly',
		priority: 1,
	}));

	const staticPages: MetadataRoute.Sitemap = [
		{
			url: BASE_URL,
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: BASE_URL + '/blog',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: BASE_URL + '/work',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: BASE_URL + '/uses',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: BASE_URL + '/projects',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: BASE_URL + '/snippets',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
	];

	return [...staticPages,...blogPosts, ...snippets];
}
