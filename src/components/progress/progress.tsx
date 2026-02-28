import React from "react"
import { cn } from "@/utils/cn"
import type { ProgressProps } from "./progress.types"

export const Progress = ({
	className,
	children,
	ref,
	...props
}: ProgressProps) => {
	// Find the index of the active indicator
	let activeIndex = -1
	let currentIndex = -1

	const findActiveIndex = (child: React.ReactNode): void => {
		if (!React.isValidElement(child)) return

		const childType = child.type as
			| string
			| React.ComponentType<unknown>
			| undefined
		const displayName =
			typeof childType === "function"
				? (childType as { displayName?: string }).displayName
				: ""

		if (displayName === "ProgressIndicator") {
			currentIndex++
			const childProps = child.props as { isActive?: boolean }
			if (childProps.isActive && activeIndex === -1) {
				activeIndex = currentIndex
			}
		}
	}

	React.Children.forEach(children, findActiveIndex)

	// Process children to add isCompleted prop
	let indicatorIndex = -1
	let barIndex = -1

	const processChildren = (child: React.ReactNode): React.ReactNode => {
		if (!React.isValidElement(child)) return child

		const childType = child.type as
			| string
			| React.ComponentType<unknown>
			| undefined
		const displayName =
			typeof childType === "function"
				? (childType as { displayName?: string }).displayName
				: ""

		if (displayName === "ProgressIndicator") {
			indicatorIndex++
			const shouldBeCompleted =
				activeIndex !== -1 && indicatorIndex < activeIndex
			return React.cloneElement(child, {
				isCompleted: shouldBeCompleted,
			} as Record<string, unknown>)
		}

		if (displayName === "ProgressBar") {
			barIndex++
			const shouldBeCompleted = activeIndex !== -1 && barIndex < activeIndex
			return React.cloneElement(child, {
				isCompleted: shouldBeCompleted,
			} as Record<string, unknown>)
		}

		return child
	}

	const processedChildren = React.Children.map(children, processChildren)

	return (
		<div
			className={cn(
				"flex w-full items-center justify-center gap-2xs",
				className,
			)}
			ref={ref}
			{...props}
		>
			{processedChildren}
		</div>
	)
}
