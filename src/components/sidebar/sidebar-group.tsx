import { cn } from "@/utils/cn"
import type { SidebarGroupProps } from "./sidebar.types"
import { useSidebar } from "./sidebar-provider"

export const SidebarGroup = ({
	className,
	children,
	ref,
	...props
}: SidebarGroupProps) => {
	const { open } = useSidebar()

	return (
		<div
			className={cn(
				"flex w-full flex-col items-center gap-3xs p-3xs not-last:pb-xs",
				open && "items-start",
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
		</div>
	)
}
