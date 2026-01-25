import { cn } from "@/utils/cn"
import type { DialogContentProps } from "./dialog.types"

export const DialogContent = ({
	className,
	children,
	ref,
	...props
}: DialogContentProps) => {
	return (
		<div className={cn("space-y-xs", className)} ref={ref} {...props}>
			{children}
		</div>
	)
}
