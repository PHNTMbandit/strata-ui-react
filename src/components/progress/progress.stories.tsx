import { CheckIcon } from "@phosphor-icons/react/dist/ssr"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Progress } from "./progress"
import { ProgressBar } from "./progress-bar"
import { ProgressIndicator } from "./progress-indicator"

export default {
	title: "Components/Progres",
	component: Progress,
	subcomponents: { ProgressIndicator, ProgressBar },
	parameters: {
		docs: {
			subtitle:
				"A simple progress component that can be used to display progress in a variety of ways.",
			description: {
				component:
					"The Progres component is a simple wrapper around a div element that can be used to display progress in a variety of ways. It accepts all the props of a div element and can be styled using CSS.",
			},
		},
	},
	args: {
		currentIndex: 1,
	},
	render: (args) => (
		<Progress {...args} className="w-[300px]">
			<ProgressIndicator
				description="This is the first step"
				title="First Step"
			>
				1
			</ProgressIndicator>
			<ProgressBar />
			<ProgressIndicator
				description="This is the second step"
				title="Second Step"
			>
				2
			</ProgressIndicator>
			<ProgressBar />
			<ProgressIndicator
				description="This is the third step"
				title="Third Step"
			>
				3
			</ProgressIndicator>
		</Progress>
	),
} satisfies Meta<typeof Progress>

type Story = StoryObj<typeof Progress>
type IndicatorStory = StoryObj<typeof ProgressIndicator>
type BarStory = StoryObj<typeof ProgressBar>

export const Default: Story = {}
export const DefaultWithIcon: Story = {
	render: (args) => (
		<Progress {...args} className="w-[300px]">
			<ProgressIndicator
				description="This is the first step"
				title="First Step"
			>
				<CheckIcon weight="bold" />
			</ProgressIndicator>
			<ProgressBar />
			<ProgressIndicator
				description="This is the second step"
				title="Second Step"
			>
				<CheckIcon weight="bold" />
			</ProgressIndicator>
			<ProgressBar />
			<ProgressIndicator
				description="This is the third step"
				title="Third Step"
			>
				<CheckIcon weight="bold" />
			</ProgressIndicator>
		</Progress>
	),
}

export const IndicatorText: IndicatorStory = {
	render: (args) => <ProgressIndicator {...args}>1</ProgressIndicator>,
}

export const IndicatorIcon: IndicatorStory = {
	render: (args) => (
		<ProgressIndicator {...args}>
			<CheckIcon weight="bold" />
		</ProgressIndicator>
	),
}

export const Bar: BarStory = {
	render: (args) => (
		<div className="w-3xl">
			<ProgressBar {...args} />
		</div>
	),
}

export const Link: Story = {
	render: (args) => (
		<Progress {...args} className="w-[300px]">
			<a className="cursor-pointer" href="https://example.com/step1">
				<ProgressIndicator
					description="This is the first step"
					title="First Step"
				>
					1
				</ProgressIndicator>
			</a>
			<ProgressBar />
			<a className="cursor-pointer" href="https://example.com/step2">
				<ProgressIndicator
					description="This is the second step"
					title="Second Step"
				>
					2
				</ProgressIndicator>
			</a>
			<ProgressBar />
			<a className="cursor-pointer" href="https://example.com/step3">
				<ProgressIndicator
					description="This is the third step"
					title="Third Step"
				>
					3
				</ProgressIndicator>
			</a>
		</Progress>
	),
}
