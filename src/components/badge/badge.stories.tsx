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

export const NeutralVariant = {
	args: {
		tone: "neutralVariant",
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

export const Rounded = {
	args: {
		radius: "rounded",
	},
}

export const Circle = {
	args: {
		radius: "circle",
	},
}
