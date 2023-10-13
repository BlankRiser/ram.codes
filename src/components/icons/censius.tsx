import * as React from "react"
import { SVGProps } from "react"

export const Censius = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={195}
    height={31}
    fill="none"
    {...props}
  >
    <path fill="#000" d="M194.474.7H.138v29.6h194.336V.7Z" />
  </svg>
)