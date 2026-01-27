import { Collapsible as BaseCollapsible } from "@base-ui/react/collapsible"
import { CaretRightIcon } from "@phosphor-icons/react"
import { cn } from "@/utils/cn"
import { PopoverTrigger } from "../popover"
import {
	type SidebarSubMenuTriggerProps,
	sidebarSubMenuTriggerVariants,
} from "./sidebar.types"
import { useSidebar } from "./sidebar-provider"

export const SidebarSubMenuTrigger = ({
	leadingIcon: Icon,
	label,
	size,
	className,
	children,
	ref,
	...props
}: SidebarSubMenuTriggerProps) => {
	const { open, collapsible } = useSidebar()

	// Determine if we should show text based on collapsible type and open state
	const showText = collapsible === "none" || open

	// Determine size based on collapsible type and open state
	const triggerSize = showText ? size : "compact"

	if (!showText) {
		return (
			<PopoverTrigger
				className={cn(
					sidebarSubMenuTriggerVariants({
						size: triggerSize,
						className,
					}),
					"relative",
				)}
			>
				{children}
				{Icon && (
					<Icon
						className="block size-sm shrink-0 group-data-active:hidden"
						weight="bold"
					/>
				)}
				<CaretRightIcon
					className="absolute right-[4px] size-2xs"
					weight="bold"
				/>
			</PopoverTrigger>
		)
	}

	return (
		<BaseCollapsible.Trigger
			className={cn(
				sidebarSubMenuTriggerVariants({
					size: triggerSize,
					className,
				}),
			)}
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
			{showText && (
				<div
					className={cn(
						"transition-all duration-200 ease-out",
						collapsible !== "none" &&
							open &&
							"slide-in-from-left-2 fade-in-0 animate-in",
					)}
				>
					{children}
				</div>
			)}
			{showText && (
				<CaretRightIcon
					className={cn(
						"size-xs transition-all duration-300 ease-out group-data-panel-open:rotate-90",
						collapsible !== "none" &&
							open &&
							"slide-in-from-right-2 fade-in-0 animate-in",
					)}
					weight="bold"
				/>
			)}
		</BaseCollapsible.Trigger>
	)
}
