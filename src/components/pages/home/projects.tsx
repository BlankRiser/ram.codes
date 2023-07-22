import { ArrowTr } from "iconoir-react";
import Image from "next/image";
import { Chip } from "~/components/ui/chip";
import { Typography } from "~/components/ui/typography";
import { ICONMAP } from "~/constants/icon-map";
import { WORK, type Work } from "~/constants/me";

export function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-48">
      <div className="md:sticky flex flex-col gap-8 md:top-24 md:h-[calc(100vh-56px)]">
        <Chip>
          💡 Projects
        </Chip>
        <div className="flex flex-col gap-8">
          <Typography intent="title" className="text-neutral-300">
            Working on different projects is my recipe for constant growth
          </Typography>
          <Typography as='span' intent="subtitle" className="text-neutral-300">
            it&apos;s like cooking up a storm in the kitchen of creativity! 👨‍🍳
          </Typography>
        </div>
        <Typography className="text-neutral-400">
          Have any ideas? Let&apos;s talk!
        </Typography>
        <button className="w-fit bg-neutral-200 hover:bg-neutral-300 px-8 py-4 rounded-full text-neutral-950 font-semibold">Contact me!</button>
      </div>
      <div className="grid grid-cols-1 gap-4 group md:gap-8">
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
    <div className="rounded-[3rem] group/card flex flex-col gap-4 p-8 bg-neutral-900 peer hover:!bg-neutral-900/70 hover:!blur-0 group-hover:blur-sm transition-all ease-in-out">
      <div className="relative">
        <Image src={image} alt='pj' width={1200} height={700} className="rounded-[1.5rem] object-cover h-full " />
        <button className="absolute top-4 right-4 hidden group-hover/card:block w-fit bg-neutral-200 hover:bg-neutral-300 p-4 rounded-full text-neutral-950 font-semibold">
          <ArrowTr className="w-6 h-6" />
        </button>
      </div>


      <div className="flex items-center gap-4">
        <div className="flex gap-4 items-center">
          <div className="w-[200px] aspect-square bg-slate-800 rounded-[1.5rem]" />
          <div className="w-[200px] aspect-square bg-neutral-800 rounded-[1.5rem]" />
        </div>
        <div className=" w-full h-full bg-zinc-950 rounded-[1.5rem] flex flex-wrap gap-4 p-4" >
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
