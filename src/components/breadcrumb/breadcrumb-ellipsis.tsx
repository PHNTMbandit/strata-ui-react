import { DotsThreeIcon } from "@phosphor-icons/react"
import { cn } from "@/utils/cn"
import type { BreadcrumbEllipsisProps } from "./breadcrumb.types"

export const BreadcrumbEllipsis = ({
	className,
	children,
	ref,
	...props
}: BreadcrumbEllipsisProps) => {
	return (
		<div
			className={cn(
				"flex size-md items-center justify-center rounded-full text-surface-on-surface-variant [&>svg]:size-sm",
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
			<DotsThreeIcon weight="bold" />
		</div>
	)
}
