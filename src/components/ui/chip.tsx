import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '~/utils/text-transforms'

type Props = {
  as?: React.ElementType
  children: React.ReactNode
  className?: string
} & VariantProps<typeof ChipStyles>

export const Chip: React.FC<Props> = ({ as = 'span', children, color, rounded, className = '' }) => {

  const Component = as

  return (
    <Component className={
      cn(ChipStyles({ color, rounded, className }))
    } >{children}</Component>
  )
}

const ChipStyles = cva("z-50 w-fit px-4 py-2 select-none font-bold border transition-all ease-in-out duration-300 uppercase tracking-widest text-xs opacity-50 hover:opacity-80", {
  variants: {
    color: {
      DEFAULT: "border-white/50 text-white hover:bg-stone-950",
      green: "border-green-500 text-green-500 hover:bg-green/950",
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
