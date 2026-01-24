import { PlusIcon } from "@phosphor-icons/react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "./button"

export default {
	title: "Components/Button",
	component: Button,
	parameters: {
		docs: {
			subtitle: "Displays a button or a component that looks like a button.",
			description: {
				component:
					"The Button component is a versatile and reusable UI element that allows users to perform actions with a single click. It supports various tones, styles, and sizes to fit different design needs and contexts. Buttons can be used for form submissions, triggering events, or navigating between views.",
			},
		},
	},
	args: {
		children: "Click Me",
		size: "medium",
		style: "solid",
		tone: "primary",
		disabled: false,
	},
	argTypes: {
		tone: {
			control: "select",
			options: [
				"primary",
				"secondary",
				"accent",
				"neutral",
				"error",
				"success",
				"warning",
				"glass",
			],
		},
		style: {
			control: "radio",
			options: ["solid", "outline", "ghost"],
		},
		size: {
			control: "radio",
			options: ["small", "medium", "large"],
		},
	},
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof Button>

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

export const Ghost: Story = {
	args: {
		style: "ghost",
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

export const IconSmall: Story = {
	args: {
		children: <PlusIcon weight="bold" />,
		size: "iconSmall",
	},
}

export const IconMedium: Story = {
	args: {
		children: <PlusIcon weight="bold" />,
		size: "iconMedium",
	},
}

export const IconLarge: Story = {
	args: {
		children: <PlusIcon weight="bold" />,
		size: "iconLarge",
	},
}
