import { cva, type VariantProps } from "class-variance-authority"

export const alertVariants = cva(
	"group transition-all rounded-lg p-sm border space-y-3xs",
	{
		variants: {
			tone: {
				brand:
					"bg-brand-container [&>[data-description]]:text-on-brand-container-variant [&_svg]:text-on-brand-container text-on-brand-container border-brand-outline",
				accent:
					"bg-accent-container [&>[data-description]]:text-on-accent-container-variant [&_svg]:text-on-accent-container text-on-accent-container border-accent-outline",
				neutral:
					"bg-surface-container [&>[data-description]]:text-on-surface-variant [&_svg]:text-on-surface text-on-surface border-outline",
				error:
					"bg-error-container [&>[data-description]]:text-on-error-container-variant [&_svg]:text-on-error-container text-on-error-container border-error-outline",
				info: "bg-info-container [&>[data-description]]:text-on-info-container-variant [&_svg]:text-on-info-container text-on-info-container border-info-outline",
				success:
					"bg-success-container [&>[data-description]]:text-on-success-container-variant [&_svg]:text-on-success-container text-on-success-container border-success-outline",
				warning:
					"bg-warning-container [&>[data-description]]:text-on-warning-container-variant [&_svg]:text-on-warning-container text-on-warning-container border-warning-outline",
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
