import { ReactNode } from "react";
import { cn } from "~/utils/text-transforms";

export interface BleedProps {
  full?: boolean;
  children: ReactNode;
}

const Bleed = ({ full, children }: BleedProps) => {
  return (
    <div
      className={cn([
        "relative mt-6",
        full ? "mx-[calc(-50vw+50%)]" : "-mx-6 md:-mx-8 2xl:-mx-24",
      ])}
    >
      {children}
    </div>
  );
};

export default Bleed;
