import { VariantProps, cva } from "class-variance-authority";
import { ElementType, ReactNode, ComponentProps } from "react";
import { Balancer } from "react-wrap-balancer";
import { generalSans, inter, jetBrainsMono, spaceGrotesk } from "~/utils/fonts";
import { cn } from "~/utils/text-transforms";

const typographyStyles = cva("", {
  variants: {
    intent: {
      h1: "text-4xl md:text-8xl font-semibold",
      h2: "text-3xl md:text-6xl font-semibold",
      h3: "text-2xl md:text-5xl font-semibold",
      h4: "text-xl md:text-4xl font-semibold",
      h5: "text-lg md:text-3xl font-semibold",
      h6: "text-base md:text-2xl font-semibold",
      base: "text-base md:text-lg font-normal",
      title: "text-xl md:text-4xl font-semibold md:leading-[1.125em] md:-tracking-tight ",
      subtitle: "text-lg md:text-xl font-normal",
      caption: "text-xs md:text-sm font-normal",
    },
    font: {
      inter: ["font-sans", inter.className],
      spaceGrotesk: ["font-spaceGrotesk", spaceGrotesk.className],
      jetBrainsMono: ["font-mono", jetBrainsMono.className],
      generalSans: ["font-generalSans", generalSans.className],
    },
    gradient: {
      none: "",
      gray: "bg-gradient-to-br from-white via-[#e9f5f2] to-[#354d4b] text-transparent bg-clip-text",
      "blue-green":
        "bg-gradient-to-r from-blue-400 to-green-500 text-transparent bg-clip-text",
      "indigo-sky-emerald":
        "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text",
      green:
        "bg-gradient-to-br from-green-500 from-10% via-emerald-500 via-30% to-teal-500 to-70% text-transparent bg-clip-text",
    },
  },
  defaultVariants: {
    intent: "base",
    font: "inter",
    gradient: "none",

  },
});

type props = {
  isGradient?: boolean;
};

type TypographyProps<T extends ElementType = "p"> = {
  as?: T | keyof JSX.IntrinsicElements;
  children: ReactNode;
} & Omit<ComponentProps<T>, "as"> &
  VariantProps<typeof typographyStyles> &
  props;

export function Typography<T extends ElementType = "p">({
  as: Component = "p",
  children,
  intent,
  font,
  gradient = "none",
  isGradient = false,
  ...rest
}: TypographyProps<T>) {
  return (
    <Component
      {...rest}
      className={cn(typographyStyles({
        intent,
        font,
        gradient,
        className: rest.className,
      }))}
      style={
        isGradient
          ? {
            backgroundImage:
              "radial-gradient(circle at 0 0,#f79393,#fee4a5 38%,#9ae8b0 75%,#5ba5d0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }
          : {}
      }
    >
      <Balancer>{children}</Balancer>
    </Component>
  );
}
