import { allBlogs } from "contentlayer/generated";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import ArticleList from "~/components/pages/blog/article-list";

export default async function BlogPage() {
  return (
    <section className="mx-auto max-w-4xl px-2 py-8">
      <div className="my-8">
        <h1 className="mb-8 font-jet-mono text-5xl font-semibold tracking-tighter text-neutral-300">
          Articles
        </h1>
        <p className="font-generalSans text-lg text-neutral-400">
          <Balancer>
            Explore a variety of articles where I dive into topics like code
            refactoring, software development, CI/CD pipelines, version control,
            DevOps practices, scalability, and secure coding. Whether
            you&apos;re a seasoned developer looking to hone your skills or a
            newbie taking your first steps in the field, you&apos;ll find
            something valuable here.
          </Balancer>
        </p>
      </div>
      <ArticleList allArticles={allBlogs} />
    </section>
  );
}
