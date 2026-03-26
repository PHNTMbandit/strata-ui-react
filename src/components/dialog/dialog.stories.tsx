import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../button";
import { Dialog } from "./dialog";
import { DialogClose } from "./dialog-close";
import { DialogContent } from "./dialog-content";
import { DialogDescription } from "./dialog-description";
import { DialogFooter } from "./dialog-footer";
import { DialogHeader } from "./dialog-header";
import { DialogPopup } from "./dialog-popup";
import { DialogTitle } from "./dialog-title";
import { DialogTrigger } from "./dialog-trigger";

export default {
  title: "Components/Dialog",
  component: Dialog,
  subcomponents: {
    DialogClose,
    DialogDescription,
    DialogContent,
    DialogFooter,
    DialogHeader,
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
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>Description of the dialog</DialogDescription>
        </DialogHeader>
        <DialogContent></DialogContent>
        <DialogFooter>
          <Button className={"w-full"}>Confirm</Button>
        </DialogFooter>
        <DialogClose data-testid="close-button" />
      </DialogPopup>
    </Dialog>
  ),
} satisfies Meta<typeof Dialog>;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {};
