import { cn } from "@/utils/cn"
import type { SidebarFooterProps } from "./sidebar.types"
import { useSidebar } from "./sidebar-provider"

export const SidebarFooter = ({
	className,
	children,
	ref,
	...props
}: SidebarFooterProps) => {
	const { open } = useSidebar()

	return (
		<div
			className={cn(
				"footer truncate p-2xs transition-all duration-300 ease-in-out",
				open ? "" : "max-w-2xl",
				className,
			)}
			ref={ref}
			{...props}
		>
			<div
				className={cn(
					"animate-in duration-150 ease-in",
					open ? "fade-in-0" : "fade-out-0",
				)}
			>
				{children}
			</div>
		</div>
	)
}
