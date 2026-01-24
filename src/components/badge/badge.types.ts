import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"
import type { ComponentProps } from "react"

export const badgeVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap select-none transition-all px-2xs h-md gap-3xs style-text-default--2",
	{
		variants: {
			tone: {
				primary: "",
				secondary: "",
				accent: "",
				neutral: "",
				neutralVariant: "",
				inverse: "",
				error: "",
				success: "",
				warning: "",
			},
			style: {
				solid: "inset-shadow-raised-xs shadow-xs",
				outline: "bg-transparent outline",
			},
			radius: {
				rounded: "rounded-md",
				circle: "rounded-full",
			},
		},
		defaultVariants: {
			tone: "neutral",
			style: "solid",
			radius: "rounded",
		},
		compoundVariants: [
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
				style: "solid",
				className: "bg-secondary text-on-secondary",
			},
			{
				tone: "secondary",
				style: "outline",
				className: "outline-secondary text-secondary",
			},
			{
				tone: "accent",
				style: "solid",
				className: "bg-accent text-on-accent",
			},
			{
				tone: "accent",
				style: "outline",
				className: "outline-accent text-accent",
			},
			{
				tone: "neutral",
				style: "solid",
				className: "bg-surface-container",
			},
			{
				tone: "neutral",
				style: "outline",
				className: "outline-on-surface text-on-surface",
			},
			{
				tone: "neutralVariant",
				style: "solid",
				className: "bg-on-surface-variant text-surface",
			},
			{
				tone: "neutralVariant",
				style: "outline",
				className: "outline-on-surface-variant text-on-surface-variant",
			},
			{
				tone: "inverse",
				style: "outline",
				className: "outline-on-surface-variant text-on-surface-variant",
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
	style?: "solid" | "outline"
	radius?: "rounded" | "circle"
}
