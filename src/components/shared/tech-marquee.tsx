import { Marquee } from "./marquee";
import { Divider } from "../ui";
import { motion } from "framer-motion";

const tech = [
  "React",
  "NextJs",
  "AstroJs",
  "Remix",

  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Redis",

  "AWS",
  "Docker",
  "Kubernetes",
  "Github Actions",

  "TypeScript",
  "JavaScript",
  "Python",

  "HTML",
  "CSS",
  "SCSS",
  "Tailwind CSS",
  "Material UI",
];

export function TechMarquee() {
  return (
    <motion.div className={`absolute bottom-0 `}>
      <Marquee>
        {tech.map((t, i) => (
          <span key={i} className="inline-block px-4 py-4 text-gray-400">
            {t}
          </span>
        ))}
      </Marquee>
      <Divider className="my-0" />
    </motion.div>
  );
}
