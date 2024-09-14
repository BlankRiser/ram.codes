import { allBlogs } from 'content-collections';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post._meta.path === params.slug);

  const slug = post?._meta.path;
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post;
  const ogImage = image
    ? `https://v2.ram.codes${image}`
    : `https://v2.ram.codes/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://v2.ram.codes/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }: { params: { slug: string[] } }) {
  // const slug = decodeURI(params.slug.join("/"));
  return <section className='px-2'>work page {JSON.stringify(params)}</section>;
}
