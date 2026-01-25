import { AxeIcon, BoatIcon, CloudIcon } from "@phosphor-icons/react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Tabs } from "./tabs"
import { TabsIndicator } from "./tabs-indicator"
import { TabsList } from "./tabs-list"
import { TabsPanel } from "./tabs-panel"
import { TabsTab } from "./tabs-tab"

export default {
	title: "Components/Tabs",
	component: Tabs,
	subcomponents: { TabsIndicator, TabsList, TabsPanel, TabsTab },
	parameters: {
		docs: {
			subtitle: "A component for organizing content into separate views",
			description: {
				component:
					"The Tabs component allows users to navigate between different sections of content within the same context. Each tab corresponds to a specific panel that displays relevant information when selected. This component is useful for organizing related content and improving user experience by reducing clutter on the page.",
			},
		},
	},
	args: {
		orientation: "vertical",
	},
	argTypes: {
		orientation: {
			control: { type: "radio" },
			options: ["horizontal", "vertical"],
			description:
				"Defines the orientation of the Tabs component, either horizontal or vertical.",
		},
	},
	render: (args) => {
		return (
			<div className="w-[500px]">
				<Tabs defaultValue="tab1" {...args}>
					<TabsList>
						<TabsTab value="tab1">Tab 1</TabsTab>
						<TabsTab value="tab2">Tab 2</TabsTab>
						<TabsTab value="tab3">Tab 3</TabsTab>
						<TabsIndicator />
					</TabsList>
					<TabsPanel value="tab1">Content for Tab 1</TabsPanel>
					<TabsPanel value="tab2">Content for Tab 2</TabsPanel>
					<TabsPanel value="tab3">Content for Tab 3</TabsPanel>
				</Tabs>
			</div>
		)
	},
} satisfies Meta<typeof Tabs>

type Story = StoryObj<typeof Tabs>

export const Horizontal: Story = {
	args: {
		orientation: "horizontal",
	},
}

export const Vertical: Story = {
	args: {
		orientation: "vertical",
	},
	render: (args) => {
		return (
			<div className="h-[400px]">
				<Tabs defaultValue="tab1" {...args}>
					<TabsList>
						<TabsTab value="tab1">
							<BoatIcon />
						</TabsTab>
						<TabsTab value="tab2">
							<CloudIcon />
						</TabsTab>
						<TabsTab value="tab3">
							<AxeIcon />
						</TabsTab>
						<TabsIndicator />
					</TabsList>
					<TabsPanel value="tab1">Content for Tab 1</TabsPanel>
					<TabsPanel value="tab2">Content for Tab 2</TabsPanel>
					<TabsPanel value="tab3">Content for Tab 3</TabsPanel>
				</Tabs>
			</div>
		)
	},
}
