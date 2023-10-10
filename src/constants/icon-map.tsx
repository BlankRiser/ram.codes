import { SiApacheecharts, SiFramer, SiMaterialdesign, SiMui, SiNextdotjs, SiPython, SiReact, SiReacthookform, SiReactquery, SiSwc, SiTailwindcss, SiTypescript, SiVite } from "@icons-pack/react-simple-icons";
import { cn } from "~/utils/text-transforms";

const defaultStyle = cn('transition-[fill] ease-in-out duration-300 fill-neutral-600 hover:fill-neutral-300')

// !FIXEME: If I don't change the fill icon individually later, use defaultStyle for fill as well 

export const ICONMAP = {
  react: <SiReact title='React' size={28} color='default'  />,
  tailwind: <SiTailwindcss title="TailwindCSS" size={28} color='default'  />,
  'framer-motion': <SiFramer title="Framer Motion" size={28} color='default'  />,
  'next': <SiNextdotjs title="NextJS" size={28} color='white'  />,
  typescript: <SiTypescript title="Typescript" size={28} color='default'  />,
  vite: <SiVite title="Typescript" size={28} color='default'  />,
  'react-query': <SiReactquery title="Typescript" size={28} color='default'  />,
  'react-hook-form': <SiReacthookform title="Typescript" size={28} color='default'  />,
  'swc': <SiSwc  title="Typescript" size={28} color='default'  />,
  'material-ui': <SiMui  title="Typescript" size={28} color='default'  />,
  'echarts': <SiApacheecharts  title="Typescript" size={28} color='default'  />,
  'python': <SiPython  title="Python" size={28} color='default'  />,
}
