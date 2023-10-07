import { useMDXComponent } from 'next-contentlayer/hooks';


type MarkdownProps={ code: string }

export const Markdown:React.FC<MarkdownProps> = ({ code }) => {
  const Component = useMDXComponent(code);

  return (
    <article className="prose prose-quoteless prose-neutral dark:prose-invert">
      <Component />
    </article>
  );
}
