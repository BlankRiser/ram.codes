"use client";

import {
  SiGithub,
  SiLinkedin,
  SiMedium,
  SiTwitter,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { SOCIALS } from "~/constants/me";
import { ContactMe } from "../shared/contact-me";
import { Divider } from "../ui";
import { cn } from "~/utils/text-transforms";

export const SOCIALS_MAP = SOCIALS.reduce((acc, curr) => {
  acc[curr.name] = curr.link;
  return acc;
}, {} as Record<(typeof SOCIALS)[number]["name"], string>);

export function Footer() {
  return (
    <footer className="z-0 mt-4 w-full shadow-neutral-900 md:mt-16">
      <Divider className="my-0" />
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-2 py-16 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="space-y-6 ">
          <div className="flex max-w-3xl flex-col gap-4">
            <h3 className="font-space-grotesk text-4xl font-bold text-neutral-300 md:text-7xl md:leading-[5rem]">
              Ram Shankar <br />
              Choudhary
            </h3>
            <p className="font-geist-sans text-lg font-normal leading-snug text-neutral-300 md:text-xl">
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

        <div
          className={cn([
            "hidden text-neutral-300 md:flex md:flex-col md:items-end md:gap-6 [&>a]:font-geist-mono [&>a]:uppercase [&>a]:tracking-widest",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-devhaven-500",
          ])}
        >
          <a
            href={SOCIALS_MAP.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={SOCIALS_MAP.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href={SOCIALS_MAP.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href={SOCIALS_MAP.medium}
            target="_blank"
            rel="noopener noreferrer"
          >
            Medium
          </a>
        </div>
        <div className="flex items-center gap-4 md:hidden">
          <Link href={SOCIALS_MAP.linkedin}>
            <SiLinkedin className="h-8 w-8 text-neutral-100 hover:text-devhaven-500 active:text-devhaven-600" />
          </Link>
          <Link href={SOCIALS_MAP.github}>
            <SiGithub className="h-8 w-8 text-neutral-100 hover:text-devhaven-500 active:text-devhaven-600" />
          </Link>
          <Link href={SOCIALS_MAP.twitter}>
            <SiTwitter className="h-8 w-8 text-neutral-100 hover:text-devhaven-500 active:text-devhaven-600" />
          </Link>
          <Link href={SOCIALS_MAP.medium}>
            <SiMedium className="h-8 w-8 text-neutral-100 hover:text-devhaven-500 active:text-devhaven-600" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
