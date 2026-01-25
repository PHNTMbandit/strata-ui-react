import type { Meta, StoryObj } from "@storybook/react-vite"
import { Badge } from "./badge"

export default {
	title: "Components/Badge",
	component: Badge,
	parameters: {
		docs: {
			subtitle: "Displays a small badge to indicate status or count.",
			description: {
				component:
					"The Badge component is a compact element used to display status information, counts, or labels. It can be styled with different tones and sizes to fit various design requirements. Badges are commonly used in user interfaces to highlight new notifications, statuses, or categories.",
			},
		},
	},
	args: {
		children: "Badge",
		radius: "rounded",
		style: "solid",
		tone: "primary",
	},
	argTypes: {
		tone: {
			control: "select",
			options: [
				"primary",
				"secondary",
				"accent",
				"neutral",
				"neutralVariant",
				"error",
				"success",
				"warning",
			],
		},
		style: {
			control: "radio",
			options: ["solid", "outline"],
		},
		radius: {
			control: "radio",
			options: ["rounded", "circle"],
		},
	},
} satisfies Meta<typeof Badge>

type Story = StoryObj<typeof Badge>

export const Primary: Story = {
	args: {
		tone: "primary",
	},
}

export const Secondary: Story = {
	args: {
		tone: "secondary",
	},
}

export const Accent: Story = {
	args: {
		tone: "accent",
	},
}

export const Neutral: Story = {
	args: {
		tone: "neutral",
	},
}

export const NeutralVariant: Story = {
	args: {
		tone: "neutralVariant",
	},
}

// biome-ignore lint/suspicious/noShadowRestrictedNames: This is a story name
export const Error: Story = {
	args: {
		tone: "error",
	},
}

export const Success: Story = {
	args: {
		tone: "success",
	},
}

export const Warning: Story = {
	args: {
		tone: "warning",
	},
}

export const Solid: Story = {
	args: {
		style: "solid",
	},
}

export const Outline: Story = {
	args: {
		style: "outline",
	},
}

export const Rounded: Story = {
	args: {
		radius: "rounded",
	},
}

export const Circle: Story = {
	args: {
		radius: "circle",
	},
}
