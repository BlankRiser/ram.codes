import { useMDXComponent } from "next-contentlayer/hooks";
import { cn } from "~/utils/text-transforms";

type MarkdownProps = { code: string };

export const Markdown: React.FC<MarkdownProps> = ({ code }) => {
  const Component = useMDXComponent(code);

  return (
    <article
      className={cn([
        commonStyles,
        articleStyles,
        textStyles,
        listStyles,
        codeStyles,
      ])}
    >
      <Component />
    </article>
  );
};

const commonStyles = cn([
  "prose", //prose-neutral dark:prose-invert
  "font-geist-sans",
  "w-full min-w-full",
]);

/**
 * Applying colors to the all the elements individually
 **/
const textStyles = cn([
  "font-geist-sans",
  "prose-h1:scroll-mt-24 prose-h1:text-3xl prose-h1:font-bold prose-h1:leading-10 prose-h1:tracking-tight prose-h1:text-neutral-200",
  "prose-h2:scroll-mt-24 prose-h2:text-2xl prose-h2:font-semibold prose-h2:leading-6 prose-h2:tracking-tight prose-h2:text-neutral-200 ",
  "prose-h3:scroll-mt-24 prose-h3:text-xl prose-h3:font-medium prose-h3:text-neutral-200",
  "prose-h4:scroll-mt-24 prose-h4:text-lg prose-h4:font-medium prose-h4:text-neutral-200",
  "prose-h5:scroll-mt-24 prose-h5:text-base prose-h5:font-medium prose-h5:tracking-wide prose-h5:text-neutral-200",
  "prose-h6:scroll-mt-24 prose-h6:text-base prose-h6:font-medium prose-h6:text-neutral-200",
  "prose-p:font-normal prose-p:text-neutral-200",
  "prose-strong:font-semibold prose-strong:text-neutral-200",
]);

const listStyles = cn([
  "prose-li:text-neutral-200 marker:text-neutral-300",
  "prose-ul:list-disc prose-ul:space-y-2",
  "prose-ol:list-num prose-ol:space-y-2 ",
]);

const codeStyles = cn([
  "prose-pre:font-geist-mono",
  "prose-pre:my-0",
  "prose-code:bg-neutral-900 prose-code:font-geist-mono prose-code:font-light prose-code:text-neutral-400",
]);

const articleStyles = cn([
  "prose-a:underline-offset-4",
  "prose-a:font-normal prose-a:text-neutral-300 hover:prose-a:decoration-wavy hover:prose-a:bg-devhaven-500 hover:prose-a:text-black",
]);
