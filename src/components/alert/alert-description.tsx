import { cn } from "@/utils/cn"
import type { AlertDescriptionProps } from "./alert.types"

export const AlertDescription = ({
	className,
	children,
	ref,
	...props
}: AlertDescriptionProps) => {
	return (
		<div className={cn("style-text-prose--1", className)} ref={ref} {...props}>
			{children}
		</div>
	)
}
