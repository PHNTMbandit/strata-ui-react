import { cn } from "@/utils/cn"
import { type BadgeExtendedProps, badgeVariants } from "./badge.types"

export const Badge = ({
	size = "medium",
	style = "solid",
	tone = "primary",
	className,
	children,
	ref,
	...props
}: BadgeExtendedProps) => {
	return (
		<div
			className={cn(badgeVariants({ className, tone, style, size }))}
			ref={ref}
			{...props}
		>
			{children}
		</div>
	)
}
