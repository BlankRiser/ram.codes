/* @ts-ignore */
import {
  SiAmazonwebservices,
  SiAmazonec2,
  SiAmazons3,
  SiApacheecharts,
  SiAstro,
  SiCreatereactapp,
  SiCss3,
  SiExpress,
  SiFramer,
  SiGoogledrive,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMapbox,
  SiMui,
  SiNextdotjs,
  SiNginx,
  SiPostgresql,
  SiPython,
  SiRadixui,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiRemix,
  SiStripe,
  SiSwr,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiZod,
} from '@icons-pack/react-simple-icons';
import { cn } from '~/utils/text-transforms';

const defaultStyle = cn(
  'transition-[fill] ease-in-out duration-300 hover:fill-neutral-600',
);

const defaultProps = {
  size: 28,
  color: 'default',
};

export const ICONMAP = {
  react: <SiReact {...defaultProps} className={defaultStyle} />,
  tailwind: <SiTailwindcss {...defaultProps} className={defaultStyle} />,
  javascript: (
    <SiJavascript
      {...defaultProps}
      data-title='Python'
      className={defaultStyle}
    />
  ),
  'framer-motion': (
    <SiFramer
      {...defaultProps}
      data-title='Framer Motion'
      className={defaultStyle}
    />
  ),
  next: (
    <SiNextdotjs
      {...defaultProps}
      data-title='NextJS'
      size={28}
      color='white'
      className={defaultStyle}
    />
  ),
  typescript: (
    <SiTypescript
      {...defaultProps}
      data-title='Typescript'
      className={defaultStyle}
    />
  ),
  vite: <SiVite {...defaultProps} data-title='Vite' className={defaultStyle} />,
  'react-query': (
    <SiReactquery
      {...defaultProps}
      data-title='React Query'
      className={defaultStyle}
    />
  ),
  'create-react-app': (
    <SiCreatereactapp
      {...defaultProps}
      data-title='Create React App'
      className={defaultStyle}
    />
  ),
  'react-hook-form': (
    <SiReacthookform
      {...defaultProps}
      data-title='React Hook Form'
      className={defaultStyle}
    />
  ),
  swr: (
    <SiSwr
      {...defaultProps}
      data-title='SWC'
      color='white'
      className={defaultStyle}
    />
  ),
  'material-ui': (
    <SiMui
      {...defaultProps}
      data-title='Material UI'
      className={defaultStyle}
    />
  ),
  'radix-ui': (
    <SiRadixui
      {...defaultProps}
      data-title='Radix UI'
      size={28}
      color='white'
      className={defaultStyle}
    />
  ),
  echarts: (
    <SiApacheecharts
      {...defaultProps}
      data-title='Apache Echarts'
      className={defaultStyle}
    />
  ),
  mapbox: (
    <SiMapbox
      {...defaultProps}
      data-title='Mapbox'
      color='white'
      className={defaultStyle}
    />
  ),
  nginx: (
    <SiNginx
      {...defaultProps}
      data-title='NGINX'
      color='white'
      className={defaultStyle}
    />
  ),
  zod: (
    <SiZod
      {...defaultProps}
      data-title='Zod'
      color='white'
      className={defaultStyle}
    />
  ),
  remix: (
    <SiRemix {...defaultProps} data-title='RemixJs' className={defaultStyle} />
  ),
  astro: (
    <SiAstro {...defaultProps} data-title='AstroJs' className={defaultStyle} />
  ),
  stripe: (
    <SiStripe {...defaultProps} data-title='Stripe' className={defaultStyle} />
  ),
  python: (
    <SiPython {...defaultProps} data-title='Python' className={defaultStyle} />
  ),
  express: (
    <SiExpress
      {...defaultProps}
      data-title='ExpressJs'
      color='white'
      className={defaultStyle}
    />
  ),
  aws: (
    <SiAmazonwebservices {...defaultProps} data-title='AWS' className={defaultStyle} />
  ),
  'postgres-sql': (
    <SiPostgresql
      {...defaultProps}
      data-title='Postgres SQL'
      className={defaultStyle}
    />
  ),
  'simple storage service (s3)': (
    <SiAmazons3 {...defaultProps} data-title='S3' className={defaultStyle} />
  ),
  'elastic cloud compute (ec2)': (
    <SiAmazonec2 {...defaultProps} data-title='EC2' className={defaultStyle} />
  ),
  html: (
    <SiHtml5 {...defaultProps} data-title='HTML' className={defaultStyle} />
  ),
  CSS: <SiCss3 {...defaultProps} data-title='CSS' className={defaultStyle} />,
  'google-drive-api': (
    <SiGoogledrive
      {...defaultProps}
      data-title='Google Drive API'
      className={defaultStyle}
    />
  ),
  graphql: (
    <SiGraphql
      {...defaultProps}
      data-title='GraphQL'
      className={defaultStyle}
    />
  ),
};
