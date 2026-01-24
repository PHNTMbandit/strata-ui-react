import { Checkbox } from "./checkbox"

export default {
	title: "Components/Checkbox",
	component: Checkbox,
	parameters: {
		docs: {
			subtitle: "A checkbox component for selecting options.",
			description: {
				component:
					"The Checkbox component allows users to select one or more options from a set. It is commonly used in forms and settings where multiple selections are allowed. The Checkbox can be customized with different sizes and tones to fit various design needs.",
			},
		},
	},
	args: {
		disabled: false,
		label: "Accept Terms and Conditions",
	},
	render: (args: React.ComponentProps<typeof Checkbox>) => (
		<Checkbox {...args} id="checkbox" />
	),
}

export const Default = {}
