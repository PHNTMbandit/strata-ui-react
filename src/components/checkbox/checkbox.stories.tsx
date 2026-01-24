import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, waitFor } from "storybook/test"
import { Checkbox } from "./checkbox"

export default {
	title: "Components/Checkbox",
	component: Checkbox,
	parameters: {
		docs: {
			subtitle: "A checkbox component for selecting options.",
			description: {
				component:
					"The Checkbox component allows users to select one or more options from a set. It is commonly used in forms and settings where multiple selections are allowed. The Checkbox can be customized with different sizes and tones to fit various design needs.",
			},
		},
	},
	args: {
		disabled: false,
		label: "Accept Terms and Conditions",
	},
	render: (args: React.ComponentProps<typeof Checkbox>) => (
		<Checkbox {...args} id="checkbox" />
	),
	play: async ({ userEvent, canvas, step }) => {
		await step("Checkbox should be unchecked initially", async () => {
			const checkbox = canvas.getByRole("checkbox")
			expect(checkbox).not.toBeChecked()
		})

		await step("User can check the checkbox", async () => {
			const checkbox = canvas.getByRole("checkbox")
			await userEvent.click(checkbox)
			await waitFor(() => {
				expect(checkbox).toBeChecked()
			})
		})

		await step("User can uncheck the checkbox", async () => {
			const checkbox = canvas.getByRole("checkbox")
			await userEvent.click(checkbox)
			await waitFor(() => {
				expect(checkbox).not.toBeChecked()
			})
		})

		await step("Checkbox can be checked through label click", async () => {
			const label = canvas.getByText("Accept Terms and Conditions")
			const checkbox = canvas.getByRole("checkbox")
			await userEvent.click(label)
			await waitFor(() => {
				expect(checkbox).toBeChecked()
			})
		})
	},
} satisfies Meta<typeof Checkbox>

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {}
