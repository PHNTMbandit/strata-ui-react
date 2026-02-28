import { SidebarSimpleIcon } from "@phosphor-icons/react"
import { cn } from "@/utils/cn"
import { Button } from "../button"
import type { SidebarToggleProps } from "./sidebar.types"
import { useSidebar } from "./sidebar-provider"

export const SidebarToggle = ({
	className,
	children,
	ref,
	...props
}: SidebarToggleProps) => {
	const { trigger, collapsible } = useSidebar()

	if (collapsible === "none") {
		return null
	}

	const handleClick = (e: React.MouseEvent) => {
		e.stopPropagation()
		if (trigger) {
			trigger()
		}
	}

	return (
		<Button
			className={cn(
				"shrink-0 border-none hover:bg-surface-container-mid!",
				className,
			)}
			ref={ref}
			size={"iconMedium"}
			style="ghost"
			{...props}
			onClick={handleClick}
		>
			{children}
			<SidebarSimpleIcon weight="bold" />
		</Button>
	)
}
