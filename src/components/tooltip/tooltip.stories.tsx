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
	args: {
		delay: 300,
		content: "This is a tooltip message providing additional information.",
	},
	render: (args: any) => (
		<Tooltip {...args}>
			<TooltipTrigger delay={args.delay}>Hover me</TooltipTrigger>
			<TooltipContent>{args.content}</TooltipContent>
		</Tooltip>
	),
}

export const Default = {}
