import type { Tabs as BaseTabs } from "@base-ui/react/tabs"
import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"

export type TabsPanelProps = ComponentProps<typeof BaseTabs.Panel>
export type TabsTabProps = ComponentProps<typeof BaseTabs.Tab>
export type TabsIndicatorProps = ComponentProps<typeof BaseTabs.Indicator>
export type TabsListProps = ComponentProps<typeof BaseTabs.List>

export const tabsVariants = cva(
	"space-y-2xs gap-2xs rounded-md p-2xs shadow-xs overflow-hidden bg-surface-container border border-outline-variant",
	{
		variants: {
			style: {
				default: "",
				underline: "",
			},
			size: {
				small:
					"[&_[role=tab]]:style-text-default--1 [&_[role=tab]]:h-lg [&_[role=presentation]]:h-lg [&_ [&_[role=tab]]:px-sm [&_[role=tab]]:gap-2xs [&_[role=tablist]]:gap-2xs",
				medium:
					"[&_[role=tab]]:style-text-default-0 [&_[role=tab]]:h-xl [&_[role=presentation]]:h-xl [&_ [&_[role=tab]]:px-md [&_[role=tab]]:gap-xs [&_[role=tablist]]:gap-xs",
				large:
					"[&_[role=tab]]:style-text-default-1 [&_[role=tab]]:h-2xl [&_[role=presentation]]:h-2xl [&_ [&_[role=tab]]:px-lg [&_[role=tab]]:gap-sm [&_[role=tablist]]:gap-sm",
			},
			orientation: {
				horizontal: "",
				vertical: "",
			},
			shape: {
				circle:
					"[&_[role=tablist]]:rounded-full [&_[role=presentation]]:rounded-full [&_[role=tab]]:rounded-full",
				rounded: "[&_[role=tab]]:rounded-md",
			},
			fill: {
				true: "[&_[role=tablist]]:w-full [&_[role=tab]]:grow",
				false: "[&_[role=tablist]]:w-fit",
			},
		},
		defaultVariants: {
			style: "default",
			size: "small",
			orientation: "horizontal",
			shape: "rounded",
			fill: false,
		},
		compoundVariants: [
			{
				size: "small",
				shape: "rounded",
				className:
					"[&_[role=tablist]]:rounded-md [&_[role=presentation]]:rounded-md",
			},
			{
				size: "medium",
				shape: "rounded",
				className:
					"[&_[role=tablist]]:rounded-lg [&_[role=presentation]]:rounded-lg",
			},
			{
				size: "large",
				shape: "rounded",
				className:
					"[&_[role=tablist]]:rounded-xl [&_[role=presentation]]:rounded-xl",
			},
		],
	},
)

export interface TabsProps
	extends Omit<ComponentProps<typeof BaseTabs.Root>, "style" | "orientation">,
		VariantProps<typeof tabsVariants> {
	style?: "default" | "underline"
	orientation?: "horizontal" | "vertical"
}
