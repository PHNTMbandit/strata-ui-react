import type { Meta, StoryObj } from "@storybook/react-vite"
import { NumberField } from "./number-field"

export default {
	title: "Components/Number Field",
	component: NumberField,
	parameters: {
		docs: {
			subtitle:
				"A user-friendly component for numeric input with increment and decrement controls.",
			description: {
				component:
					"The Number Field component provides an intuitive interface for users to input numeric values. It features increment and decrement buttons, allowing users to easily adjust the value without manual typing. The component supports various configurations such as min/max values, step size, and formatting options. Designed with accessibility in mind, the Number Field ensures a seamless experience across different devices and user needs.",
			},
		},
	},
	render: (args) => <NumberField {...args} id="number-field" />,
} satisfies Meta<typeof NumberField>

type Story = StoryObj<typeof NumberField>

export const Default: Story = {}
