import { cn } from "@/utils/cn"
import { type BadgeExtendedProps, badgeVariants } from "./badge.types"

export const Badge = ({
	size = "medium",
	variant = "solid",
	tone = "brand",
	className,
	children,
	ref,
	...props
}: BadgeExtendedProps) => {
	return (
		<div
			className={cn(badgeVariants({ className, tone, variant, size }))}
			ref={ref}
			{...props}
		>
			{children}
		</div>
	)
}
