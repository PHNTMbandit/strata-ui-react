import type { Tabs as BaseTabs } from "@base-ui/react/tabs"
import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"

export type TabsPanelProps = ComponentProps<typeof BaseTabs.Panel>
export type TabsTabProps = ComponentProps<typeof BaseTabs.Tab>
export type TabsIndicatorProps = ComponentProps<typeof BaseTabs.Indicator>
export type TabsListProps = ComponentProps<typeof BaseTabs.List>

export const tabsVariants = cva(
	"space-y-2xs gap-2xs rounded-md bg-surface-bright p-2xs inset-shadow-raised-sm shadow-sm",
	{
		variants: {
			style: {
				default:
					"[&_[role=tablist]]:bg-surface-dim [&_[role=tablist]]:overflow-hidden",
				minimal: "",
				underline: "",
			},
			size: {
				small:
					"[&_[role=tab]]:style-text-default--1 [&_[role=tab]]:h-lg [&_[role=presentation]]:h-lg [&_[role=presentation]]:inset-shadow-raised-sm [&_[role=presentation]]:shadow-sm [&_[role=tab]]:px-sm [&_[role=tab]]:gap-2xs [&_[role=tablist]]:gap-2xs",
				medium:
					"[&_[role=tab]]:style-text-default-0 [&_[role=tab]]:h-xl [&_[role=presentation]]:h-xl [&_[role=presentation]]:inset-shadow-raised-md [&_[role=presentation]]:shadow-md [&_[role=tab]]:px-md [&_[role=tab]]:gap-xs [&_[role=tablist]]:gap-xs",
				large:
					"[&_[role=tab]]:style-text-default-1 [&_[role=tab]]:h-2xl [&_[role=presentation]]:h-2xl [&_[role=presentation]]:inset-shadow-raised-lg [&_[role=presentation]]:shadow-lg [&_[role=tab]]:px-lg [&_[role=tab]]:gap-sm [&_[role=tablist]]:gap-sm",
			},
			orientation: {
				horizontal: "",
				vertical: "",
			},
			shape: {
				circle:
					"[&_[role=tablist]]:rounded-full [&_[role=presentation]]:rounded-full",
				rounded: "",
			},
			fill: {
				true: "[&_[role=tablist]]:w-full [&_[role=tab]]:grow",
				false: "[&_[role=tablist]]:w-fit",
			},
		},
		defaultVariants: {
			style: "minimal",
			size: "small",
			orientation: "horizontal",
			shape: "rounded",
			fill: false,
		},
		compoundVariants: [
			{
				size: "small",
				style: "default",
				className:
					"[&_[role=tab]]:m-xs [&_[role=tablist]]:inset-shadow-sm [&_[role=tablist]]:gap-xs",
			},
			{
				size: "medium",
				style: "default",
				className:
					"[&_[role=tab]]:m-sm [&_[role=tablist]]:inset-shadow-md [&_[role=tablist]]:gap-sm",
			},
			{
				size: "large",
				style: "default",
				className:
					"[&_[role=tab]]:m-md [&_[role=tablist]]:inset-shadow-lg [&_[role=tablist]]:gap-md",
			},
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
	style?: "default" | "minimal" | "underline"
	orientation?: "horizontal" | "vertical"
}
