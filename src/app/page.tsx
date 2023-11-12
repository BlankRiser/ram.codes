"use client";

import * as React from "react";
import { Footer } from "~/components/layouts";
import Hero from "~/components/pages/home/hero";
import { ImageCarousel } from "~/components/shared/image-carousel";
import { TechMarquee } from "~/components/shared/tech-marquee";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <TechMarquee />
      <ImageCarousel
        images={["/ktrlawfirm/og.png", "/opspod/og.png", "/potion/og.png"]}
      />
      {/* <div className='mt-8 px-2 md:px-8'>
				<Projects />
			</div> */}
    </React.Fragment>
  );
}
