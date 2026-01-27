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
				"flex grow flex-col overflow-y-auto overflow-x-hidden pt-md pb-md transition-all duration-300 ease-in-out",
				open
					? "gap-lg pr-xs pl-sm"
					: "gap-xs divide-y divide-outline-variant pr-0 pl-sm",
				hideScrollbar && "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
				className,
			)}
			ref={ref}
			style={{
				scrollbarGutter: "stable",
				msOverflowStyle: hideScrollbar ? "none" : "auto",
				maskImage:
					"linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)",
			}}
			{...props}
		>
			{children}
		</div>
	)
}
