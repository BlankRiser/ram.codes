import { allBlogs } from 'contentlayer/generated';
import { MetadataRoute } from 'next';
import { BASE_URL } from '~/constants/links';

export default function sitemap(): MetadataRoute.Sitemap {
	const blogPosts: MetadataRoute.Sitemap = allBlogs.map((item) => ({
		url: BASE_URL + '/blog/' + item.slug,
		lastModified: new Date(),
		changeFrequency: 'yearly',
		priority: 1,
	}));
    
	return [...blogPosts];
}
