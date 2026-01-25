import { cn } from "@/utils/cn"
import type { SidebarContentProps } from "./sidebar.types"
import { useSidebar } from "./sidebar-provider"

export const SidebarContent = ({
	className,
	children,
	ref,
	...props
}: SidebarContentProps) => {
	const { open } = useSidebar()

	return (
		<div
			className={cn(
				"flex grow flex-col overflow-y-auto overflow-x-hidden transition-all duration-300 ease-in-out",
				open
					? "gap-md pr-xs pl-sm"
					: "gap-xs divide-y divide-outline-variant pr-0 pl-sm",
				className,
			)}
			ref={ref}
			style={{
				scrollbarGutter: "stable",
			}}
			{...props}
		>
			{children}
		</div>
	)
}
