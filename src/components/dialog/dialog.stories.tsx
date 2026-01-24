import { InfoIcon } from "@phosphor-icons/react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, waitFor, within } from "storybook/test"
import { Button } from "../button"
import { Dialog } from "./dialog"
import { DialogClose } from "./dialog-close"
import { DialogContent } from "./dialog-content"
import { DialogDescription } from "./dialog-description"
import { DialogHeader } from "./dialog-header"
import { DialogPopup } from "./dialog-popup"
import { DialogTitle } from "./dialog-title"
import { DialogTrigger } from "./dialog-trigger"

export default {
	title: "Components/Dialog",
	component: Dialog,
	subcomponents: {
		DialogClose,
		DialogDescription,
		DialogPopup,
		DialogTitle,
		DialogTrigger,
	},
	parameters: {
		docs: {
			subtitle: "A component for displaying modal dialogs.",
			description: {
				component:
					"The Dialog component is used to create modal dialogs that capture user attention and require interaction before proceeding. It is ideal for displaying important information, forms, or confirmations. The dialog can be customized with various styles and behaviors to fit the needs of the application.",
			},
		},
	},
	render: () => (
		<Dialog>
			<DialogTrigger>
				<Button>Open Dialog</Button>
			</DialogTrigger>
			<DialogPopup>
				<DialogHeader>
					<DialogTitle>
						<InfoIcon weight="bold" />
						Dialog Title
					</DialogTitle>
					<DialogDescription>Description of the dialog</DialogDescription>
				</DialogHeader>
				<DialogContent>
					<div className="flex items-center gap-xs">
						<DialogClose data-testid="close-button" />
						<Button className="w-full">Confirm</Button>
					</div>
				</DialogContent>
			</DialogPopup>
		</Dialog>
	),
	play: async ({ userEvent, canvasElement, step }) => {
		const canvas = within(canvasElement)
		const body = within(document.body)

		await step("Dialog should not be visible initially", async () => {
			expect(body.queryByRole("dialog")).toBeNull()
		})

		await step("Open dialog", async () => {
			const trigger = canvas.getByRole("button", { name: "Open Dialog" })
			await userEvent.click(trigger)
		})

		await step("Dialog should be visible", async () => {
			const dialog = await body.findByRole("dialog")
			expect(dialog).toBeInTheDocument()
		})

		await step("Close dialog", async () => {
			const closeButton = await body.findByTestId("close-button")
			await userEvent.click(closeButton)

			await waitFor(() => {
				expect(body.queryByRole("dialog")).toBeNull()
			})
		})
	},
} satisfies Meta<typeof Dialog>

type Story = StoryObj<typeof Dialog>

export const Default: Story = {}
