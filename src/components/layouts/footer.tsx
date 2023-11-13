"use client";

import {
  SiGithub,
  SiLinkedin,
  SiTwitter,
  SiX,
} from "@icons-pack/react-simple-icons";
import { ContactMe } from "../shared/contact-me";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export function Footer() {
  return (
    <footer className="z-0 mt-4 w-full border-t border-t-neutral-900 bg-neutral-950 shadow-2xl shadow-neutral-900 md:mt-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-2 py-16 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="space-y-6 ">
          <div className="flex max-w-3xl flex-col gap-4">
            <h3 className="font-space-grotesk text-4xl font-bold text-neutral-300 md:text-7xl md:leading-[5rem]">
              Ram Shankar <br />
              Choudhary
            </h3>
            <p className="font-geist-sans text-lg font-normal leading-snug text-neutral-300 md:text-2xl">
              <Balancer>
                I&apos;m always open to new opportunities and connections.
                Whether you have a project you&apos;d like to discuss, want to
                share your work, or just say hi — please don&apos;t hesitate to
                reach out.
              </Balancer>
            </p>
          </div>
          <ContactMe />
        </div>

        <div className="flex flex-col gap-2 text-neutral-300 md:items-end md:gap-6 [&>a]:font-geist-mono [&>a]:uppercase [&>a]:tracking-widest">
          <a href="" target="_blank" rel="noopener noreferrer">
            Github
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            Medium
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            Dev.to
          </a>
        </div>
      </div>
    </footer>
  );
}
