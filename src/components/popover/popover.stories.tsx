import { Popover } from "./popover"
import { PopoverDescription } from "./popover-description"
import { PopoverPanel } from "./popover-panel"
import { PopoverTitle } from "./popover-title"
import { PopoverTrigger } from "./popover-trigger"

export default {
	title: "Components/Popover",
	component: Popover,
	subcomponents: {
		PopoverDescription,
		PopoverPanel,
		PopoverTitle,
		PopoverTrigger,
	},
	parameters: {
		docs: {
			subtitle: "A component for displaying contextual overlays.",
			description: {
				component:
					"The Popover component provides a way to display additional information or actions in a floating container that appears on user interaction, such as clicking or hovering over an element. It is useful for showing tooltips, menus, or other contextual content without cluttering the main interface.",
			},
		},
	},
	args: {
		title: "Popover Title",
		description: "This is the popover content.",
		openOnHover: false,
		onOpenChange: () => {},
	},
	render: (args: any) => (
		<Popover {...args}>
			<PopoverTrigger openOnHover={args.openOnHover}>
				<span className="style-text-default-0 hover:cursor-pointer hover:underline">
					Click me
				</span>
			</PopoverTrigger>
			<PopoverPanel side="top">
				<PopoverTitle>{args.title}</PopoverTitle>
				<PopoverDescription>{args.description}</PopoverDescription>
			</PopoverPanel>
		</Popover>
	),
}

export const Default = {}
