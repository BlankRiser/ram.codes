import React from "react";
import { motion } from "framer-motion";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <span className="whitespace-nowrap">{children}</span>;
};

const tagMap = ["p", "h1", "h2", "h3", "h4", "h5", "span"] as const;

const item = {
  hidden: {
    y: "200%",
    // transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 1 },
  },
  visible: {
    y: 0,
    transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 0.75 },
  },
};

export function RevealText(props: {
  text: string;
  type: (typeof tagMap)[number];
  style?: React.CSSProperties;
  className?: string;
  color?: string;
}) {
  const { text, type, style, className, color, ...rest } = props;
  // Framer Motion variant object, for controlling animation

  //  Split each word of props.text into an array
  const splitWords = text.split(" ");

  // Create storage array
  const words: Array<string[]> = [];

  // Push each word into words array
  for (const item of splitWords) {
    words.push(item.split(""));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word) => {
    return word.push("\u00A0");
  });

  // Get the tag name from tagMap
  const Tag: keyof JSX.IntrinsicElements = type;

  return (
    <motion.div
      className="text-center"
      initial="hidden"
      // animate="visible"
      animate={"visible"}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.025,
          },
        },
      }}
    >
      <Tag>
        {words.map((word, index) => {
          return (
            // Wrap each word in the Wrapper component
            <Wrapper key={index}>
              {words[index].flat().map((element, index) => {
                return (
                  <span
                    style={{
                      overflow: "hidden",
                      display: "inline-block",
                    }}
                    key={index}
                  >
                    <motion.span
                      className={className}
                      style={{ ...style, display: "inline-block" }}
                      variants={item}
                    >
                      {element}
                    </motion.span>
                  </span>
                );
              })}
            </Wrapper>
          );
        })}
      </Tag>
    </motion.div>
  );
}
