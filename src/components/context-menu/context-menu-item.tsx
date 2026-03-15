import { ContextMenu as BaseContextMenu } from "@base-ui/react/context-menu"
import { cn } from "@/utils/cn"

type ContextMenuItemProps = React.ComponentProps<"div">

export const ContextMenuItem = ({
	className,
	children,
	ref,
	...props
}: ContextMenuItemProps) => {
	return (
		<BaseContextMenu.Item
			className={cn(
				"flex cursor-default select-none items-center px-sm py-3xs pr-2xl leading-md outline-none transition-colors before:transition-colors hover:cursor-pointer data-highlighted:relative data-highlighted:z-0 data-highlighted:text-on-primary-container data-highlighted:before:absolute data-highlighted:before:inset-x-3xs data-highlighted:before:inset-y-[0px] data-highlighted:before:z-[-1] data-highlighted:before:rounded-md data-highlighted:before:bg-primary-container",
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
		</BaseContextMenu.Item>
	)
}
