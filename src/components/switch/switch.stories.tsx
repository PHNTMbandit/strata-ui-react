import { Switch } from "./switch"

export default {
	title: "Components/Switch",
	component: Switch,
	tags: [],
	parameters: {
		docs: {
			subtitle: "A toggle switch component for binary choices.",
			description: {
				component:
					"The Switch component allows users to toggle between two states, such as on and off. It is commonly used in forms and settings to represent binary options. The Switch can be customized with different sizes and tones to fit various design needs.",
			},
		},
	},
	args: {
		label: "Enable Notifications",
	},
	render: (args: React.ComponentProps<typeof Switch>) => (
		<Switch {...args} id="switch" />
	),
}

export const Default = {}
