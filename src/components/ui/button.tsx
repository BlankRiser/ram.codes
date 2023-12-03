import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '~/utils/text-transforms';

const buttonVariants = cva(
  'inline-flex w-fit select-none items-center justify-center transition-colors duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-devhaven-500 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-neutral-200 text-neutral-900 shadow hover:bg-devhaven-100/90 active:bg-devhaven-100/80',
        primary:
          'bg-neutral-200 text-neutral-900 shadow hover:bg-neutral-200/90 active:bg-neutral-200/70',
        link: 'text-primary underline-offset-4 hover:underline',
        outline:
          'border border-neutral-700 hover:border-neutral-800 hover:bg-neutral-900 active:bg-neutral-800',
        ghost: 'bg-transparent hover:bg-neutral-900 active:bg-neutral-800',
      },
      size: {
        default: 'h-9 px-4 py-2 text-sm font-medium',
        sm: 'h-8 px-3 text-xs',
        lg: 'px-8 py-4 font-semibold',
        icon: 'h-9 w-9',
      },
      rounded: {
        default: 'rounded-md',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      rounded: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
