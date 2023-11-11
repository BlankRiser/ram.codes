"use client";

import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "iconoir-react";
import { useCallback, useEffect, useState } from "react";
import { cn } from "~/utils/text-transforms";

const images = ["/ktrlawfirm/og.png", "/opspod/og.png", "/potion/og.png"];

type NextPublicImageType = `/${string}`;

type ImageCarouselProps = {
  images: NextPublicImageType[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
};

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoPlay,
  autoPlayInterval = 5000,
}) => {
  const [current, setCurrent] = useState(0);
  const [isFocus, setIsFocus] = useState(false);

  const onPrevClick = useCallback(() => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  }, [current]);

  const onNextClick = useCallback(() => {
    if (current < images.length - 1) {
      setCurrent(current + 1);
    }
  }, [current, images.length]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        onPrevClick();
      } else if (e.key === "ArrowRight") {
        onNextClick();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [current, onNextClick, onPrevClick]);

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        if (current < images.length - 1) {
          setCurrent(current + 1);
        } else {
          setCurrent(0);
        }
      }, autoPlayInterval);

      return () => {
        clearInterval(interval);
      };
    }
  }, [autoPlay, autoPlayInterval, current, images.length]);

  return (
    <div className="flex min-h-screen max-w-[100vw] flex-col items-center justify-between overflow-x-hidden p-24">
      <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
        <div className="relative flex w-full max-w-[1500px] items-center">
          {/* Left/right controls */}
          <AnimatePresence>
            {isFocus && (
              <motion.div
                className="absolute inset-x-4 z-10 flex justify-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onHoverStart={() => setIsFocus(true)}
                onHoverEnd={() => setIsFocus(false)}
              >
                <button onClick={onPrevClick} disabled={current === 0}>
                  <ArrowLeft
                    className={cn(["h-4 w-4", current === 0 && "opacity-20"])}
                  />
                </button>
                <button
                  onClick={onNextClick}
                  disabled={current === images.length - 1}
                >
                  <ArrowRight
                    className={cn([
                      "h-4 w-4",
                      current === images.length - 1 && "opacity-20",
                    ])}
                  />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          {/* List of images */}
          <motion.div
            className="flex flex-nowrap gap-4"
            animate={{ x: `calc(-${current * 100}% - ${current}rem)` }}
            onHoverStart={() => setIsFocus(true)}
            onHoverEnd={() => setIsFocus(false)}
          >
            {[...images].map((image, idx) => (
              <motion.img
                key={idx}
                src={image}
                alt={image}
                animate={{ opacity: idx === current ? 1 : 0.3 }}
                className="aspect-[16/9] object-cover"
              />
            ))}
          </motion.div>
          {/* Controll pill */}
          <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2">
            <div className="flex gap-3 rounded-full bg-neutral-900 px-3 py-2 opacity-80">
              {[...images].map((_, idx) => (
                <button key={idx} onClick={() => setCurrent(idx)}>
                  <span
                    className={cn([
                      "block h-2 w-2 rounded-full",
                      idx === current ? "bg-white" : "bg-neutral-600",
                    ])}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </MotionConfig>
    </div>
  );
};
