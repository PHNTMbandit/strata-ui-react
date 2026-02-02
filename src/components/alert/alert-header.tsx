import { cn } from "@/utils/cn"
import type { AlertHeaderProps } from "./alert.types"

export const AlertHeader = ({
	className,
	children,
	ref,
	...props
}: AlertHeaderProps) => {
	return (
		<div
			className={cn(
				"style-text-strong--1 flex items-center gap-3xs [&_svg]:size-sm",
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
		</div>
	)
}
