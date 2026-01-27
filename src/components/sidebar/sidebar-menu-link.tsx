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

	// Determine if we should show text based on collapsible type and open state
	const showText = collapsible === "none" || open

	// Determine size based on collapsible type and open state
	const linkSize = showText ? size : "compact"

	return (
		<div
			className={cn(sidebarMenuLinkVariants({ size: linkSize, className }))}
			data-active={isActive ? true : undefined}
			ref={ref}
			{...props}
		>
			<div className="flex h-fit w-full items-center gap-xs">
				{Icon && (
					<Icon
						className="block size-sm shrink-0 group-data-active:hidden"
						weight="bold"
					/>
				)}
				{Icon && (
					<Icon
						className="hidden size-sm shrink-0 group-data-active:block"
						weight="fill"
					/>
				)}
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
