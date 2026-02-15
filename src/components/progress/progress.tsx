import { useId } from "react"
import { cn } from "@/utils/cn"
import type { ProgressProps } from "./progress.types"

export const Progress = ({
	currentIndex,
	className,
	children,
	ref,
	...props
}: ProgressProps) => {
	const uid = useId().replace(/:/g, "")
	const scope = `progress-${uid}`
	const current = currentIndex * 2 - 1

	return (
		<>
			<style>
				{`
		  .${scope} > :nth-child(${current}) > :first-child {
			border: 1px solid var(--color-success-outline);
			color: var(--color-success);
		  }
		  .${scope} > :nth-child(-n+${current - 1}) > :first-child {
			background-color: var(--color-success);
			color: var(--color-on-success);
			box-shadow: none;
		  }
		`}
			</style>

			<div
				className={cn(
					"flex w-full items-center justify-center gap-2xs",
					scope,
					className,
				)}
				ref={ref}
				{...props}
			>
				{children}
			</div>
		</>
	)
}
