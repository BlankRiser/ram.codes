import { allBlogs, allSnippets } from "contentlayer/generated";
import Balancer from "react-wrap-balancer";
import ArticleList from "~/components/pages/blog/article-list";
import { SnippetsList } from "~/components/pages/snippets/snippet-list";

export default async function BlogPage() {
  return (
    <section className="mx-auto max-w-4xl px-2 py-8">
      <div className="my-8">
        <h1 className="mb-8 font-jet-mono text-5xl font-semibold tracking-tighter text-neutral-300">
          Articles
        </h1>
        <p className="font-generalSans text-lg text-neutral-400">
          <Balancer></Balancer>
        </p>
      </div>
      <SnippetsList allSnippets={allSnippets} />
    </section>
  );
}
