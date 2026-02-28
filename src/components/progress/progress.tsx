import React, { useId } from "react"
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

	let indicatorIndex = 0
	let barIndex = 0
	const processChildren = (child: React.ReactNode): React.ReactNode => {
		if (!React.isValidElement(child)) return child

		const childType = child.type as
			| string
			| React.ComponentType<unknown>
			| undefined
		const displayName =
			typeof childType === "function"
				? (childType as { displayName?: string; name?: string }).displayName ||
					(childType as { displayName?: string; name?: string }).name
				: ""

		const childProps = child.props as {
			className?: string
			children?: React.ReactNode
		}

		if (
			displayName === "ProgressIndicator" ||
			(typeof childProps.className === "string" &&
				childProps.className.includes("size-md"))
		) {
			indicatorIndex++
			return React.cloneElement(child, {
				"data-progress-index": indicatorIndex,
			} as Record<string, unknown>)
		}

		if (
			displayName === "ProgressBar" ||
			(typeof childProps.className === "string" &&
				childProps.className.includes("h-3xs"))
		) {
			barIndex++
			return React.cloneElement(child, { "data-bar-index": barIndex } as Record<
				string,
				unknown
			>)
		}

		if (childProps.children) {
			return React.cloneElement(child, {
				children: React.Children.map(childProps.children, processChildren),
			} as Record<string, unknown>)
		}

		return child
	}

	const processedChildren = React.Children.map(children, processChildren)

	return (
		<>
			<style>
				{`
		  .${scope} [data-progress-index="${currentIndex}"] {
			background-color: var(--color-success-container);
			border: 1px solid var(--color-success-outline);
			color: var(--color-on-success-container);
		  }
		  ${Array.from({ length: currentIndex - 1 }, (_, i) => i + 1)
				.map(
					(i) => `
		  .${scope} [data-progress-index="${i}"] {
			background-color: var(--color-success);
			color: var(--color-on-success);
			box-shadow: none;
		  }
		  `,
				)
				.join("")}
		  ${Array.from({ length: currentIndex - 1 }, (_, i) => i + 1)
				.map(
					(i) => `
		  .${scope} [data-bar-index="${i}"] {
			background-color: var(--color-success);
			opacity: 1;
		  }
		  `,
				)
				.join("")}
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
				{processedChildren}
			</div>
		</>
	)
}
