"use client";

import { ContactMe } from "../shared/contact-me";

export function Footer() {
  return (
    <footer className={`z-0 w-full bg-green-300`}>
      <h1 className={"text-7xl text-black"}>footer</h1>
      <ContactMe />
    </footer>
  );
}
