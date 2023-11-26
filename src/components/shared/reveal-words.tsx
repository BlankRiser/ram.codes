import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

type RevealWordsProps = {
  sentence: string;
};

export const RevealWords: React.FC<RevealWordsProps> = ({ sentence }) => {
  const senntenceContainer = useRef<React.ElementRef<"div">>(null);
  const isInView = useInView(senntenceContainer);
  return (
    <div ref={senntenceContainer}>
      {sentence.split(" ").map((word, index) => {
        return (
          <span key={index} className="relative inline-flex overflow-hidden">
            <motion.span
              variants={slideUp}
              custom={index}
              animate={isInView ? "open" : "closed"}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </div>
  );
};

export const slideUp = {
  initial: {
    y: "100%",
  },
  open: (i: number) => ({
    y: "0%",
    transition: { duration: 0.5, delay: 0.01 * i },
  }),
  closed: {
    y: "100%",
    transition: { duration: 0.5 },
  },
};

export const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};
