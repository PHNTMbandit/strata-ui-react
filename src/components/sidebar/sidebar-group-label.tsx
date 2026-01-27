import { cn } from "@/utils/cn"
import type { SidebarGroupLabelProps } from "./sidebar.types"
import { useSidebar } from "./sidebar-provider"

export const SidebarGroupLabel = ({
	className,
	children,
	ref,
	...props
}: SidebarGroupLabelProps) => {
	const { open, collapsible } = useSidebar()

	// Show label if sidebar is non-collapsible or when it's open
	const showLabel = collapsible === "none" || open

	if (!showLabel) {
		return null
	}

	return (
		<span
			className={cn(
				"style-text-default--2 truncate pl-sm text-on-surface-variant uppercase transition-all duration-200 ease-out",
				collapsible !== "none" &&
					open &&
					"slide-in-from-left-2 fade-in-0 animate-in",
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
		</span>
	)
}
