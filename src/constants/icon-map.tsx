import { SiAmazonaws, SiAmazonec2, SiAmazons3, SiApacheecharts, SiAstro, SiCreatereactapp, SiCss3, SiExpress, SiFramer, SiHtml5, SiJavascript, SiMapbox, SiMui, SiNextdotjs, SiNginx, SiPostgresql, SiPython, SiRadixui, SiReact, SiReacthookform, SiReactquery, SiRemix, SiStripe, SiSwr, SiTailwindcss, SiTypescript, SiVite, SiZod } from "@icons-pack/react-simple-icons";
import { cn } from "~/utils/text-transforms";

const defaultStyle = cn('transition-[fill] ease-in-out duration-300 hover:fill-neutral-600')

const defaultProps = {
  size: 28,
  color: 'default'
}

export const ICONMAP = {
  react: <SiReact {...defaultProps} title='React'   className={defaultStyle} />,
  tailwind: <SiTailwindcss {...defaultProps} title="TailwindCSS"   className={defaultStyle} />,
  'javascript': <SiJavascript {...defaultProps} title="Python"   className={defaultStyle} />,
  'framer-motion': <SiFramer {...defaultProps} title="Framer Motion"   className={defaultStyle} />,
  'next': <SiNextdotjs {...defaultProps} title="NextJS" size={28} color='white'  className={defaultStyle} />,
  typescript: <SiTypescript {...defaultProps} title="Typescript"   className={defaultStyle} />,
  vite: <SiVite {...defaultProps} title="Vite"   className={defaultStyle} />,
  'react-query': <SiReactquery {...defaultProps} title="React Query"   className={defaultStyle} />,
  'create-react-app': <SiCreatereactapp {...defaultProps} title="Create React App"   className={defaultStyle} />,
  'react-hook-form': <SiReacthookform {...defaultProps} title="React Hook Form"   className={defaultStyle} />,
  'swr': <SiSwr {...defaultProps}  title="SWC"  color='white' className={defaultStyle} />,
  'material-ui': <SiMui {...defaultProps}  title="Material UI"   className={defaultStyle} />,
  'radix-ui': <SiRadixui {...defaultProps}  title="Radix UI" size={28} color='white'  className={defaultStyle} />,
  'echarts': <SiApacheecharts {...defaultProps}  title="Apache Echarts"   className={defaultStyle} />,
  'mapbox': <SiMapbox {...defaultProps} title="Mapbox" color='white' className={defaultStyle} />,
  'nginx': <SiNginx {...defaultProps} title="NGINX" color='white' className={defaultStyle} />,
  'zod': <SiZod {...defaultProps} title="Zod" color='white' className={defaultStyle} />,
  'remix': <SiRemix {...defaultProps} title="RemixJs"  className={defaultStyle} />,
  'astro': <SiAstro {...defaultProps} title="AstroJs"  className={defaultStyle} />,
  'stripe': <SiStripe {...defaultProps} title="Stripe" className={defaultStyle} />,
  'python': <SiPython {...defaultProps} title="Python" className={defaultStyle} />,
  'express': <SiExpress {...defaultProps} title="ExpressJs" color='white' className={defaultStyle} />,
  'aws': <SiAmazonaws {...defaultProps} title="AWS"  className={defaultStyle} />,
  'postgres-sql': <SiPostgresql {...defaultProps} title="Postgres SQL"  className={defaultStyle} />,
  'simple storage service (s3)': <SiAmazons3 {...defaultProps} title="S3"  className={defaultStyle} />,
  'elastic cloud compute (ec2)': <SiAmazonec2 {...defaultProps} title="EC2"  className={defaultStyle} />,
  'html': <SiHtml5 {...defaultProps} title="HTML"  className={defaultStyle} />,
  'CSS': <SiCss3 {...defaultProps} title="CSS"  className={defaultStyle} />,

}
