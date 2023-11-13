import { Marquee } from "./marquee";
import { Divider } from "../ui";

const tech = [
  "TypeScript",
  "JavaScript",
  "Python",
  "SQL",

  "|",

  "ReactJs",
  "SolidJs",

  "|",

  "NextJs",
  "RemixJs",
  "AstroJs",

  "|",

  "AWS",
  "Digital Ocean",
  "Github Actions",

  "|",

  "HTML",
  "CSS",
  "SCSS",
  "TailwindCSS",
  "Chakra UI",
  "Panda CSS",
  "Mantine UI",
  "Material UI",

  "|",

  "Apache Echarts",
  "Highcharts",
  "ChartJs",

  "|",

  "Express",
  "Fastify",
  "Flask",
  "Django",
];

export function TechMarquee() {
  return (
    <div className="relative">
      <div className={`absolute bottom-0 `}>
        <Marquee speed={100}>
          {tech.map((t, i) => (
            <span
              key={i}
              className="inline-block p-4 font-geist-sans text-gray-400"
            >
              {t}
            </span>
          ))}
        </Marquee>
        <Divider className="my-0" />
      </div>
    </div>
  );
}
