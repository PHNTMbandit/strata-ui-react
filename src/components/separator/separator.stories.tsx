import type { Meta, StoryObj } from "@storybook/react-vite"
import { Separator } from "./separator"

export default {
	title: "Components/Separator",
	component: Separator,
	parameters: {
		docs: {
			subtitle: "Displays a horizontal or vertical separator line.",
			description: {
				component:
					"The Separator component is used to visually divide content within a user interface. It can be oriented horizontally or vertically and helps to organize information, making it easier for users to navigate and understand the layout. Separators are commonly used in lists, menus, and between sections of content.",
			},
		},
	},
	args: {
		tone: "default",
		orientation: "horizontal",
		thickness: "medium",
	},
	argTypes: {
		tone: {
			control: "radio",
			options: ["default", "variant"],
		},
		orientation: {
			control: "radio",
			options: ["horizontal", "vertical"],
		},
		thickness: {
			control: "radio",
			options: ["thick", "medium", "thin"],
		},
	},
	render: (args) => (
		<div
			style={{
				height: args.orientation === "vertical" ? "250px" : "auto",
				width: args.orientation === "vertical" ? "auto" : "500px",
			}}
		>
			<Separator {...args} />
		</div>
	),
} satisfies Meta<typeof Separator>

type Story = StoryObj<typeof Separator>

export const Default: Story = {
	args: {
		tone: "default",
	},
}

export const Variant: Story = {
	args: {
		tone: "variant",
	},
}

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

export const Thin: Story = {
	args: {
		thickness: "thin",
	},
}

export const Medium: Story = {
	args: {
		thickness: "medium",
	},
}

export const Thick: Story = {
	args: {
		thickness: "thick",
	},
}
