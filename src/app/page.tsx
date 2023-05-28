"use client";

import { useRef } from "react";
import Particles from "~/components/ui/patterns";
import { ibmPlexSans, spaceGrotesk } from "~/utils/fonts";
import { RevealText } from "~/components/shared/reveal-text";
import { FadeInText } from "~/components/shared/fadein-text";

export default function Home() {
  const divRef = useRef<HTMLDivElement>(null);
  return (
    <div className={``}>
      <section
        ref={divRef}
        className="h-[calc(100vh-56px)] relative flex  justify-center items-center flex-col "
      >
        <RevealText
          className="text-5xl md:text-7xl lg:text-8xl font-medium py-4 leading-[0.5]"
          color={"#000"}
          style={{
            fontFamily: spaceGrotesk.style.fontFamily,
          }}
          text={"Ram Shankar Choudhary"}
          type="h1"
        />
        <FadeInText
          text={"A CREATIVE DEVELOPER"}
          className={`${ibmPlexSans.className} text-2xl `}
        />
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
      </section>
      <div className=" min-h-screen bg-stone-900">red</div>
      <div className=" min-h-screen bg-stone-900">yellow</div>
    </div>
  );
}
