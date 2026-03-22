import { ContextMenu as BaseContextMenu } from "@base-ui/react/context-menu"
import { cn } from "@/utils/cn"
import type { ContextMenuItemProps } from "./context-menu.types"

export const ContextMenuItem = ({
	className,
	children,
	ref,
	...props
}: ContextMenuItemProps) => {
	return (
		<BaseContextMenu.Item
			className={cn(
				"flex cursor-default select-none items-center px-sm py-3xs pr-2xl leading-md outline outline-transparent before:outline before:outline-transparent hover:cursor-pointer data-highlighted:relative data-highlighted:z-0 data-highlighted:text-on-brand-container data-highlighted:before:absolute data-highlighted:before:inset-x-3xs data-highlighted:before:inset-y-[0px] data-highlighted:before:z-[-1] data-highlighted:before:rounded-md data-highlighted:before:bg-brand-container data-highlighted:before:outline-brand-outline",
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
		</BaseContextMenu.Item>
	)
}
