'use client';

import { FadeInText, RevealCharacter } from "~/components/shared";
import { Particles } from "~/components/ui";
import { generalSans, spaceGrotesk } from "~/utils/fonts";

type Props = {};

export default function Hero({ }: Props) {
  return (
    <section className="relative flex h-[calc(100vh-56px)] flex-col items-center justify-center">
      <Particles className="absolute inset-0 -z-10 " quantity={100} />
      <RevealCharacter
        className="pointer-events-none select-none py-4 font-spaceGrotesk text-5xl font-medium leading-[0.5] md:text-7xl lg:text-8xl"
        color={"#000"}
        text={"Ram Shankar Choudhary"}
        type="h1"
      />
      <FadeInText
        text={"SOFTWAR ENGINEER"}
        className={`pointer-events-none select-none font-generalSans text-2xl font-light tracking-widest `}
      />
    </section>
  );
}


