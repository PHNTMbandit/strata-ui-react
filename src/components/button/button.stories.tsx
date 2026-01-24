import { PlusIcon } from "@phosphor-icons/react"
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
}

export const Primary = {
	args: {
		tone: "primary",
	},
}

export const Secondary = {
	args: {
		tone: "secondary",
	},
}

export const Accent = {
	args: {
		tone: "accent",
	},
}

export const Neutral = {
	args: {
		tone: "neutral",
	},
}

// biome-ignore lint/suspicious/noShadowRestrictedNames: This is a story name
export const Error = {
	args: {
		tone: "error",
	},
}

export const Success = {
	args: {
		tone: "success",
	},
}

export const Warning = {
	args: {
		tone: "warning",
	},
}

export const Glass = {
	args: {
		tone: "glass",
	},
}

export const Solid = {
	args: {
		style: "solid",
	},
}

export const Outline = {
	args: {
		style: "outline",
	},
}

export const Ghost = {
	args: {
		style: "ghost",
	},
}

export const Small = {
	args: {
		size: "small",
	},
}

export const Medium = {
	args: {
		size: "medium",
	},
}

export const Large = {
	args: {
		size: "large",
	},
}

export const IconSmall = {
	args: {
		children: <PlusIcon weight="bold" />,
		size: "iconSmall",
	},
}

export const IconMedium = {
	args: {
		children: <PlusIcon weight="bold" />,
		size: "iconMedium",
	},
}

export const IconLarge = {
	args: {
		children: <PlusIcon weight="bold" />,
		size: "iconLarge",
	},
}
