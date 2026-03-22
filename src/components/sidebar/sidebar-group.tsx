import { cn } from "@/utils/cn"
import type { SidebarGroupProps } from "./sidebar.types"

export const SidebarGroup = ({
	className,
	children,
	ref,
	...props
}: SidebarGroupProps) => {
	return (
		<div
			className={cn(
				"flex w-full flex-col items-start gap-3xs not-last:pb-xs",
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
		</div>
	)
}
