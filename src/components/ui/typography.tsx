import { VariantProps, cva } from "class-variance-authority";
import { ElementType, ReactNode, ComponentProps } from "react";
import { Balancer } from "react-wrap-balancer";
import { generalSans, inter, jetBrainsMono, spaceGrotesk } from "~/utils/fonts";

const typography = cva("", {
  variants: {
    intent: {
      h1: ["text-8xl ", "font-bold "],
      h2: ["text-7xl", "font-bold "],
      h3: ["text-6xl", "font-bold "],
      h4: ["text-5xl", "font-bold "],
      h5: ["text-4xl", "font-bold "],
      h6: ["text-3xl", "font-bold "],
      subtitle1: ["text-2xl", "font-bold "],
      subtitle2: ["text-xl", "font-bold "],
      body1: ["text-lg", "font-normal "],
      body2: ["text-base", "font-normal "],
      button: ["text-base", "font-bold "],
      caption: ["text-sm", "font-normal "],
      overline: ["text-xs", "font-normal "],
    },
    font: {
      inter: ["font-sans", inter.className],
      spaceGrotesk: ["font-spaceGrotesk", spaceGrotesk.className],
      jetBrainsMono: ["font-mono", jetBrainsMono.className],
      generalSans: ["font-generalSans", generalSans.className],
    },
    gradient: {
      none: "",
      "blue-green":
        "bg-gradient-to-r from-blue-400 to-green-500 text-transparent bg-clip-text",
      "indigo-sky-emerald":
        "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text",
      green:
        "bg-gradient-to-br from-green-500 from-10% via-emerald-500 via-30% to-teal-500 to-70% text-transparent bg-clip-text",
    },
  },
  defaultVariants: {
    intent: "body1",
    font: "inter",
  },
});

type props = {
  isGradient?: boolean;
};

type TypographyProps<T extends ElementType = "p"> = {
  as?: T | keyof JSX.IntrinsicElements;
  children: ReactNode;
} & Omit<ComponentProps<T>, "as"> &
  VariantProps<typeof typography> &
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
      className={typography({
        intent,
        font,
        gradient,
        className: rest.className,
      })}
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
