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
				"style-text-default--1 inline-flex h-md items-center justify-center gap-3xs rounded-full text-on-primary-container-variant [&>svg]:size-xs",
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
		</div>
	)
}
