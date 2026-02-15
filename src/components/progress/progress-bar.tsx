import { cn } from "@/utils/cn"
import type { ProgressBarProps } from "./progress.types"

export const ProgressBar = ({
	className,
	children,
	ref,
	...props
}: ProgressBarProps) => {
	return (
		<div className="w-full">
			<div
				className={cn(
					"inset-shadow-xs h-3xs w-full grow rounded-full bg-surface-dim",
					className,
				)}
				ref={ref}
				{...props}
			>
				{children}
			</div>
		</div>
	)
}
