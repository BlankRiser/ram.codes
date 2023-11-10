import { allBlogs } from "contentlayer/generated";
import { NavbarOffset } from "~/components/layouts";
import ArticleList from "~/components/pages/blog/article-list";
import { ContentHeader } from "~/components/shared/header";

export default async function BlogPage() {
  return (
    <section className="mx-auto max-w-4xl px-2 py-8">
      <NavbarOffset className="h-28 " />
      <ContentHeader
        title={"Articles"}
        description={`Explore a variety of articles where I dive into topics like code
            refactoring, software development, CI/CD pipelines, version control,
            web-dev practices, scalability, and secure coding. Whether
            you're a seasoned developer looking to hone your skills or a
            newbie taking your first steps in the field, you'll find
            something valuable here.`}
      />
      <ArticleList allArticles={allBlogs} />
    </section>
  );
}
