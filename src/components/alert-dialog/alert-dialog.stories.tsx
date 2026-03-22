import { WarningCircleIcon } from "@phosphor-icons/react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "../button"
import { AlertDialog } from "./alert-dialog"
import { AlertDialogClose } from "./alert-dialog-close"
import { AlertDialogConfirm } from "./alert-dialog-confirm"
import { AlertDialogContent } from "./alert-dialog-content"
import { AlertDialogDescription } from "./alert-dialog-description"
import { AlertDialogFooter } from "./alert-dialog-footer"
import { AlertDialogHeader } from "./alert-dialog-header"
import { AlertDialogPopup } from "./alert-dialog-popup"
import { AlertDialogTitle } from "./alert-dialog-title"
import { AlertDialogTrigger } from "./alert-dialog-trigger"

export default {
	title: "Components/Alert Dialog",
	component: AlertDialog,
	subcomponents: {
		AlertDialogClose,
		AlertDialogConfirm,
		AlertDialogDescription,
		AlertDialogFooter,
		AlertDialogPopup,
		AlertDialogTitle,
		AlertDialogTrigger,
	},
	parameters: {
		docs: {
			subtitle: "A component for displaying modal dialogs.",
			description: {
				component:
					"The Alert Dialog component is used to create modal dialogs that capture user attention and require interaction before proceeding. It is ideal for displaying important information, forms, or confirmations. The alert dialog can be customized with various styles and behaviors to fit the needs of the application.",
			},
		},
	},
	render: () => (
		<AlertDialog>
			<AlertDialogTrigger>
				<Button>Open Dialog</Button>
			</AlertDialogTrigger>
			<AlertDialogPopup>
				<AlertDialogHeader>
					<WarningCircleIcon weight="duotone" />
				</AlertDialogHeader>
				<AlertDialogContent>
					<AlertDialogTitle>You are about to delete this item</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone. This will permanently delete the item
						from our servers.
					</AlertDialogDescription>
				</AlertDialogContent>
				<AlertDialogFooter>
					<AlertDialogClose data-testid="close-button">Cancel</AlertDialogClose>
					<AlertDialogConfirm>Confirm</AlertDialogConfirm>
				</AlertDialogFooter>
			</AlertDialogPopup>
		</AlertDialog>
	),
} satisfies Meta<typeof AlertDialog>

type Story = StoryObj<typeof AlertDialog>

export const Default: Story = {}
