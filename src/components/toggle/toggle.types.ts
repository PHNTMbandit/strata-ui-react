import type { Toggle, ToggleState } from "@base-ui/react"
import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export const toggleVariants = cva(
	"flex items-center justify-center transition-all hover:cursor-pointer text-on-surface-variant not-disabled:active:inset-shadow-xs not-disabled:not-active:hover:shadow-xs disabled:opacity-70",
	{
		variants: {
			size: {
				iconSmall: "size-sm rounded-sm [&>svg]:size-xs",
				iconMedium: "size-md rounded-md [&>svg]:size-sm",
				iconLarge: "size-lg rounded-lg [&>svg]:size-md",
				small:
					"h-sm px-3xs gap-3xs rounded-sm style-text-default--2 [&>svg]:size-xs",
				medium:
					"h-md px-2xs gap-2xs rounded-md style-text-default--1 [&>svg]:size-sm",
				large:
					"h-lg px-xs gap-xs rounded-lg style-text-default-0 [&>svg]:size-md",
			},
			tone: {
				primary:
					"not-disabled:hover:bg-primary-container not-disabled:hover:text-on-primary-container data-pressed:text-primary",
				secondary:
					"not-disabled:hover:bg-secondary-container not-disabled:hover:text-on-secondary-container data-pressed:text-secondary",
				neutral:
					"not-disabled:hover:not-active:bg-surface-container-low active:bg-surface-dim not-disabled:hover:text-on-surface-container data-pressed:text-on-surface",
				error:
					"not-disabled:hover:bg-error-container not-disabled:hover:text-on-error-container data-pressed:text-error",
				success:
					"not-disabled:hover:bg-success-container not-disabled:hover:text-on-success-container data-pressed:text-success",
				warning:
					"not-disabled:hover:bg-warning-container not-disabled:hover:text-on-warning-container data-pressed:text-warning",
			},
		},
		defaultVariants: {
			size: "medium",
			tone: "primary",
		},
	},
)

export type ToggleProps = Omit<
	React.ComponentProps<typeof Toggle>,
	"children"
> &
	VariantProps<typeof toggleVariants> & {
		children?: React.ReactNode | ((state: ToggleState) => React.ReactNode)
	}
