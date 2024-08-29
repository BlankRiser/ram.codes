'use client';

import { Check, Copy } from 'iconoir-react';
import {
  ButtonHTMLAttributes,
  forwardRef,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  useCallback,
  useRef,
} from 'react';
import { buttonVariants } from '~/components/ui';
import {
  ScrollArea,
  ScrollBar,
  ScrollViewport,
} from '~/components/ui/scroll-area';
import { useCopyButton } from '~/hooks/use-copy-button';
import { cn } from '~/utils/text-transforms';

export const Pre = forwardRef<HTMLPreElement, HTMLAttributes<HTMLPreElement>>(
  ({ className, ...props }, ref) => {
    return (
      <pre ref={ref} className={cn('max-h-[400px]', className)} {...props}>
        {props.children}
      </pre>
    );
  },
);

export type CodeBlockProps = HTMLAttributes<HTMLElement> & {
  icon?: ReactNode;
  allowCopy?: boolean;
};

Pre.displayName = 'Pre';

export const CodeBlock = forwardRef<HTMLElement, CodeBlockProps>(
  ({ title, allowCopy = true, icon, className, ...props }, ref) => {
    const areaRef = useRef<HTMLDivElement>(null);
    const onCopy = useCallback(() => {
      const pre = areaRef.current?.getElementsByTagName('pre').item(0);

      if (!pre) return;

      const clone = pre.cloneNode(true) as HTMLElement;
      clone.querySelectorAll('.nd-copy-ignore').forEach((node) => {
        node.remove();
      });

      void navigator.clipboard.writeText(clone.textContent ?? '');
    }, []);

    return (
      <figure ref={ref} className={cn(className)} {...props}>
        {title ? (
          <div className='flex flex-row items-center gap-2 border-b px-4 py-1.5'>
            {icon ? (
              <div
                className='[&_svg]:size-3.5'
                {...(typeof icon === 'string'
                  ? {
                      dangerouslySetInnerHTML: { __html: icon },
                    }
                  : {
                      children: icon,
                    })}
              />
            ) : null}
            <figcaption className='flex-1 truncate'>{title}</figcaption>
            {allowCopy ? (
              <CopyButton className='-me-2' onCopy={onCopy} />
            ) : null}
          </div>
        ) : (
          allowCopy && (
            <CopyButton
              className='absolute right-2 top-2 z-[2] backdrop-blur-sm'
              onCopy={onCopy}
            />
          )
        )}
        <ScrollArea ref={areaRef} dir='ltr'>
          <ScrollViewport className='font-geist-mono'>
            {props.children}
          </ScrollViewport>
          <ScrollBar orientation='horizontal' />
        </ScrollArea>
      </figure>
    );
  },
);

CodeBlock.displayName = 'CodeBlock';

function CopyButton({
  className,
  onCopy,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  onCopy: () => void;
}): ReactElement {
  const [checked, onClick] = useCopyButton(onCopy);

  return (
    <button
      type='button'
      className={cn(
        buttonVariants({
          variant: 'ghost',
          size: 'sm',
          className: 'transition-all group-hover:opacity-100',
        }),
        !checked && 'opacity-0',
        className,
      )}
      aria-label='Copy Text'
      onClick={onClick}
      {...props}
    >
      <Check
        className={cn('size-3.5 transition-transform', !checked && 'scale-0')}
      />
      <Copy
        className={cn(
          'absolute size-3.5 transition-transform',
          checked && 'scale-0',
        )}
      />
    </button>
  );
}
