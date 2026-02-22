import { cn } from "@/utils/cn"
import type { ProgressIndicatorProps } from "./progress.types"

export const ProgressIndicator = ({
	title,
	description,
	className,
	children,
	ref,
	...props
}: ProgressIndicatorProps) => {
	return (
		<div className="relative">
			<div
				className={cn(
					"style-text-default--2 flex size-md shrink-0 flex-col items-center justify-center rounded-full bg-surface-container-low text-center text-success transition-colors ease-in-out [&>svg]:size-xs",
					className,
				)}
				ref={ref}
				{...props}
			>
				{children}
			</div>
			<div className="absolute top-full left-1/2 w-3xl -translate-x-1/2 translate-y-2xs">
				{title && (
					<div className="style-text-strong--2 text-center text-on-surface">
						{title}
					</div>
				)}
				{description && (
					<div className="style-text-prose--2 text-center text-on-surface-variant leading-sm">
						{description}
					</div>
				)}
			</div>
		</div>
	)
}
