import type { Meta, StoryObj } from "@storybook/react-vite"
import { Toggle } from "../toggle/toggle"
import { ToggleGroup } from "./toggle-group"

export default {
	title: "Components/Toggle Group",
	component: ToggleGroup,
	parameters: {
		docs: {
			subtitle: "A group of toggle buttons for multiple selections.",
			description: {
				component: "A group of toggle buttons that allow multiple selections.",
			},
		},
	},
	args: {
		multiple: false,
	},
	render: (args) => (
		<ToggleGroup {...args}>
			<Toggle>Option 1</Toggle>
			<Toggle>Option 2</Toggle>
			<Toggle>Option 3</Toggle>
		</ToggleGroup>
	),
} satisfies Meta<typeof ToggleGroup>

type Story = StoryObj<typeof ToggleGroup>
export const Default: Story = {}
export const MultipleSelection: Story = {
	args: {
		multiple: true,
	},
}
