import { cn } from "@/utils/cn"
import { Button } from "../button"
import type { SidebarMenuLinkProps } from "./sidebar.types"
import { useSidebar } from "./sidebar-provider"

export const SidebarMenuLink = ({
	isActive,
	size,
	label,
	leadingIcon: Icon,
	className,
	children,
	ref,
	...props
}: SidebarMenuLinkProps) => {
	const { open, collapsible } = useSidebar()
	const showText = collapsible === "none" || open

	return (
		<Button
			className={cn(
				"w-full",
				isActive && "text-primary",
				className,
				!showText && "mx-auto",
				open && "justify-start",
			)}
			ref={ref}
			size={open ? "medium" : "iconMedium"}
			variant={"ghost"}
			{...props}
		>
			{Icon && <Icon weight="bold" />}
			{showText && (
				<span
					className={cn(
						"style-text-default-0 transition-all duration-200 ease-out",
						collapsible !== "none" &&
							open &&
							"slide-in-from-left-2 fade-in-0 animate-in",
					)}
				>
					{label}
				</span>
			)}
			{showText && children}
		</Button>
	)
}
