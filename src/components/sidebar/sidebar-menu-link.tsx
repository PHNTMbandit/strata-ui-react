import { cn } from "@/utils/cn"
import {
	type SidebarMenuLinkProps,
	sidebarMenuLinkVariants,
} from "./sidebar.types"
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
	const linkSize = showText ? size : "compact"

	return (
		<div
			className={cn(sidebarMenuLinkVariants({ size: linkSize, className }))}
			ref={ref}
			{...props}
		>
			<div
				className={cn(
					"flex h-fit w-full items-center gap-xs",
					isActive && "text-primary",
				)}
			>
				{Icon && <Icon className="shrink-0" weight="bold" />}
				{showText && (
					<span
						className={cn(
							"style-text-default-0 transition-all duration-200 ease-out",
							collapsible !== "none" &&
								open &&
								"slide-in-from-left-2 fade-in-0 animate-in",
							size === "compact" && "hidden",
						)}
					>
						{label}
					</span>
				)}
			</div>
			{showText && children}
		</div>
	)
}
