import { InfoIcon } from "@phosphor-icons/react"
import type { Meta, StoryObj } from "@storybook/react-vite"
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
} satisfies Meta<typeof Accordion>

type Story = StoryObj<typeof Accordion>

export const Primary: Story = {
	render: (args) => (
		<Accordion {...args} className={"w-[500px]"}>
			<AccordionItem tone="primary">
				<AccordionTrigger
					icon={InfoIcon}
					subtitle={"This is the subtitle"}
					title={"Primary Accordion"}
				/>
				<AccordionPanel heading={"Accordion Panel Heading"}>
					<p>This is the content for the primary accordion panel.</p>
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	),
}
export const Secondary: Story = {
	render: (args) => (
		<Accordion {...args} className={"w-[500px]"}>
			<AccordionItem tone="secondary">
				<AccordionTrigger
					icon={InfoIcon}
					subtitle={"This is the subtitle"}
					title={"Secondary Accordion"}
				/>
				<AccordionPanel heading={"Accordion Panel Heading"}>
					<p>This is the content for the secondary accordion panel.</p>
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	),
}
export const Accent: Story = {
	render: (args) => (
		<Accordion {...args} className={"w-[500px]"}>
			<AccordionItem tone="accent">
				<AccordionTrigger
					icon={InfoIcon}
					subtitle={"This is the subtitle"}
					title={"Accent Accordion"}
				/>
				<AccordionPanel heading={"Accordion Panel Heading"}>
					<p>This is the content for the accent accordion panel.</p>
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	),
}
export const Neutral: Story = {
	render: (args) => (
		<Accordion {...args} className={"w-[500px]"}>
			<AccordionItem tone="neutral">
				<AccordionTrigger
					icon={InfoIcon}
					subtitle={"This is the subtitle"}
					title={"Neutral Accordion"}
				/>
				<AccordionPanel heading={"Accordion Panel Heading"}>
					<p>This is the content for the neutral accordion panel.</p>
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	),
}
// biome-ignore lint/suspicious/noShadowRestrictedNames: Name of story
export const Error: Story = {
	render: (args) => (
		<Accordion {...args} className={"w-[500px]"}>
			<AccordionItem tone="error">
				<AccordionTrigger
					icon={InfoIcon}
					subtitle={"This is the subtitle"}
					title={"Error Accordion"}
				/>
				<AccordionPanel heading={"Accordion Panel Heading"}>
					<p>This is the content for the error accordion panel.</p>
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	),
}
export const Success: Story = {
	render: (args) => (
		<Accordion {...args} className={"w-[500px]"}>
			<AccordionItem tone="success">
				<AccordionTrigger
					icon={InfoIcon}
					subtitle={"This is the subtitle"}
					title={"Success Accordion"}
				/>
				<AccordionPanel heading={"Accordion Panel Heading"}>
					<p>This is the content for the success accordion panel.</p>
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	),
}
export const Warning: Story = {
	render: (args) => (
		<Accordion {...args} className={"w-[500px]"}>
			<AccordionItem tone="warning">
				<AccordionTrigger
					icon={InfoIcon}
					subtitle={"This is the subtitle"}
					title={"Warning Accordion"}
				/>
				<AccordionPanel heading={"Accordion Panel Heading"}>
					<p>This is the content for the warning accordion panel.</p>
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	),
}

export const MultipleItems: Story = {
	args: {},
	render: (args) => (
		<Accordion {...args} className={"w-[500px]"}>
			<AccordionItem tone="primary">
				<AccordionTrigger
					icon={InfoIcon}
					subtitle={"This is the subtitle"}
					title={`Accordion 1`}
				/>
				<AccordionPanel heading={"Accordion Panel Heading"}>
					<p>This is the content for section 1.</p>
				</AccordionPanel>
			</AccordionItem>
			<AccordionItem tone="secondary">
				<AccordionTrigger
					icon={InfoIcon}
					subtitle={"This is the subtitle"}
					title={`Accordion 2`}
				/>
				<AccordionPanel heading={"Accordion Panel Heading"}>
					<p>This is the content for section 2.</p>
				</AccordionPanel>
			</AccordionItem>
			<AccordionItem tone="accent">
				<AccordionTrigger
					icon={InfoIcon}
					subtitle={"This is the subtitle"}
					title={`Accordion 3`}
				/>
				<AccordionPanel heading={"Accordion Panel Heading"}>
					<p>This is the content for section 3.</p>
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	),
}
