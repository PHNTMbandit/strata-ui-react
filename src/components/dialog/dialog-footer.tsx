import { cn } from "@/utils/cn"
import type { DialogFooterProps } from "./dialog.types"

export const DialogFooter = ({
	className,
	children,
	ref,
	...props
}: DialogFooterProps) => {
	return (
		<div
			className={cn("w-full bg-surface-container-low", className)}
			ref={ref}
			{...props}
		>
			<div className="flex w-full items-center gap-2xs p-sm">{children}</div>
		</div>
	)
}
