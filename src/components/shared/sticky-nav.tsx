"use client"

import { Variants, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { ArrowLeft, ArrowRight } from "iconoir-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useMemo, useRef, useState } from "react"
import {
	Button,
	Divider,
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "~/components/ui"
import { cn } from "~/utils/text-transforms"
import { LongArrowDownRight } from "../icons/misc"
import { allBlogs } from "content-collections"

type StickyNavProps = {
	hasTOC: boolean
	next: (typeof allBlogs)[number]
	prev: (typeof allBlogs)[number]
}

export const StickyNav: React.FC<StickyNavProps> = ({ hasTOC, next, prev }) => {
	const router = useRouter()
	const pathname = usePathname()

	const [hidden, setHidden] = useState(false)
	const { scrollY } = useScroll()
	const lastYRef = useRef(0)

	useMotionValueEvent(scrollY, "change", (y) => {
		const difference = y - lastYRef.current
		if (Math.abs(difference) > 180) {
			setHidden(difference > 0)
			lastYRef.current = y
		}
	})

	const previousBlogURL = useMemo(() => {
		return "/blog/" + prev._meta.path
	}, [prev._meta.path])
	const nextBlogURL = useMemo(() => {
		return "/blog/" + next._meta.path
	}, [next._meta.path])

	return (
		<motion.div
			animate={hidden ? "hidden" : "visible"}
			initial="visible"
			whileHover={hidden ? "peeking" : "visible"}
			onFocusCapture={hidden ? () => setHidden(false) : undefined}
			variants={
				{
					visible: { y: "0%" },
					hidden: { y: "70%" },
					peeking: {
						y: "0%",
						cursor: "pointer",
					},
				} as Variants
			}
			transition={{ duration: 0.2 }}
			className="fixed inset-x-0 bottom-0 z-10 flex w-full justify-center pt-3"
		>
			<div className="flex min-w-96 justify-between gap-3 rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 shadow-lg shadow-neutral-900">
				<Button
					asChild
					variant="ghost"
					size="sm"
					className="flex items-center gap-2"
				>
					<Link href={previousBlogURL}>
						<ArrowLeft
							className="size-3"
							onPointerEnterCapture={undefined}
							onPointerLeaveCapture={undefined}
						/>{" "}
						<span className="hidden md:inline-block">
							Previous Blog
						</span>
					</Link>
				</Button>
				{/* {hasTOC && (
					<Button
						size="sm"
						variant="outline"
						onClick={() => {
							router.push(pathname + "#toc")
						}}
					>
						Table of Content
					</Button>
				)} */}
				<Button
					asChild
					variant="ghost"
					size="sm"
					className="flex items-center gap-2"
				>
					<Link href={nextBlogURL}>
						<ArrowRight
							className="size-3 "
							onPointerEnterCapture={undefined}
							onPointerLeaveCapture={undefined}
						/>{" "}
						<span className="hidden md:inline-block">
							Next Blog
						</span>
					</Link>
				</Button>
			</div>
		</motion.div>
	)
}

const LEVELS = ["one", "two", "three"]
type Headings = any

const areHeadingsUniform = (headings: Headings, levels: string[]): boolean => {
	if (headings.length === 0) return false

	const firstLevel = headings[0].level
	if (!levels.includes(firstLevel)) return false

	return headings.every(
		(heading: Headings[number]) => heading.level === firstLevel,
	)
}

export const TableOfContent = ({ headings }: { headings: Headings }) => {
	const isUniform = useMemo(
		() => areHeadingsUniform(headings, LEVELS),
		[headings],
	)
	console

	return (
		<div className="mx-auto w-full max-w-3xl overflow-y-auto rounded-md border border-neutral-800 py-2 text-neutral-200">
			<div className="flex items-center justify-center px-4 py-2">
				<span className=" text-lg">Table of Content</span>
			</div>
			<Divider className="mb-4 mt-2" />
			<div>
				{headings.map((heading: Headings[number]) => {
					return (
						<div key={`#${heading.slug}`} className=" ">
							<Tooltip>
								<TooltipTrigger asChild>
									<a
										data-level={heading.level}
										href={`#${heading.slug}`}
										className={cn([
											"flex items-center gap-1",
											"opacity-40 hover:text-primary hover:opacity-100",
											isUniform && "pl-2",
											isUniform
												? ""
												: "data-[level=one]:pl-2",
											isUniform
												? ""
												: "data-[level=two]:pl-4",
											isUniform
												? ""
												: "data-[level=three]:pl-8",
										])}
									>
										{["two", "three"].includes(
											heading.level,
										) &&
											!isUniform && (
												<LongArrowDownRight />
											)}
										<span className="text-sm">
											{heading.text}
										</span>
									</a>
								</TooltipTrigger>
								<TooltipContent>
									<p className="capitalize">{heading.text}</p>
								</TooltipContent>
							</Tooltip>
						</div>
					)
				})}
			</div>
		</div>
	)
}
