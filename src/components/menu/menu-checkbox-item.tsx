import { Menu as BaseMenu } from "@base-ui/react/menu"
import { CheckIcon } from "@phosphor-icons/react"
import { cn } from "suwa-ui"
import type { MenuCheckboxItemProps } from "./menu.types"

export const MenuCheckboxItem = ({
	className,
	children,
	ref,
	...props
}: MenuCheckboxItemProps) => {
	return (
		<BaseMenu.CheckboxItem
			className={cn(
				"grid cursor-default select-none grid-cols-[0.75rem_1fr] items-center gap-xs leading-xs outline-none data-highlighted:relative data-highlighted:z-0 data-highlighted:before:absolute data-highlighted:before:inset-x-1 data-highlighted:before:inset-y-[0px] data-highlighted:before:z-[-1] data-highlighted:before:rounded-sm",
				className,
			)}
			ref={ref}
			{...props}
		>
			<BaseMenu.CheckboxItemIndicator className="flex items-center justify-center">
				<CheckIcon weight="bold" />
			</BaseMenu.CheckboxItemIndicator>
			{children}
		</BaseMenu.CheckboxItem>
	)
}
