import { cn } from "@/utils/cn"
import type { SidebarHeaderProps } from "./sidebar.types"
import { useSidebar } from "./sidebar-provider"

export const SidebarHeader = ({
	className,
	children,
	ref,
	...props
}: SidebarHeaderProps) => {
	const { open, collapsible } = useSidebar()

	// Determine if we should show expanded styles
	const isExpanded = collapsible === "none" || open

	return (
		<div
			className={cn(
				"style-text-strong-2 overflow-hidden truncate transition-all duration-300 ease-in-out",
				isExpanded ? "px-lg" : "max-w-2xl p-sm",
				className,
			)}
			ref={ref}
			{...props}
		>
			<div
				className={cn(
					"transition-all duration-200 ease-out",
					collapsible !== "none" && "animate-in",
					isExpanded ? "fade-in-0" : "fade-out-0",
				)}
			>
				{children}
			</div>
		</div>
	)
}
