import { Menu as BaseMenu } from "@base-ui/react/menu"
import { cn } from "suwa-ui"
import type { MenuItemProps } from "./menu.types"

export const MenuItem = ({
	className,
	children,
	ref,
	...props
}: MenuItemProps) => {
	return (
		<BaseMenu.Item
			className={cn(
				"flex cursor-default select-none items-center px-sm py-3xs pr-2xl leading-md outline-none transition-colors before:transition-colors hover:cursor-pointer data-highlighted:relative data-highlighted:z-0 data-highlighted:text-on-primary-container data-highlighted:before:absolute data-highlighted:before:inset-x-3xs data-highlighted:before:inset-y-[0px] data-highlighted:before:z-[-1] data-highlighted:before:rounded-md data-highlighted:before:bg-primary-container",
				className,
			)}
			ref={ref}
			{...props}
		>
			<div className="flex items-center gap-2xs [&>svg]:size-sm">
				{children}
			</div>
		</BaseMenu.Item>
	)
}
