import { Collapsible as BaseCollapsible } from "@base-ui/react/collapsible"
import { cn } from "@/utils/cn"
import { Popover } from "../popover"
import type { SidebarSubMenuProps } from "./sidebar.types"
import { useSidebar } from "./sidebar-provider"

export const SidebarSubMenu = ({
	className,
	children,
	ref,
	...props
}: SidebarSubMenuProps) => {
	const { open } = useSidebar()

	if (!open) {
		return <Popover>{children}</Popover>
	}
	return (
		<BaseCollapsible.Root
			className={cn("flex w-full flex-col gap-xs", className)}
			ref={ref}
			{...props}
		>
			{children}
		</BaseCollapsible.Root>
	)
}
