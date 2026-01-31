import { CodeIcon, EyeIcon } from "@phosphor-icons/react"
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
		style: "minimal",
		size: "small",
		orientation: "vertical",
		shape: "rounded",
		fill: false,
	},
	argTypes: {
		style: {
			control: { type: "radio" },
			options: ["default", "minimal", "underline"],
			description:
				"Defines the visual style of the Tabs component, such as default, minimal, or underline.",
		},
		size: {
			control: { type: "radio" },
			options: ["small", "medium", "large"],
			description:
				"Specifies the size of the Tabs component, affecting the overall dimensions of the tabs and panels.",
		},
		orientation: {
			control: { type: "radio" },
			options: ["horizontal", "vertical"],
			description:
				"Defines the orientation of the Tabs component, either horizontal or vertical.",
		},
		shape: {
			control: { type: "radio" },
			options: ["circle", "rounded"],
			description:
				"Specifies the shape of the tabs within the Tabs component, such as circle or rounded.",
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
}

export const Small: Story = {
	args: {
		size: "small",
	},
}

export const Medium: Story = {
	args: {
		size: "medium",
	},
}

export const Large: Story = {
	args: {
		size: "large",
	},
}

export const MinimalStyle: Story = {
	args: {
		style: "minimal",
	},
}

export const UnderlineStyle: Story = {
	args: {
		style: "underline",
	},
}

export const CircleShape: Story = {
	args: {
		shape: "circle",
	},
}

export const RoundedShape: Story = {
	args: {
		shape: "rounded",
	},
}

export const FillTrue: Story = {
	args: {
		fill: true,
	},
}

export const CodeBlock: Story = {
	args: {
		style: "minimal",
		size: "small",
		orientation: "horizontal",
		shape: "rounded",
		fill: false,
	},
	render: (args) => {
		return (
			<div className="w-[500px]">
				<Tabs defaultValue="tab1" {...args}>
					<TabsList>
						<TabsTab value="preview">
							<EyeIcon weight="bold" />
							Preview
						</TabsTab>
						<TabsTab value="code">
							<CodeIcon weight="bold" />
							Code
						</TabsTab>
						<TabsIndicator />
					</TabsList>
					<TabsPanel value="preview">Content for Tab 1</TabsPanel>
					<TabsPanel value="code">Content for Tab 2</TabsPanel>
				</Tabs>
			</div>
		)
	},
}
