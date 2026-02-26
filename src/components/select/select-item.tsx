import { Select as BaseSelect } from "@base-ui/react/select"
import { CheckIcon } from "@phosphor-icons/react"
import { cn } from "@/utils/cn"
import type { SelectItemProps } from "./select.types"

export const SelectItem = ({
	className,
	children,
	ref,
	...props
}: SelectItemProps) => {
	return (
		<BaseSelect.Item
			className={cn(
				"style-text-default-0 grid cursor-default select-none grid-cols-[1fr_0.75rem] items-center gap-xs rounded-md pointer-coarse:py-xs pl-xs leading-md outline-none transition-colors hover:cursor-pointer data-highlighted:relative data-highlighted:z-0 data-highlighted:bg-primary-container data-selected:bg-primary data-highlighted:text-on-primary-container data-selected:text-surface data-highlighted:before:absolute data-highlighted:before:inset-x-3xs data-highlighted:before:inset-y-[0px] data-highlighted:before:z-[-1] data-highlighted:before:rounded-sm group-data-[side=none]:pr-xs group-data-[side=none]:leading-lg",
				className,
			)}
			ref={ref}
			{...props}
		>
			<BaseSelect.ItemText>{children}</BaseSelect.ItemText>
			<BaseSelect.ItemIndicator className="place-self-end self-center">
				<CheckIcon weight="bold" />
			</BaseSelect.ItemIndicator>
		</BaseSelect.Item>
	)
}
