import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"
import type { ComponentProps } from "react"

export const badgeVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap select-none transition-all rounded-full",
	{
		variants: {
			variant: {
				light: "outline",
				solid: "",
			},
			tone: {
				brand: "",
				accent: "",
				neutral: "",
				error: "",
				info: "",
				success: "",
				warning: "",
			},
			size: {
				small: "[&>svg]:size-xs style-text-default--2 px-2xs h-md gap-3xs",
				medium: "[&>svg]:size-sm style-text-default--1 px-xs h-lg gap-2xs",
				large: "[&>svg]:size-md style-text-default-2 px-sm h-xl gap-xs",
			},
		},
		defaultVariants: {
			size: "medium",
			variant: "light",
			tone: "neutral",
		},
		compoundVariants: [
			{
				tone: "brand",
				variant: "light",
				className:
					"bg-brand-container text-on-brand-container outline-brand-outline",
			},
			{
				tone: "brand",
				variant: "solid",
				className: "bg-brand text-on-brand",
			},
			{
				tone: "accent",
				variant: "light",
				className:
					"bg-accent-container text-on-accent-container outline-accent-outline",
			},
			{
				tone: "accent",
				variant: "solid",
				className: "bg-accent text-on-accent",
			},
			{
				tone: "neutral",
				variant: "light",
				className: "bg-surface-container outline-outline text-on-surface",
			},
			{
				tone: "neutral",
				variant: "solid",
				className: "bg-surface-container text-on-surface",
			},
			{
				tone: "error",
				variant: "light",
				className:
					"bg-error-container text-on-error-container outline-error-outline",
			},
			{
				tone: "error",
				variant: "solid",
				className: "bg-error text-on-error",
			},
			{
				tone: "info",
				variant: "light",
				className:
					"bg-info-container text-on-info-container outline-info-outline",
			},
			{
				tone: "info",
				variant: "solid",
				className: "bg-info text-on-info",
			},
			{
				tone: "success",
				variant: "light",
				className:
					"bg-success-container text-on-success-container outline-success-outline",
			},
			{
				tone: "success",
				variant: "solid",
				className: "bg-success text-on-success",
			},
			{
				tone: "warning",
				variant: "light",
				className:
					"bg-warning-container text-on-warning-container outline-warning-outline",
			},
			{
				tone: "warning",
				variant: "solid",
				className: "bg-warning text-on-warning",
			},
		],
	},
)

export type BadgeExtendedProps = ComponentProps<"div"> &
	VariantProps<typeof badgeVariants>
