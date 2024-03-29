import { cn } from "~/utils/text-transforms";

const marqueeStyles = {
  common: "whitespace-nowrap select-none",
  animate: "animate-marquee",
  animateReverse: "absolute top-0 animate-marqueeReverse",
};

type MarqueeProps = { children: React.ReactNode; speed?: number };

export const Marquee: React.FC<MarqueeProps> = ({ children, speed = 40 }) => {
  const marqueeSpeedClass = `--hover:[--marquee-speed:${speed}s]`;
  return (
    <div
      className={cn([
        " relative flex w-[calc(100vw-4px)] overflow-x-hidden",
        marqueeSpeedClass,
      ])}
      style={
        {
          WebkitMask:
            "linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent)",
        } as React.CSSProperties
        // '--marquee-speed': `${speed}s`,
      }
    >
      <div className={cn([marqueeStyles.common, marqueeStyles.animate])}>
        {children}
      </div>
      <div className={cn([marqueeStyles.common, marqueeStyles.animateReverse])}>
        {children}
      </div>
    </div>
  );
};
