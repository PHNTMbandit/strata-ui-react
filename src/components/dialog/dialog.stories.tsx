import { InfoIcon } from "@phosphor-icons/react"
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
	args: {
		title: "Dialog Title",
		description: "This is the dialog content.",
		showCloseButton: true,
	},
	render: (args: any) => (
		<Dialog>
			<DialogTrigger>
				<Button>Open Dialog</Button>
			</DialogTrigger>
			<DialogPopup showCloseButton={args.showCloseButton}>
				<DialogHeader>
					<DialogTitle>
						<InfoIcon weight="bold" />
						{args.title}
					</DialogTitle>
					<DialogDescription>{args.description}</DialogDescription>
				</DialogHeader>
				<DialogContent>
					<div className="flex items-center gap-xs">
						<Button className="w-full" style="ghost" tone="error">
							Cancel
						</Button>
						<Button className="w-full">Confirm</Button>
					</div>
				</DialogContent>
			</DialogPopup>
		</Dialog>
	),
}

export const Default = {}
