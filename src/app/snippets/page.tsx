import { allSnippets } from "contentlayer/generated";
import { SnippetsList } from "~/components/pages/snippets/snippet-list";
import { ContentHeader } from "~/components/shared/header";

export default async function BlogPage() {
  return (
    <section className="mx-auto max-w-4xl px-2 py-8">
      <ContentHeader
        title={"Snippets"}
        description={`A collection of small code snippets that I've written to solve
            specific problems.`}
      />
      <SnippetsList allSnippets={allSnippets} />
    </section>
  );
}
