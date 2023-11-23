"use client";

import { useTransform, useScroll, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { ICONMAP } from "~/constants/icon-map";
import { WORK } from "~/constants/work";
import { cn } from "~/utils/text-transforms";

type Work = (typeof WORK)[number];

export const WorkSmallCard: React.FC<Work> = ({
  description,
  role,
  technologies,
  url,
  year,
  brandClasses,
  company,
  image,
}) => {
  return (
    <motion.div
      id={company}
      className="sticky top-[5rem] grid grid-cols-2 border border-neutral-800 bg-neutral-950 p-2 md:rounded-[28px] md:p-4"
    >
      <span className="absolute left-[2rem] top-[-14px] max-w-fit rounded-md bg-neutral-800 px-3 py-1 text-sm text-neutral-400 ">
        {year}
      </span>
      <div className="flex w-full flex-col gap-4 py-8 pl-6">
        <div className="flex flex-col">
          <span className="font-space-grotesk text-3xl font-semibold text-neutral-300">
            {role}
          </span>
        </div>
        <p className="max-w-[40ch] text-center font-geist-sans text-lg text-neutral-300 md:text-left">
          {description}
        </p>
        <div className="mt-auto flex max-w-fit flex-wrap items-center justify-center gap-4">
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
            "grid min-h-[200px] md:min-h-[420px] w-full place-items-center rounded-[2rem] md:rounded-xl",
            brandClasses
          )}
        >
          <div className="relative h-full w-[200px] md:w-[400px]">
            <Image
              fill={true}
              fetchPriority="high"
              src={image}
              alt={company}
              className="pointer-events-none left-1/2 top-1/2 aspect-square w-96 select-none object-contain"
            />
          </div>
        </div>
      </a>
    </motion.div>
  );
};
