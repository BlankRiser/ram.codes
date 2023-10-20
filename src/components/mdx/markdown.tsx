import { useMDXComponent } from 'next-contentlayer/hooks';
import { cn } from '~/utils/text-transforms';

type MarkdownProps = { code: string };

export const Markdown: React.FC<MarkdownProps> = ({ code }) => {
	const Component = useMDXComponent(code);

	return (
		<article className={articleStyles}>
			<Component />
		</article>
	);
};


const articleStyles = cn([
  'prose prose-neutral dark:prose-invert ',
  'w-full min-w-full',
  'font-inter prose-pre:font-jet-mono',
  'prose-pre:my-0',
  'prose-a:underline-offset-4',
  'prose-h2:text-2xl prose-h2:font-semibold',
  'prose-blockquote:text-devhaven-500',
  'prose-code:bg-neutral-900 prose-code:font-jet-mono prose-code:font-normal',
  'prose-a:font-normal hover:prose-a:decoration-wavy hover:prose-a:text-devhaven-300',
  
])
