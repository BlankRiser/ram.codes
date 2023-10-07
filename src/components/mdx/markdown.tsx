import { useMDXComponent } from 'next-contentlayer/hooks';


type MarkdownProps={ code: string }

export const Markdown:React.FC<MarkdownProps> = ({ code }) => {
  const Component = useMDXComponent(code);

  return (
    <article className="prose prose-quoteless prose-neutral prose-pre:font-mono prose-a:underline-offset-4 dark:prose-invert prose-pre:my-0">
      <Component />
    </article>
  );
}
