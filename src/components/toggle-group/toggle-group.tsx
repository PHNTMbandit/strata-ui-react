import { ToggleGroup as BaseToggleGroup } from "@base-ui/react/toggle-group"
import { cn } from "@/utils/cn"
import type { ToggleGroupProps } from "./toggle-group.types"

export const ToggleGroup = ({
	className,
	children,
	ref,
	...props
}: ToggleGroupProps) => {
	return (
		<BaseToggleGroup
			className={cn(
				"flex w-fit gap-3xs rounded-lg bg-surface-container-low p-3xs outline outline-outline-variant",
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
		</BaseToggleGroup>
	)
}
