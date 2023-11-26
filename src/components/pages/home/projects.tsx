"use client";

import { ContactMe } from "~/components/shared/contact-me";
import { Button } from "~/components/ui";
import { Chip } from "~/components/ui/chip";
import { Typography } from "~/components/ui/typography";

export function Projects() {
  return (
    <div className="my-48 grid grid-cols-1 gap-8 md:grid-cols-2">
      <div className="flex flex-col justify-center gap-8 md:sticky md:top-24 md:h-[calc(100vh-56px)]">
        <Chip>💡 Projects</Chip>
        <div className="flex flex-col gap-5">
          <Typography intent="title" className="text-neutral-300">
            Working on different projects is my recipe for constant growth
          </Typography>
          <Typography asChild intent="subtitle" className="text-neutral-500">
            <span>
              it&apos;s like cooking up a storm in the kitchen of creativity! 👨‍🍳
            </span>
          </Typography>
        </div>

        <ContactMe>
          <Button size={"lg"} rounded={"full"}>
            Have any ideas? Let&apos;s talk!
          </Button>
        </ContactMe>
      </div>
      {/* <div className="group grid grid-cols-1 gap-4 md:gap-8">
        {[...WORK, ...WORK].map((work, index) => {
          return (
            <ProjectCard key={index} details={work} image={work.ogImage} />
          );
        })}
      </div> */}
    </div>
  );
}

// type ProjectCardProps = {
//   details: typeof WORK;
//   image: string;
// };

// const ProjectCard: React.FC<ProjectCardProps> = ({ details, image }) => {
//   const { tech } = details;
//   return (
//     <div className="group/card peer flex flex-col gap-4 rounded-[3rem] bg-neutral-900 p-8 transition-all ease-in-out hover:!bg-neutral-900/70 hover:!blur-0 group-hover:blur-sm">
//       <div className="relative">
//         <Image
//           src={image}
//           alt="pj"
//           width={1200}
//           height={700}
//           className="h-full rounded-[1.5rem] object-cover "
//         />
//         <button className="absolute right-4 top-4 hidden w-fit rounded-full bg-neutral-200 p-4 font-semibold text-neutral-950 hover:bg-neutral-300 group-hover/card:block">
//           <ArrowTr className="h-6 w-6" />
//         </button>
//       </div>

//       <div className="flex items-center gap-4">
//         <div className="flex items-center gap-4">
//           <div className="aspect-square w-[200px] rounded-[1.5rem] bg-slate-800" />
//           <div className="aspect-square w-[200px] rounded-[1.5rem] bg-neutral-800" />
//         </div>
//         <div className=" flex h-full w-full flex-wrap gap-4 rounded-[1.5rem] bg-zinc-950 p-4">
//           {tech.map((t, index) => {
//             return (
//               <div key={index} className="my-4">
//                 {ICONMAP?.[t.name] ?? t.name}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };
