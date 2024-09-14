import { Pre, RawCode, highlight } from "codehike/code"
import { callout } from "./code-annotations/callout"

export async function Code({ codeblock }: { codeblock: RawCode }) {
  const highlighted = await highlight(codeblock, "poimandres")
  return (
    <Pre
      code={highlighted}
      handlers={[callout]}
      className="border border-green-800"
    />
  )
}
