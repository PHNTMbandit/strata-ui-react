import type { Meta, StoryObj } from "@storybook/react-vite"
import { Radio } from "./radio"
import { RadioGroup } from "./radio-group"

export default {
	title: "Components/Radio Group",
	component: RadioGroup,
	parameters: {
		docs: {
			subtitle: "A group of radio buttons for selecting a single option.",
			description: {
				component:
					"The Radio Group component allows users to select one option from a set of predefined choices. Each option is represented by a radio button, ensuring that only one selection can be made at a time. This component is ideal for forms and settings where a single choice is required among multiple options.",
			},
		},
	},
	args: {
		defaultValue: "option1",
	},
	render: (args) => (
		<RadioGroup {...args}>
			<Radio value="option1">Option 1</Radio>
			<Radio value="option2">Option 2</Radio>
			<Radio value="option3">Option 3</Radio>
		</RadioGroup>
	),
} satisfies Meta<typeof RadioGroup>

type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {}
