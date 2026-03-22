import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"
import type React from "react"

export const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap select-none transition-all disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
	{
		variants: {
			variant: {
				solid:
					"transition-colors transition-[border-color] transition-transform transition-opacity active:opacity-90 active:translate-y-px border border-outline-variant",
				ghost: "active:bg-surface-dim border border-transparent",
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
				xlarge:
					"h-3xl px-xl style-text-default-3 gap-md [&>svg]:size-lg rounded-3xl",
				large:
					"h-2xl px-lg style-text-default-1 gap-sm [&>svg]:size-md rounded-2xl",
				medium:
					"h-xl px-md style-text-default-0 gap-xs [&>svg]:size-sm rounded-xl",
				small:
					"h-lg px-sm style-text-default--1 gap-2xs [&>svg]:size-xs rounded-lg",
				xsmall:
					"h-md px-2xs style-text-default--2 gap-3xs [&>svg]:size-xs rounded-md",
				iconXLarge: "size-3xl [&>svg]:size-lg rounded-3xl",
				iconLarge: "size-2xl [&>svg]:size-md rounded-2xl",
				iconMedium: "size-xl [&>svg]:size-sm rounded-xl",
				iconSmall: "size-lg [&>svg]:size-xs rounded-lg",
				iconXSmall: "size-md [&>svg]:size-2xs rounded-md",
			},
		},
		defaultVariants: {
			variant: "solid",
			tone: "brand",
			size: "medium",
		},
		compoundVariants: [
			{
				variant: "solid",
				size: ["xlarge", "iconLarge"],
				class: "border-2",
			},
			{
				variant: "solid",
				size: ["large", "medium", "iconLarge", "iconMedium"],
				class: "border-1",
			},
			{
				variant: "solid",
				size: ["small", "xsmall", "iconSmall", "iconXSmall"],
				class: "border-[0.5px]",
			},
			{
				variant: "solid",
				size: ["xlarge", "iconXLarge"],
				className: "elevation-xl",
			},
			{
				variant: "solid",
				size: ["large", "iconLarge"],
				className: "elevation-lg",
			},
			{
				variant: "solid",
				size: ["medium", "iconMedium"],
				className: "elevation-md",
			},
			{
				variant: "solid",
				size: ["small", "iconSmall"],
				className: "elevation-sm",
			},
			{
				variant: "solid",
				size: ["xsmall", "iconXSmall"],
				className: "elevation-xs",
			},
			{
				variant: "solid",
				tone: "brand",
				class:
					"bg-brand not-active:hover:border-brand-outline text-on-surface-inverse dark:text-on-surface transition-[border-color]",
			},
			{
				variant: "solid",
				tone: "accent",
				class:
					"bg-accent not-active:hover:border-accent-outline text-on-surface-inverse dark:text-on-surface transition-[border-color]",
			},
			{
				variant: "solid",
				tone: "neutral",
				class:
					"bg-surface-bright not-active:hover:border-outline transition-[border-color]",
			},
			{
				variant: "solid",
				tone: "error",
				class:
					"bg-error not-active:hover:border-error-outline text-on-surface-inverse dark:text-on-surface transition-[border-color]",
			},
			{
				variant: "solid",
				tone: "info",
				class:
					"bg-info not-active:hover:border-info-outline text-on-surface-inverse dark:text-on-surface transition-[border-color]",
			},
			{
				variant: "solid",
				tone: "success",
				class:
					"bg-success not-active:hover:border-success-outline text-on-surface-inverse dark:text-on-surface transition-[border-color]",
			},
			{
				variant: "solid",
				tone: "warning",
				class:
					"bg-warning not-active:hover:border-warning-outline text-on-surface-inverse dark:text-on-surface transition-[border-color]",
			},
			{
				variant: "ghost",
				tone: "brand",
				className:
					"hover:bg-brand-container hover:text-on-brand-container hover:border-brand-outline",
			},
			{
				variant: "ghost",
				tone: "accent",
				className:
					"hover:bg-accent-container hover:text-on-accent-container hover:border-accent-outline",
			},
			{
				variant: "ghost",
				tone: "neutral",
				className:
					"hover:bg-surface-container hover:text-on-surface hover:border-outline",
			},
			{
				variant: "ghost",
				tone: "error",
				className:
					"hover:bg-error-container hover:text-on-error-container hover:border-error-outline",
			},
			{
				variant: "ghost",
				tone: "info",
				className:
					"hover:bg-info-container hover:text-on-info-container hover:border-info-outline",
			},
			{
				variant: "ghost",
				tone: "success",
				className:
					"hover:bg-success-container hover:text-on-success-container hover:border-success-outline",
			},
			{
				variant: "ghost",
				tone: "warning",
				className:
					"hover:bg-warning-container hover:text-on-warning-container hover:border-warning-outline",
			},
		],
	},
)

export type ButtonProps = React.ComponentProps<"button"> &
	VariantProps<typeof buttonVariants>
