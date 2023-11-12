import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { cn } from "~/utils/text-transforms";

const inputVariants = cva(
  "flex rounded-md bg-transparent ring-offset-transparent file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-600  disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-transparent",
      },
      inputSize: {
        default: "h-10 w-full px-3 py-2 text-sm",
        sm: "h-8 w-full px-3 py-2 text-sm",
        lg: "w-full px-2 py-1 text-sm",
      },
      border: {
        true: "border border-neutral-800",
      },
      focus: {
        true: "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-1",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
      border: true,
      focus: true,
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, border, focus, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          inputVariants({
            className,
            border: border,
            focus: focus,
          }),
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
