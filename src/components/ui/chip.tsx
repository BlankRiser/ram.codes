import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '~/utils/text-transforms'

type Props = {
  children: React.ReactNode
  className?: string
} & VariantProps<typeof ChipStyles>

export const Chip: React.FC<Props> = ({  children, color, rounded, className = '' }) => {

  return (
    <span className={
      cn(ChipStyles({ color, rounded, className }))
    } >{children}</span>
  )
}

const ChipStyles = cva("z-50 w-fit select-none border px-4 py-2 text-xs font-bold uppercase tracking-widest opacity-50 transition-all duration-300 ease-in-out hover:opacity-80", {
  variants: {
    color: {
      DEFAULT: "border-white/50 text-white hover:bg-stone-950",
      green: "border-green-500 text-green-500 hover:bg-green-950",
    },
    rounded: {
      true: "rounded-full",
      false: "rounded-md"
    }
  },
  defaultVariants: {
    color: "DEFAULT",
    rounded: true
  }
})
