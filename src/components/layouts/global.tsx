"use client"

import { motion } from "framer-motion"
import React, { useEffect } from "react"
import Lenis from "lenis"

export function Global({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		const lenis = new Lenis()

		function raf(time: number) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	}, [])

	return (
		<motion.main
			initial={{ y: 10 }}
			animate={{ y: 0 }}
			transition={{
				duration: 0.25,
				type: "spring",
				stiffness: 100,
				damping: 20,
			}}
			className="z-10"
		>
			{children}
		</motion.main>
	)
}
