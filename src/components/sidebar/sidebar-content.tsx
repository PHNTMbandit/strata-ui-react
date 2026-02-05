import { cn } from "@/utils/cn"
import type { SidebarContentProps } from "./sidebar.types"
import { useSidebar } from "./sidebar-provider"

export const SidebarContent = ({
	hideScrollbar = false,
	className,
	children,
	ref,
	...props
}: SidebarContentProps) => {
	const { open } = useSidebar()

	return (
		<div
			className={cn(
				"flex grow flex-col items-center overflow-y-auto transition-all duration-300 ease-in-out [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
				open ? "gap-lg" : "gap-xs divide-y divide-outline-variant",
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
		</div>
	)
}
