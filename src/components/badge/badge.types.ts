import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"
import type { ComponentProps } from "react"

export const badgeVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap select-none transition-all px-2xs h-md gap-3xs style-text-default--2 rounded-full",
	{
		variants: {
			tone: {
				primary: "",
				secondary: "",
				neutral: "",
				error: "",
				success: "",
				warning: "",
			},
			style: {
				light: "",
				solid: "",
				outline: "bg-transparent outline",
			},
		},
		defaultVariants: {
			tone: "neutral",
			style: "light",
		},
		compoundVariants: [
			{
				tone: "primary",
				style: "light",
				className:
					"bg-primary-container text-on-primary-container border border-primary-outline",
			},
			{
				tone: "primary",
				style: "solid",
				className: "bg-primary text-on-primary",
			},
			{
				tone: "primary",
				style: "outline",
				className: "outline-primary text-primary",
			},
			{
				tone: "secondary",
				style: "light",
				className:
					"bg-secondary-container text-on-secondary-container border border-secondary-outline",
			},
			{
				tone: "secondary",
				style: "solid",
				className: "bg-secondary text-on-secondary",
			},
			{
				tone: "secondary",
				style: "outline",
				className: "outline-secondary text-secondary",
			},
			{
				tone: "neutral",
				style: "light",
				className: "bg-surface-bright border border-outline text-on-surface",
			},
			{
				tone: "neutral",
				style: "solid",
				className: "bg-surface-dim text-on-surface",
			},
			{
				tone: "neutral",
				style: "outline",
				className: "border border-outline text-on-surface",
			},
			{
				tone: "error",
				style: "light",
				className:
					"bg-error-container text-on-error-container border border-error-outline",
			},
			{
				tone: "error",
				style: "solid",
				className: "bg-error text-on-error",
			},
			{
				tone: "error",
				style: "outline",
				className: "outline-error text-error",
			},
			{
				tone: "success",
				style: "light",
				className:
					"bg-success-container text-on-success-container border border-success-outline",
			},
			{
				tone: "success",
				style: "solid",
				className: "bg-success text-on-success",
			},
			{
				tone: "success",
				style: "outline",
				className: "outline-success text-success",
			},
			{
				tone: "warning",
				style: "light",
				className:
					"bg-warning-container text-on-warning-container border border-warning-outline",
			},
			{
				tone: "warning",
				style: "solid",
				className: "bg-warning text-on-warning",
			},
			{
				tone: "warning",
				style: "outline",
				className: "outline-warning text-warning",
			},
		],
	},
)

type BadgeProps = ComponentProps<"div">

export interface BadgeExtendedProps
	extends Omit<BadgeProps, "style">,
		VariantProps<typeof badgeVariants> {
	style?: "light" | "solid" | "outline"
}
