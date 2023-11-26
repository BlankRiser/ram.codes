import { Variants, motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { ElementRef, useEffect, useRef } from "react";
import Balancer from "react-wrap-balancer";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { ICONMAP } from "~/constants/icon-map";
import { WORK } from "~/constants/work";
import { cn } from "~/utils/text-transforms";

type Work = (typeof WORK)[number];

const variants: Variants = {
  hidden: {
    y: 10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const WorkCard: React.FC<Work> = ({
  description,
  role,
  technologies,
  url,
  year,
  brandClasses,
  company,
  image,
}) => {
  // const ref = useRef<ElementRef<"div">>(null);
  // const isInView = useInView(ref, { once: true });

  // const controls = useAnimation();

  // useEffect(() => {
  //   if (isInView) {
  //     controls.start("visible");
  //   }
  // }, [controls, isInView]);

  return (
    <motion.div
      // ref={ref}
      // variants={variants}
      // initial="hidden"
      // whileInView="visible"
      // viewport={{ once: true, amount: 0.8 }}
      // animate={controls}
      className="sticky top-[5rem] border-t border-neutral-700 bg-neutral-950 px-2 md:px-4"
    >
      <div className="grid w-full grid-cols-1 justify-between gap-y-5 py-8 md:grid-cols-3 md:gap-y-8">
        <div className="flex flex-col items-center gap-2 md:flex-row md:items-start md:gap-4">
          <span className="text-sm text-neutral-500">{year}</span>
          <span className="font-space-grotesk text-3xl font-semibold text-neutral-300">
            {role}
          </span>
        </div>
        <p className="max-w-[40ch] text-center font-geist-sans text-lg text-neutral-300 md:text-left">
          {description}
        </p>
        <div className="mx-auto flex max-w-[14rem] flex-wrap items-center justify-center gap-4 md:ml-auto md:items-start md:justify-end">
          {technologies.map((item) => {
            return (
              <Tooltip key={item} delayDuration={0}>
                <TooltipTrigger asChild>
                  {ICONMAP[item as keyof typeof ICONMAP]}
                </TooltipTrigger>
                <TooltipContent>
                  <p className="capitalize">{item}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </div>
      <a href={url} target="_blank" rel="noreferrer noopener">
        <div
          className={cn(
            "grid  min-h-[200px] md:min-h-[600px] w-full place-items-center rounded-[2rem] md:rounded-[6rem]",
            brandClasses
          )}
        >
          <div className="relative h-full w-[200px] md:w-[500px]">
            <Image
              fill={true}
              fetchPriority="high"
              src={image}
              alt={company}
              className="pointer-events-none left-1/2 top-1/2 w-full select-none object-contain"
            />
          </div>
        </div>
      </a>
    </motion.div>
  );
};
