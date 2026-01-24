import { InfoIcon } from "@phosphor-icons/react"
import { Accordion } from "./accordion"
import { AccordionItem } from "./accordion-item"
import { AccordionPanel } from "./accordion-panel"
import { AccordionTrigger } from "./accordion-trigger"

export default {
	title: "Components/Accordion",
	component: Accordion,
	subcomponents: {
		AccordionItem,
		AccordionPanel,
		AccordionTrigger,
	},
	parameters: {
		docs: {
			subtitle: "A component for displaying collapsible content sections.",
			description: {
				component:
					"The Accordion component allows users to expand and collapse sections of content. It is useful for organizing large amounts of information into manageable sections, improving the user experience by reducing clutter on the page. Each section can be expanded or collapsed independently, and the component can be customized with different styles and behaviors.",
			},
		},
	},
	args: {
		icon: InfoIcon,
		heading: "Accordion Heading",
		subtitle: "Accordion Subtitle",
		title: "Accordion Title",
		tone: "neutral",
	},
	argTypes: {
		icon: {
			control: "none",
		},
		tone: {
			control: { type: "select" },
			options: [
				"primary",
				"secondary",
				"accent",
				"neutral",
				"error",
				"success",
				"warning",
			],
		},
	},
	render: (args: any) => (
		<Accordion {...args} className={"w-[500px]"}>
			<AccordionItem tone={args.tone}>
				<AccordionTrigger
					icon={args.icon}
					subtitle={args.subtitle}
					title={args.title}
				/>
				<AccordionPanel heading={args.heading}>
					<p>This is the content for section 1.</p>
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	),
}

export const Primary = { args: { tone: "primary" } }
export const Secondary = { args: { tone: "secondary" } }
export const Accent = { args: { tone: "accent" } }
export const Neutral = { args: {} }
// biome-ignore lint/suspicious/noShadowRestrictedNames: Name of story
export const Error = { args: { tone: "error" } }
export const Success = { args: { tone: "success" } }
export const Warning = { args: { tone: "warning" } }
export const MultipleItems = {
	args: {},
	render: (args: any) => (
		<Accordion {...args} className={"w-[500px]"}>
			<AccordionItem tone="primary">
				<AccordionTrigger
					icon={args.icon}
					subtitle={args.subtitle}
					title={`${args.title} 1`}
				/>
				<AccordionPanel heading={args.heading}>
					<p>This is the content for section 1.</p>
				</AccordionPanel>
			</AccordionItem>
			<AccordionItem tone="secondary">
				<AccordionTrigger
					icon={args.icon}
					subtitle={args.subtitle}
					title={`${args.title} 2`}
				/>
				<AccordionPanel heading={args.heading}>
					<p>This is the content for section 2.</p>
				</AccordionPanel>
			</AccordionItem>
			<AccordionItem tone="accent">
				<AccordionTrigger
					icon={args.icon}
					subtitle={args.subtitle}
					title={`${args.title} 3`}
				/>
				<AccordionPanel heading={args.heading}>
					<p>This is the content for section 3.</p>
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	),
}
