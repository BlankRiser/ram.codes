"use client";

import * as SliderPrimitive from "@radix-ui/react-dialog";
import * as React from "react";

import { Cross2Icon } from "@radix-ui/react-icons";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/utils/text-transforms";

const Slider = SliderPrimitive.Root;

const SliderTrigger = SliderPrimitive.Trigger;

const SliderClose = SliderPrimitive.Close;

const SliderPortal = SliderPrimitive.Portal;

const SliderOverlay = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/90 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
));
SliderOverlay.displayName = SliderPrimitive.Overlay.displayName;

const sliderVariants = cva(
  "fixed z-50 gap-4 bg-neutral-950 p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b border-neutral-800 data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t border-neutral-800 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r border-neutral-800 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l border-neutral-800 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },

    defaultVariants: {
      side: "right",
    },
  }
);

interface SliderContentProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Content>,
    VariantProps<typeof sliderVariants> {}

const SliderContent = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Content>,
  SliderContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SliderPortal>
    <SliderOverlay />
    <SliderPrimitive.Content
      ref={ref}
      className={cn(sliderVariants({ side }), className)}
      {...props}
    >
      {children}
      <SliderPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-neutral-950 transition-opacity hover:opacity-100 focus:outline-none focus:ring-1 focus:ring-devhaven-500 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <Cross2Icon className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SliderPrimitive.Close>
    </SliderPrimitive.Content>
  </SliderPortal>
));
SliderContent.displayName = SliderPrimitive.Content.displayName;

const SliderHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
SliderHeader.displayName = "SheetHeader";

const SliderFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
SliderFooter.displayName = "SheetFooter";

const SliderTitle = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
));
SliderTitle.displayName = SliderPrimitive.Title.displayName;

const SliderDescription = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
SliderDescription.displayName = SliderPrimitive.Description.displayName;

export {
  Slider,
  SliderClose,
  SliderContent,
  SliderDescription,
  SliderFooter,
  SliderHeader,
  SliderOverlay,
  SliderPortal,
  SliderTitle,
  SliderTrigger,
};
