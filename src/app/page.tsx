"use client"

import Cal from "@calcom/embed-react"
import { MotionValue, useScroll } from "framer-motion"
import { useRef } from "react"
import { Hero } from "~/components/pages/home/hero"
import { TechMarquee } from "~/components/shared/tech-marquee"

export default function Home() {
	const container = useRef<HTMLDivElement | null>(null)

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	})

	return (
		<div ref={container}>
			<div className="sticky top-0">
				<Hero scrollYProgress={scrollYProgress} />
			</div>
			<div className="relative z-[999]">
				<Projects scrollYProgress={scrollYProgress} />
			</div>
			<TechMarquee />
		</div>
	)
}

const Projects: React.FC<{
	scrollYProgress: MotionValue<number>
}> = ({ scrollYProgress }) => {
	return (
		<div className="grid min-h-[100vh] w-full place-items-center overflow-visible bg-neutral-900">
			<Cal calLink="ram-codes" className="w-full"></Cal>
		</div>
	)
}
