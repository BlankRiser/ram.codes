import { SiApacheecharts, SiAstro, SiExpress, SiFramer, SiJavascript, SiMapbox, SiMui, SiNextdotjs, SiNginx, SiPython, SiRadixui, SiReact, SiReacthookform, SiReactquery, SiRemix, SiStripe, SiSwr, SiTailwindcss, SiTypescript, SiVite, SiZod } from "@icons-pack/react-simple-icons";
import { cn } from "~/utils/text-transforms";

const defaultStyle = cn('transition-[fill] ease-in-out duration-300 fill-neutral-600 hover:fill-neutral-300')

// !FIXEME: If I don't change the fill icon individually later, use defaultStyle for fill as well 

const defaultProps = {
  size: 28,
  color: 'default'
}

export const ICONMAP = {
  react: <SiReact {...defaultProps} title='React'   />,
  tailwind: <SiTailwindcss {...defaultProps} title="TailwindCSS"   />,
  'javascript': <SiJavascript {...defaultProps} title="Python"   />,
  'framer-motion': <SiFramer {...defaultProps} title="Framer Motion"   />,
  'next': <SiNextdotjs {...defaultProps} title="NextJS" size={28} color='white'  />,
  typescript: <SiTypescript {...defaultProps} title="Typescript"   />,
  vite: <SiVite {...defaultProps} title="Vite"   />,
  'react-query': <SiReactquery {...defaultProps} title="React Query"   />,
  'react-hook-form': <SiReacthookform {...defaultProps} title="React Hook Form"   />,
  'swr': <SiSwr {...defaultProps}  title="SWC"  color='white' />,
  'material-ui': <SiMui {...defaultProps}  title="Material UI"   />,
  'radix-ui': <SiRadixui {...defaultProps}  title="Radix UI" size={28} color='white'  />,
  'echarts': <SiApacheecharts {...defaultProps}  title="Apache Echarts"   />,
  'mapbox': <SiMapbox {...defaultProps} title="Mapbox" color='white' />,
  'nginx': <SiNginx {...defaultProps} title="NGINX" color='white' />,
  'zod': <SiZod {...defaultProps} title="Zod" color='white' />,
  'remix': <SiRemix {...defaultProps} title="RemixJs"  />,
  'astro': <SiAstro {...defaultProps} title="AstroJs"  />,
  'stripe': <SiStripe {...defaultProps} title="Stripe" />,
  'python': <SiPython {...defaultProps} title="Python" />,
  'express': <SiExpress {...defaultProps} title="ExpressJs" color='white' />,
}
