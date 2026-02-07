import { Collapsible as BaseCollapsible } from "@base-ui/react"
import { cn } from "@/utils/cn"
import type { CollapsibleTriggerProps } from "./collapsible.types"

export const CollapsibleTrigger = ({
	className,
	children,
	ref,
	...props
}: CollapsibleTriggerProps) => {
	return (
		<BaseCollapsible.Trigger
			className={cn("", className)}
			ref={ref}
			render={children as React.ReactElement}
			{...props}
		/>
	)
}
