import Link from "next/link"
import { Button } from "~/components/ui"

function NotFoundPage() {
	return (
		<div className="grid h-[50dvh] w-full place-items-center">
			<div className="flex flex-col items-center justify-center gap-4">
				<h1 className="font-mono text-9xl">404</h1>
				<span className="text-center">
					Ooops, you caught me off guard! <br /> This page does not
					exist :)
				</span>
				<Button asChild>
					<Link href="/">Go back home</Link>
				</Button>
			</div>
		</div>
	)
}

export default NotFoundPage
