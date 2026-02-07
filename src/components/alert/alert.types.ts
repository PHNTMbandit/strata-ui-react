import { cva, type VariantProps } from "class-variance-authority"

export const alertVariants = cva(
	"group transition-all rounded-lg p-sm border space-y-xs shadow-sm inset-shadow-raised-sm",
	{
		variants: {
			tone: {
				primary:
					"bg-primary-container [&_svg]:text-on-primary-container text-on-primary-container border-primary",
				secondary:
					"bg-secondary-container [&_svg]:text-on-secondary-container text-on-secondary-container border-secondary",
				neutral:
					"bg-surface-container-mid [&_svg]:text-on-surface text-on-surface border-outline",
				error:
					"bg-error-container [&_svg]:text-on-error-container text-on-error-container border-error",
				success:
					"bg-success-container [&_svg]:text-on-success-container text-on-success-container border-success",
				warning:
					"bg-warning-container [&_svg]:text-on-warning-container text-on-warning-container border-warning",
			},
		},
		defaultVariants: {
			tone: "error",
		},
	},
)

export type AlertProps = React.ComponentProps<"div"> &
	VariantProps<typeof alertVariants>
export type AlertHeaderProps = React.ComponentProps<"div">
export type AlertDescriptionProps = React.ComponentProps<"div">
