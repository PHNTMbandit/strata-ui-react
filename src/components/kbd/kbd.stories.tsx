import { CommandIcon, MagnifyingGlassIcon } from "@phosphor-icons/react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "../button"
import { Input } from "../input"
import { Kbd } from "./kbd"

export default {
	title: "Components/Kbd",
	component: Kbd,
	render: (args) => <Kbd {...args}>Space</Kbd>,
} satisfies Meta<typeof Kbd>

type Story = StoryObj<typeof Kbd>

export const Text: Story = {}

export const Icon: Story = {
	render: (args) => (
		<Kbd {...args}>
			<CommandIcon />
		</Kbd>
	),
}
export const WithButton: Story = {
	render: (args) => (
		<Button>
			Generate
			<Kbd {...args}>
				<p>Enter</p>
			</Kbd>
		</Button>
	),
}

export const WithInput: Story = {
	render: (args) => (
		<Input leadingIcon={MagnifyingGlassIcon} placeholder="Search...">
			<Kbd {...args}>
				<p>Cltr + F</p>
			</Kbd>
		</Input>
	),
}
