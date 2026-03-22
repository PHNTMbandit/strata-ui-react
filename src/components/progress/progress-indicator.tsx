import { cn } from "@/utils/cn"
import type { ProgressIndicatorProps } from "./progress.types"

export const ProgressIndicator = ({
	title,
	description,
	className,
	children,
	isActive = false,
	ref,
	...props
}: ProgressIndicatorProps & { isCompleted?: boolean }) => {
	const { isCompleted = false, ...restProps } = props as {
		isCompleted?: boolean
	}
	return (
		<div className="relative">
			<div
				className={cn(
					"style-text-default--2 flex size-md shrink-0 flex-col items-center justify-center rounded-full border border-outline bg-surface-container text-center text-success transition-colors ease-in-out [&>svg]:size-xs",
					isActive &&
						"border-success-outline bg-success-container text-on-success-container",
					isCompleted && "border-none bg-success text-on-success shadow-none",
					className,
				)}
				ref={ref}
				{...restProps}
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

ProgressIndicator.displayName = "ProgressIndicator"
