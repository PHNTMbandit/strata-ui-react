import type { Accordion as BaseAccordion } from "@base-ui/react/accordion"
import type { Icon } from "@phosphor-icons/react"
import { cva, type VariantProps } from "class-variance-authority"
import type React from "react"

export type AccordionProps = React.ComponentProps<typeof BaseAccordion.Root>
export type AccordionPanelProps = React.ComponentProps<
	typeof BaseAccordion.Panel
> & {
	heading?: string
}

export const accordionItemVariants = cva(
	"group transition-all hover:bg-surface-base-bright data-open:bg-surface-base-bright not-hover:data-open:elevated-md rounded-lg",
	{
		variants: {
			tone: {
				brand:
					"[&_[data-icon]]:text-brand-on-surface [&_[data-panel]]:bg-brand-container [&_h1,h2,h3,h4,h5,h6]:text-brand-on-container-variant [&_p]:text-brand-on-container hover:elevated-shadow-brand-md ",
				accent:
					"[&_[data-icon]]:text-accent-on-surface [&_[data-panel]]:bg-accent-container [&_h1,h2,h3,h4,h5,h6]:text-accent-on-container-variant [&_p]:text-accent-on-container hover:elevated-shadow-accent-md ",
				neutral:
					"[&_[data-icon]]:text-on-surface [&_[data-panel]]:bg-surface-base-dim [&_h1,h2,h3,h4,h5,h6]:text-on-surface-variant [&_p]:text-on-surface hover:elevated-shadow-neutral-md ",
				error:
					"[&_[data-icon]]:text-error-on-surface [&_[data-panel]]:bg-error-container [&_h1,h2,h3,h4,h5,h6]:text-error-on-container-variant [&_p]:text-error-on-container hover:elevated-shadow-error-md ",
				info: "[&_[data-icon]]:text-info-on-surface [&_[data-panel]]:bg-info-container [&_h1,h2,h3,h4,h5,h6]:text-info-on-container-variant [&_p]:text-info-on-container hover:elevated-shadow-info-md ",
				success:
					"[&_[data-icon]]:text-success-on-surface [&_[data-panel]]:bg-success-container [&_h1,h2,h3,h4,h5,h6]:text-success-on-container-variant [&_p]:text-success-on-container hover:elevated-shadow-success-md ",
				warning:
					"[&_[data-icon]]:text-warning-on-surface [&_[data-panel]]:bg-warning-container [&_h1,h2,h3,h4,h5,h6]:text-warning-on-container-variant [&_p]:text-warning-on-container hover:elevated-shadow-warning-md ",
			},
		},
		defaultVariants: {
			tone: "neutral",
		},
	},
)

export type AccordionItemProps = React.ComponentProps<
	typeof BaseAccordion.Item
> &
	VariantProps<typeof accordionItemVariants> &
	React.ComponentProps<typeof BaseAccordion.Trigger>

export type AccordionTriggerProps = React.ComponentProps<
	typeof BaseAccordion.Trigger
> & {
	title: string
	subtitle?: string
	icon?: Icon
}
