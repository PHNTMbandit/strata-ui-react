import { cn } from "@/utils/cn"
import type { BreadcrumbItemProps } from "./breadcrumb.types"

export const BreadcrumbItem = ({
	className,
	children,
	ref,
	...props
}: BreadcrumbItemProps) => {
	return (
		<div
			className={cn(
				"style-text-default--1 inline-flex h-md items-center justify-center gap-3xs text-surface-on-surface-variant [&>svg]:size-xs",
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
		</div>
	)
}
