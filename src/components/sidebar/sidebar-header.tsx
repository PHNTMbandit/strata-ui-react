import { cn } from "@/utils/cn"
import type { SidebarHeaderProps } from "./sidebar.types"
import { useSidebar } from "./sidebar-provider"
import { SidebarToggle } from "./sidebar-toggle"

export const SidebarHeader = ({
	className,
	children,
	ref,
	...props
}: SidebarHeaderProps) => {
	const { open, collapsible } = useSidebar()
	const isExpanded = collapsible === "none" || open

	return (
		<div
			className={cn(
				"style-text-strong-1 flex shrink-0 items-center justify-between overflow-hidden truncate transition-all duration-300 ease-in-out",
				isExpanded && "pl-sm",
				open && "p-3xs py-xs pr-2xs",
				!open && "self-center",
				className,
			)}
			ref={ref}
			{...props}
		>
			<div
				className={cn(
					"flex items-center justify-center gap-xs transition-all duration-200 ease-out",
					open && "justify-start",
					collapsible !== "none" && "animate-in",
					isExpanded ? "fade-in-0" : "fade-out-0",
				)}
			>
				{children}
			</div>
			{open && <SidebarToggle />}
		</div>
	)
}
