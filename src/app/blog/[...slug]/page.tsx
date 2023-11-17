import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";

import { Metadata } from "next";
import Balancer from "react-wrap-balancer";
import { Markdown } from "~/components/mdx/markdown";
import { Tooltip, TooltipContent, TooltipTrigger } from "~/components/ui";
import { formatDate } from "~/utils/date-utils";
import { cn } from "~/utils/text-transforms";

import { IconoirLongArrowDownRight } from "~/components/icons/arrow-down-right";

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

      <div className="relative mb-4 mt-2 flex min-h-[200px] flex-col items-center justify-center gap-4 overflow-hidden text-sm md:mb-8 md:min-h-[400px]">
        <div className="absolute inset-x-0 top-0 z-10 mx-auto h-[35px] w-[75%] max-w-3xl rounded-full bg-devhaven-800/80 blur-3xl" />
        <h1 className="max-w-7xl bg-gradient-to-br from-neutral-400 via-neutral-800 via-30% to-neutral-900 bg-clip-text text-center font-space-grotesk text-4xl font-semibold tracking-wide md:text-4xl">
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
        <aside className="fixed right-8 top-1/2 hidden max-h-[75vh] translate-y-[-50%] overflow-y-auto rounded-md bg-neutral-900 py-2 text-neutral-500 opacity-40 hover:opacity-100 md:block">
          {post.toc &&
            post.headings.map((heading: (typeof post.headings)[number]) => {
              return (
                <div
                  key={`#${heading.slug}`}
                  className="mb-1 max-w-[40ch] overflow-hidden truncate"
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        data-level={heading.level}
                        href={`#${heading.slug}`}
                        className={cn([
                          "hover:text-primary",
                          "flex items-center gap-1",
                          "data-[level=two]:pl-4",
                          "data-[level=three]:pl-8",
                        ])}
                      >
                        {["two", "three"].includes(heading.level) && (
                          <IconoirLongArrowDownRight />
                        )}
                        <span className="truncate">{heading.text}</span>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="capitalize">{heading.text}</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              );
            })}
        </aside>
      </div>
    </section>
  );
}
