import {
	CardsIcon,
	ClipboardIcon,
	CopyIcon,
	ScissorsIcon,
	TrashIcon,
} from "@phosphor-icons/react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "../button"
import { Menu } from "./menu"
import { MenuCheckboxItem } from "./menu-checkbox-item"
import { MenuItem } from "./menu-item"
import { MenuPopup } from "./menu-popup"
import { MenuSeperator } from "./menu-seperator"
import { MenuTrigger } from "./menu-trigger"

export default {
	title: "Components/Menu",
	component: Menu,
	parameters: {
		docs: {
			subtitle: "Provides a dropdown menu for navigation or actions.",
			description: {
				component:
					"A menu component that provides a dropdown menu for navigation or actions.",
			},
		},
	},
	render: (args) => (
		<Menu {...args}>
			<MenuTrigger>
				<Button>Open Menu</Button>
			</MenuTrigger>
			<MenuPopup>
				<MenuItem>
					<CopyIcon /> Copy
				</MenuItem>
				<MenuItem>
					<ClipboardIcon /> Paste
				</MenuItem>
				<MenuSeperator />
				<MenuItem>
					<ScissorsIcon /> Cut
				</MenuItem>
				<MenuItem>
					<TrashIcon /> Delete
				</MenuItem>
				<MenuSeperator />
				<MenuItem>
					<CardsIcon /> Select All
				</MenuItem>
			</MenuPopup>
		</Menu>
	),
} satisfies Meta<typeof Menu>

type Story = StoryObj<typeof Menu>

export const Default: Story = {}
export const CheckboxItems: Story = {
	render: (args) => (
		<Menu {...args}>
			<MenuTrigger>
				<Button>Open Menu</Button>
			</MenuTrigger>
			<MenuPopup>
				<MenuCheckboxItem>Option 1</MenuCheckboxItem>
				<MenuCheckboxItem>Option 2</MenuCheckboxItem>
				<MenuCheckboxItem>Option 3</MenuCheckboxItem>
			</MenuPopup>
		</Menu>
	),
}
