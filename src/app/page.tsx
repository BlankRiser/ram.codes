"use client";

import * as React from "react";
import Hero from "~/components/pages/home/hero";
import { Projects } from "~/components/pages/home/projects";
import { TechMarquee } from "~/components/shared/tech-marquee";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <TechMarquee />

      {/* <div className="mt-8 px-2 md:px-8">
        <Projects />
      </div> */}
    </React.Fragment>
  );
}
