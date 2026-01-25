import { cn } from "@/utils/cn"
import type { DialogHeaderProps } from "./dialog.types"

export const DialogHeader = ({
	className,
	children,
	ref,
	...props
}: DialogHeaderProps) => {
	return (
		<div className={cn("space-y-2xs", className)} ref={ref} {...props}>
			{children}
		</div>
	)
}
