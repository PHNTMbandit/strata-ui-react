import { cn } from "@/utils/cn"
import type { SidebarContentProps } from "./sidebar.types"
import { useSidebar } from "./sidebar-provider"
import { SidebarToggle } from "./sidebar-toggle"

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
				"mb-auto flex flex-col items-center overflow-y-auto transition-all duration-300 ease-in-out [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
				open
					? "gap-lg"
					: "w-fit gap-xs divide-y divide-outline-variant self-center",
				className,
			)}
			ref={ref}
			{...props}
		>
			{!open && <SidebarToggle />}
			{children}
		</div>
	)
}
