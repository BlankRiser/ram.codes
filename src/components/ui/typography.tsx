import { VariantProps, cva } from 'class-variance-authority';
import { ElementType, ReactNode, ComponentProps } from 'react';
import { Balancer } from 'react-wrap-balancer';
import { generalSans, inter, jetBrainsMono, spaceGrotesk } from '~/utils/fonts';
import { cn } from '~/utils/text-transforms';
import { Slot } from '@radix-ui/react-slot';

const typographyStyles = cva('', {
	variants: {
		intent: {
			h1: 'text-4xl font-semibold md:text-8xl',
			h2: 'text-3xl font-semibold md:text-6xl',
			h3: 'text-2xl font-semibold md:text-5xl',
			h4: 'text-xl font-semibold md:text-4xl',
			h5: 'text-lg font-semibold md:text-3xl',
			h6: 'text-base font-semibold md:text-2xl',
			base: 'text-base font-normal md:text-lg',
			title: 'text-xl font-semibold md:text-4xl md:leading-[1.125em] md:-tracking-tight ',
			subtitle: 'text-lg font-normal md:text-xl',
			caption: 'text-xs font-normal md:text-sm',
		},
		font: {
			inter: ['font-sans', inter.className],
			spaceGrotesk: ['font-spaceGrotesk', spaceGrotesk.className],
			jetBrainsMono: ['font-mono', jetBrainsMono.className],
			generalSans: ['font-generalSans', generalSans.className],
		},
		gradient: {
			none: '',
			gray: 'bg-gradient-to-br from-white via-[#e9f5f2] to-[#354d4b] bg-clip-text text-transparent',
			'blue-green': 'bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent',
			'indigo-sky-emerald':
				'bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent',
			green:
				'bg-gradient-to-br from-green-500 from-10% via-emerald-500 via-30% to-teal-500 to-70% bg-clip-text text-transparent',
		},
	},
	defaultVariants: {
		intent: 'base',
		font: 'inter',
		gradient: 'none',
	},
});

type props = {
	isGradient?: boolean;
};

type TypographyProps = {
	asChild?: boolean;
	children: ReactNode;
	className: string;
} & VariantProps<typeof typographyStyles> &
	props;

export function Typography({
	asChild = false,
	children,
	intent,
	font,
	gradient = 'none',
	isGradient = false,
	className = '',
}: TypographyProps) {
	const Component = asChild ? Slot : 'p';

	return (
		<Component
			className={cn(
				typographyStyles({
					intent,
					font,
					gradient,
					className: className,
				}),
			)}
			style={
				isGradient
					? {
							backgroundImage:
								'radial-gradient(circle at 0 0,#f79393,#fee4a5 38%,#9ae8b0 75%,#5ba5d0)',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
					  }
					: {}
			}
		>
			<Balancer>{children}</Balancer>
		</Component>
	);
}
// export function Typography<T extends ElementType = "p">({
//   as: Component = "p",
//   children,
//   intent,
//   font,
//   gradient = "none",
//   isGradient = false,
//   ...rest
// }: TypographyProps<T>) {
//   return (
//     <Component
//       {...rest}
//       className={cn(typographyStyles({
//         intent,
//         font,
//         gradient,
//         className: rest.className,
//       }))}
//       style={
//         isGradient
//           ? {
//             backgroundImage:
//               "radial-gradient(circle at 0 0,#f79393,#fee4a5 38%,#9ae8b0 75%,#5ba5d0)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//           }
//           : {}
//       }
//     >
//       <Balancer>{children}</Balancer>
//     </Component>
//   );
// }
