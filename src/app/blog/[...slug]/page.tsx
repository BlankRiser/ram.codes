import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";

import { Metadata } from "next";
import Balancer from "react-wrap-balancer";
import { Markdown } from "~/components/mdx/markdown";
import { formatDate } from "~/utils/date-utils";

export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    slug,
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
      type: "article",
      publishedTime,
      url: `https://v2.ram.codes/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }: { params: { slug: string[] } }) {
  const slug = decodeURI(params.slug.join("/"));
  const post = allBlogs.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="px-2">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(post.structuredData),
        }}
      />

      <div className="relative mb-8 mt-2 flex min-h-[400px] flex-col items-center justify-center gap-4 bg-gradient-to-b from-neutral-800 via-neutral-900 to-neutral-950 text-sm">
        <h1 className="max-w-7xl bg-gradient-to-br from-neutral-400 via-neutral-800 via-30% to-neutral-900 bg-clip-text text-center space-grotesk text-4xl font-semibold tracking-wide md:text-4xl">
          <Balancer>{post.title}</Balancer>
        </h1>
        <p className="text-lg text-neutral-300">
          <Balancer>{post.summary}</Balancer>
        </p>
        <p className="text-sm text-neutral-400">
          {formatDate(post.publishedAt)}
        </p>
      </div>
      <div className="relative w-full">
        <div className="mx-auto w-full max-w-3xl">
          <Markdown code={post.body.code} />
        </div>
        <aside className="fixed right-24 top-[25vh] hidden text-neutral-500 opacity-40 hover:opacity-100 md:block">
          {post.toc &&
            post.headings.map((heading: (typeof post.headings)[number]) => {
              return (
                <div
                  key={`#${heading.slug}`}
                  className="mb-1 max-w-[25ch] overflow-hidden truncate"
                >
                  <a
                    data-level={heading.level}
                    href={`#${heading.slug}`}
                    className=" hover:text-primary data-[level=three]:pl-4 data-[level=two]:pl-2"
                  >
                    {heading.text}
                  </a>
                </div>
              );
            })}
        </aside>
      </div>
    </section>
  );
}
