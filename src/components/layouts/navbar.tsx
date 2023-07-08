"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LINKS } from "~/constants/links";

export function Navbar() {
  return (
    <motion.header

      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className={" w-full z-50  px-4 fixed top-0"} // backdrop-blur-md
    >
      <div className={"max-w-7xl mx-auto py-4"}>
        <nav className={`flex justify-between items-center h-full `}>
          <a href={LINKS.HOME} className={"font-semibold"}>Ram Shankar</a>
          <ul className="flex items-center gap-4 justify-between">
            <Link href={LINKS.HOME}>Blog</Link>
            <Link href={LINKS.WORK}>Work</Link>
          </ul>
          <a href="mailto:ram.codes@gmail.com">ram.codes@gmail.com</a>
        </nav>
      </div>
    </motion.header>
  );
}
