import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"
import type { ComponentProps } from "react"

export const breadcrumbVariants = cva(
	"flex items-center gap-2xs px-sm py-2xs",
	{
		variants: {
			style: {
				ghost: "",
				solid: "",
				outline: "",
			},
		},
		defaultVariants: {
			style: "ghost",
		},
	},
)

export interface BreadcrumbProps
	extends Omit<ComponentProps<"div">, "style">,
		VariantProps<typeof breadcrumbVariants> {
	style?: "ghost" | "solid" | "outline"
}
export type BreadcrumbItemProps = React.ComponentProps<"div">
export type BreadcrumbLinkProps = React.ComponentProps<"div">
export type BreadcrumbEllipsisProps = React.ComponentProps<"div">
export type BreadcrumbSeparatorProps = React.ComponentProps<"div">
