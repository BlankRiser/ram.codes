import { SiFramer, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from "@icons-pack/react-simple-icons";
import { cn } from "~/utils/text-transforms";

const defaultStyle = 'transition-[fill] ease-in-out duration-300'

// !FIXEME: If I don't change the fill icon individually later, use defaultStyle for fill as well 

export const ICONMAP = {
  react: <SiReact title='React' size={40} color='default' className={cn(`fill-neutral-600 hover:fill-neutral-300`, defaultStyle)} />,
  tailwind: <SiTailwindcss title="TailwindCSS" size={40} color='default' className={cn(`fill-neutral-600 hover:fill-neutral-300`, defaultStyle)} />,
  'framer-motion': <SiFramer title="Framer Motion" size={40} color='default' className={cn(`fill-neutral-600 hover:fill-neutral-300`, defaultStyle)} />,
  'next': <SiNextdotjs title="NextJS" size={40} color='default' className={cn(`fill-neutral-600 hover:fill-neutral-300`, defaultStyle)} />,
  typescript: <SiTypescript title="Typescript" size={40} color='default' className={cn(`fill-neutral-600 hover:fill-neutral-300`, defaultStyle)} />,
}
