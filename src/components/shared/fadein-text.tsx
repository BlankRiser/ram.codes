import { motion } from "framer-motion";
import React from "react";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.05,
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export function FadeInText(props: {
  text: string;
  style?: React.CSSProperties;
  className?: string;
  characterClassName?: string;
  color?: string;
}) {
  const { text, style, className, characterClassName } = props;

  return (
    <motion.div
      variants={sentence}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {text.split("").map((char, index) => {
        return (
          <motion.span
            key={index}
            variants={letter}
            style={style}
            className={characterClassName}
          >
            {char}
          </motion.span>
        );
      })}
    </motion.div>
  );
}
