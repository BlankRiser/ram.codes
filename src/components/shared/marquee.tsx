import React from "react";
const marqueeStyles = {
  common: "whitespace-nowrap select-none",
  animate: "animate-marquee",
  animateReverse: "absolute top-0 animate-marqueeReverse",
};

export function Marquee({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative flex overflow-x-hidden w-[calc(100vw-4px)]"
      style={{
        WebkitMask:
          "linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent)",
      }}
    >
      <div className={[marqueeStyles.common, marqueeStyles.animate].join(" ")}>
        {children}
      </div>
      <div
        className={[marqueeStyles.common, marqueeStyles.animateReverse].join(
          " "
        )}
      >
        {children}
      </div>
    </div>
  );
}
