import { SpeakerHighIcon, SpeakerLowIcon } from "@phosphor-icons/react"
import { Slider } from "./slider"

export default {
	title: "Components/Slider",
	component: Slider,
	parameters: {
		docs: {
			subtitle: "A component for selecting a value from a range.",
			description: {
				component:
					"The Slider component allows users to select a value from a continuous or discrete range by dragging a thumb along a track. It is commonly used in forms and settings where users need to adjust values such as volume, brightness, or other numerical inputs. The Slider can be customized with different sizes, tones, and step values to fit various design needs.",
			},
		},
	},
	args: {
		defaultValues: [50],
		label: "Volume",
		leadingIcon: SpeakerLowIcon,
		min: 0,
		max: 100,
		showTickLabels: true,
		stepSize: 1,
		trailingIcon: SpeakerHighIcon,
	},
	argTypes: {
		min: "number",
		max: "number",
		stepSize: "number",
		defaultValues: {
			control: "none",
		},
		leadingIcon: { control: "none" },
		trailingIcon: { control: "none" },
		showTickLabels: {
			control: "boolean",
		},
	},
	render: (args: React.ComponentProps<typeof Slider>) => (
		<Slider
			{...args}
			className="h-[100px] w-[500px]"
			leadingIcon={args.leadingIcon ? args.leadingIcon : undefined}
			trailingIcon={args.trailingIcon ? args.trailingIcon : undefined}
		/>
	),
}

export const Default = {
	args: {
		leadingIcon: undefined,
		trailingIcon: undefined,
		showTickLabels: false,
	},
}

export const WithTickLabels = {
	args: {
		showTickLabels: true,
	},
}

export const WithIcons = {
	args: {
		leadingIcon: SpeakerLowIcon,
		trailingIcon: SpeakerHighIcon,
	},
}
