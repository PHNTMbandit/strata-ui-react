import {
	CardsIcon,
	ClipboardIcon,
	CopyIcon,
	ScissorsIcon,
	TrashIcon,
} from "@phosphor-icons/react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import React from "react"
import { Button } from "../button"
import { Menu } from "./menu"
import { MenuCheckboxItem } from "./menu-checkbox-item"
import { MenuGroup } from "./menu-group"
import { MenuGroupLabel } from "./menu-group-label"
import { MenuItem } from "./menu-item"
import { MenuPopup } from "./menu-popup"
import { MenuRadioGroup } from "./menu-radio-group"
import { MenuRadioItem } from "./menu-radio-item"
import { MenuSeperator } from "./menu-seperator"
import { MenuSubmenu } from "./menu-submenu"
import { MenuSubmenuTrigger } from "./menu-submenu-trigger"
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
	render: (args) => {
		const [showCopy, setShowCopy] = React.useState(false)
		const [showPaste, setShowPaste] = React.useState(false)
		const [showCut, setShowCut] = React.useState(false)
		const [showDelete, setShowDelete] = React.useState(false)

		return (
			<Menu {...args}>
				<MenuTrigger>
					<Button>Open Menu</Button>
				</MenuTrigger>
				<MenuPopup>
					<MenuCheckboxItem
						checked={showCopy}
						onCheckedChange={() => setShowCopy((prev) => !prev)}
					>
						Option 1
					</MenuCheckboxItem>
					<MenuCheckboxItem
						checked={showPaste}
						onCheckedChange={() => setShowPaste((prev) => !prev)}
					>
						Option 2
					</MenuCheckboxItem>
					<MenuCheckboxItem
						checked={showCut}
						onCheckedChange={() => setShowCut((prev) => !prev)}
					>
						Option 3
					</MenuCheckboxItem>
					<MenuCheckboxItem
						checked={showDelete}
						onCheckedChange={() => setShowDelete((prev) => !prev)}
					>
						Option 4
					</MenuCheckboxItem>
				</MenuPopup>
			</Menu>
		)
	},
}

export const RadioItems: Story = {
	render: (args) => {
		const [value, setValue] = React.useState("date")

		return (
			<Menu {...args}>
				<MenuTrigger>
					<Button>Open Menu</Button>
				</MenuTrigger>
				<MenuPopup>
					<MenuRadioGroup onValueChange={setValue} value={value}>
						<MenuRadioItem value="date">Date</MenuRadioItem>
						<MenuRadioItem value="name">Name</MenuRadioItem>
						<MenuRadioItem value="type">Type</MenuRadioItem>
					</MenuRadioGroup>
				</MenuPopup>
			</Menu>
		)
	},
}

export const GroupLabels: Story = {
	render: (args) => (
		<Menu {...args}>
			<MenuTrigger>
				<Button>Open Menu</Button>
			</MenuTrigger>
			<MenuPopup>
				<MenuGroup>
					<MenuGroupLabel>Group 1</MenuGroupLabel>
					<MenuItem>Option 1</MenuItem>
					<MenuItem>Option 2</MenuItem>
				</MenuGroup>
				<MenuSeperator />
				<MenuGroup>
					<MenuGroupLabel>Group 2</MenuGroupLabel>
					<MenuItem>Option 3</MenuItem>
					<MenuItem>Option 4</MenuItem>
				</MenuGroup>
			</MenuPopup>
		</Menu>
	),
}

export const Submenus: Story = {
	render: (args) => (
		<Menu {...args}>
			<MenuTrigger>
				<Button>Open Menu</Button>
			</MenuTrigger>
			<MenuPopup>
				<MenuItem>Option 1</MenuItem>
				<MenuSubmenu>
					<MenuSubmenuTrigger>More Options</MenuSubmenuTrigger>
					<MenuPopup>
						<MenuItem>Option 2</MenuItem>
						<MenuItem>Option 3</MenuItem>
					</MenuPopup>
				</MenuSubmenu>
			</MenuPopup>
		</Menu>
	),
}
