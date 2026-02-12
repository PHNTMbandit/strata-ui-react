import { cn } from "@/utils/cn"
import { type SeparatorProps, separatorVariants } from "./separator.types"

export const Separator = ({
	label,
	tone = "default",
	orientation = "horizontal",
	thickness = "medium",
	className,
	children,
	ref,
	...props
}: SeparatorProps) => {
	return (
		<div
			className={cn(
				separatorVariants({ tone, orientation, thickness, className }),
			)}
			ref={ref}
			{...props}
		>
			{children}
			{label && (
				<span className="style-text-prose--2 absolute right-1/2 translate-x-1/2 -translate-y-1/2 bg-surface px-2xs text-on-surface-variant">
					{label}
				</span>
			)}
		</div>
	)
}
