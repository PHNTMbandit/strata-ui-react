import { HeartIcon } from "@phosphor-icons/react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Toggle } from "./toggle"

export default {
	title: "Components/Toggle",
	component: Toggle,
	parameters: {
		docs: {
			subtitle: "A component for toggling between two states",
			description: {
				component:
					"The Toggle component allows users to switch between two states, such as on and off. It is commonly used in settings and preferences to enable or disable features.",
			},
		},
	},
	render: (args) => (
		<Toggle
			{...args}
			className={"text-error"}
			pressedChildren={
				<>
					<HeartIcon weight="fill" />
					Liked
				</>
			}
		>
			<HeartIcon weight="bold" />
			Like
		</Toggle>
	),
} satisfies Meta<typeof Toggle>

type Story = StoryObj<typeof Toggle>

export const Default: Story = {}
export const Icon: Story = {
	args: {
		children: <HeartIcon weight="bold" />,
		pressedChildren: <HeartIcon weight="fill" />,
	},
}
