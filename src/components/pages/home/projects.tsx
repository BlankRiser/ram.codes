import { ArrowTr } from "iconoir-react";
import Image from "next/image";
import { Chip } from "~/components/ui/chip";
import { Typography } from "~/components/ui/typography";
import { ICONMAP } from "~/constants/icon-map";
import { WORK, type Work } from "~/constants/me";

export function Projects() {
  return (
    <div className="my-48 grid grid-cols-1 gap-8 md:grid-cols-2">
      <div className="flex flex-col gap-8 md:sticky md:top-24 md:h-[calc(100vh-56px)]">
        <Chip>
          💡 Projects
        </Chip>
        <div className="flex flex-col gap-5">
          <Typography intent="title" className="text-neutral-300">
            Working on different projects is my recipe for constant growth
          </Typography>
          <Typography as='span' intent="subtitle" className="text-neutral-500">
            it&apos;s like cooking up a storm in the kitchen of creativity! 👨‍🍳
          </Typography>
        </div>
        
        <button className="w-fit rounded-full bg-neutral-200 px-8 py-4 font-semibold text-neutral-950 hover:bg-neutral-300">
          Have any ideas? Let&apos;s talk!</button>
      </div>
      <div className="group grid grid-cols-1 gap-4 md:gap-8">
        {WORK.map((work, index) => {
          return <ProjectCard key={index} details={work} image={work.ogImage} />
        })}
      </div>
    </div >
  )
}


type ProjectCardProps = {
  details: Work
  image: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  details,
  image
}) => {
  const { tech } = details;
  return (
    <div className="group/card peer flex flex-col gap-4 rounded-[3rem] bg-neutral-900 p-8 transition-all ease-in-out hover:!bg-neutral-900/70 hover:!blur-0 group-hover:blur-sm">
      <div className="relative">
        <Image src={image} alt='pj' width={1200} height={700} className="h-full rounded-[1.5rem] object-cover " />
        <button className="absolute right-4 top-4 hidden w-fit rounded-full bg-neutral-200 p-4 font-semibold text-neutral-950 hover:bg-neutral-300 group-hover/card:block">
          <ArrowTr className="h-6 w-6" />
        </button>
      </div>


      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="aspect-square w-[200px] rounded-[1.5rem] bg-slate-800" />
          <div className="aspect-square w-[200px] rounded-[1.5rem] bg-neutral-800" />
        </div>
        <div className=" flex h-full w-full flex-wrap gap-4 rounded-[1.5rem] bg-zinc-950 p-4" >
          {
            tech.map((t, index) => {
              return <div key={index} className="my-4">
                {ICONMAP?.[t.name] ?? t.name}
              </div>
            })
          }

        </div>
      </div>
    </div >
  )
}
