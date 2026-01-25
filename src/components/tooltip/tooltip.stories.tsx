import type { Meta, StoryObj } from "@storybook/react-vite"
import { Tooltip } from "./tooltip"
import { TooltipContent } from "./tooltip-context"
import { TooltipTrigger } from "./tooltip-trigger"

export default {
	title: "Components/Tooltip",
	component: Tooltip,
	subcomponents: { TooltipContent, TooltipTrigger },
	parameters: {
		docs: {
			subtitle:
				"Tooltips display informative text when users hover over, focus on, or tap an element.",
			description: {
				component:
					"Tooltips are used to provide additional information about an element when users interact with it. They can enhance user experience by offering context-sensitive help without cluttering the interface.",
			},
		},
	},
	render: (args) => (
		<Tooltip {...args}>
			<TooltipTrigger className={"hover:cursor-pointer hover:underline"}>
				Hover me
			</TooltipTrigger>
			<TooltipContent>Tooltip</TooltipContent>
		</Tooltip>
	),
} satisfies Meta<typeof Tooltip>

type Story = StoryObj<typeof Tooltip>

export const Default: Story = {}
