import { cn } from "@/utils/cn"
import type { CollapsiblePanelProps } from "./collapsible.types"

export const CollapsiblePanel = ({
	className,
	children,
	ref,
	...props
}: CollapsiblePanelProps) => {
	return (
		<div
			className={cn(
				"flex h-(--collapsible-panel-height) flex-col justify-end overflow-hidden transition-all duration-150 ease-out data-ending-style:h-[0px] data-starting-style:h-[0px] [&[hidden]:not([hidden='until-found'])]:hidden",
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
		</div>
	)
}
