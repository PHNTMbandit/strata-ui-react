import { CaretRightIcon } from "@phosphor-icons/react"
import { cn } from "@/utils/cn"
import type { BreadcrumbSeparatorProps } from "./breadcrumb.types"

export const BreadcrumbSeparator = ({
	className,
	ref,
	...props
}: BreadcrumbSeparatorProps) => {
	return (
		<div
			className={cn(
				"flex size-md items-center justify-center rounded-full text-on-primary-container [&>svg]:size-sm",
				className,
			)}
			ref={ref}
			{...props}
		>
			<CaretRightIcon weight="bold" />
		</div>
	)
}
