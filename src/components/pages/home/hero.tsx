import React from "react";
import { FadeInText, RevealText } from "~/components/shared";
import { Particles } from "~/components/ui";
import { generalSans, ibmPlexSans, spaceGrotesk } from "~/utils/fonts";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section className="h-[calc(100vh-56px)] relative flex  justify-center items-center flex-col ">
      <RevealText
        className="text-5xl  md:text-7xl lg:text-8xl font-medium py-4 leading-[0.5]"
        color={"#000"}
        style={{
          fontFamily: spaceGrotesk.style.fontFamily,
        }}
        text={"Ram Shankar Choudhary"}
        type="h1"
      />
      <FadeInText
        text={"A CREATIVE DEVELOPER"}
        className={`${generalSans.className} font-semibold text-2xl `}
      />

      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
    </section>
  );
}
