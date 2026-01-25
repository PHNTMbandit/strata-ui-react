import {
	GearIcon,
	GridFourIcon,
	SlidersHorizontalIcon,
	SlidersIcon,
	UserIcon,
} from "@phosphor-icons/react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { INITIAL_VIEWPORTS } from "storybook/viewport"
import { Sidebar } from "./sidebar"
import { SidebarContent } from "./sidebar-content"
import { SidebarFooter } from "./sidebar-footer"
import { SidebarGroup } from "./sidebar-group"
import { SidebarGroupContent } from "./sidebar-group-content"
import { SidebarGroupLabel } from "./sidebar-group-label"
import { SidebarHeader } from "./sidebar-header"
import { SidebarMenu } from "./sidebar-menu"
import { SidebarMenuButton } from "./sidebar-menu-button"
import { SidebarMenuLink } from "./sidebar-menu-link"
import { SidebarProvider } from "./sidebar-provider"
import { SidebarSubMenu } from "./sidebar-sub-menu"
import { SidebarSubMenuPanel } from "./sidebar-sub-menu-panel"
import { SidebarSubMenuTrigger } from "./sidebar-sub-menu-trigger"
import { SidebarToggle } from "./sidebar-toggle"

export default {
	title: "Components/Sidebar",
	component: Sidebar,
	subcomponents: {
		SidebarContent,
		SidebarFooter,
		SidebarGroupContent,
		SidebarGroupLabel,
		SidebarGroup,
		SidebarHeader,
		SidebarMenuButton,
		SidebarMenuLink,
		SidebarMenu,
		SidebarProvider,
		SidebarSubMenuPanel,
		SidebarSubMenuTrigger,
		SidebarSubMenu,
		SidebarToggle,
	},
	args: {
		width: 250,
	},
	argTypes: {
		width: {
			control: "number",
			description: "Sets the width of the sidebar when expanded.",
		},
	},
	parameters: {
		docs: {
			subtitle: "Displays a sidebar for navigation and additional content.",
			description: {
				component:
					"The Sidebar component provides a collapsible navigation panel that can contain various interactive elements such as menus, links, and toggles. It is designed to enhance user experience by offering easy access to different sections of an application while maintaining a clean and organized layout.",
			},
		},
		viewport: {
			options: INITIAL_VIEWPORTS,
		},
	},
} satisfies Meta<typeof Sidebar>

type Story = StoryObj<typeof Sidebar>

export const Desktop: Story = {
	render: (args) => (
		<div className="h-[70vh] w-[700px]">
			<SidebarProvider>
				<Sidebar {...args}>
					<SidebarHeader>My Application</SidebarHeader>
					<SidebarContent>
						<SidebarGroup>
							<SidebarGroupLabel>Main Menu</SidebarGroupLabel>
							<SidebarGroupContent>
								<SidebarMenu>
									<SidebarMenuLink
										label="Dashboard"
										leadingIcon={GridFourIcon}
									/>
									<SidebarMenuLink label="Profile" leadingIcon={UserIcon} />
									<SidebarSubMenu>
										<SidebarSubMenuTrigger
											label={"Settings"}
											leadingIcon={GearIcon}
										/>
										<SidebarSubMenuPanel>
											<SidebarMenuLink
												label="Account"
												leadingIcon={SlidersIcon}
											/>
											<SidebarMenuLink
												label="Preferences"
												leadingIcon={SlidersHorizontalIcon}
											/>
										</SidebarSubMenuPanel>
									</SidebarSubMenu>
								</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>
						<SidebarGroup>
							<SidebarGroupLabel>Main Menu</SidebarGroupLabel>
							<SidebarGroupContent>
								<SidebarMenu>
									<SidebarMenuLink
										label="Dashboard"
										leadingIcon={GridFourIcon}
									/>
									<SidebarMenuLink label="Profile" leadingIcon={UserIcon} />
									<SidebarSubMenu>
										<SidebarSubMenuTrigger
											label={"Settings"}
											leadingIcon={GearIcon}
										/>
										<SidebarSubMenuPanel>
											<SidebarMenuLink
												label="Account"
												leadingIcon={SlidersIcon}
											/>
											<SidebarMenuLink
												label="Preferences"
												leadingIcon={SlidersHorizontalIcon}
											/>
										</SidebarSubMenuPanel>
									</SidebarSubMenu>
								</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>
					</SidebarContent>
					<SidebarFooter></SidebarFooter>
				</Sidebar>
				<SidebarToggle />
			</SidebarProvider>
		</div>
	),
}

export const Mobile: Story = {
	parameters: {
		viewport: {
			defaultViewport: "mobile2",
		},
	},
	render: (args) => (
		<div className="h-[70vh] w-[1000px]">
			<SidebarProvider>
				<Sidebar {...args}>
					<SidebarHeader>My Application</SidebarHeader>
					<SidebarContent>
						<SidebarGroup>
							<SidebarGroupLabel>Main Menu</SidebarGroupLabel>
							<SidebarGroupContent>
								<SidebarMenu>
									<SidebarMenuLink
										label="Dashboard"
										leadingIcon={GridFourIcon}
									/>
									<SidebarMenuLink label="Profile" leadingIcon={UserIcon} />
									<SidebarSubMenu>
										<SidebarSubMenuTrigger
											label={"Settings"}
											leadingIcon={GearIcon}
										/>
										<SidebarSubMenuPanel>
											<SidebarMenuLink
												label="Account"
												leadingIcon={SlidersIcon}
											/>
											<SidebarMenuLink
												label="Preferences"
												leadingIcon={SlidersHorizontalIcon}
											/>
										</SidebarSubMenuPanel>
									</SidebarSubMenu>
								</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>
						<SidebarGroup>
							<SidebarGroupLabel>Main Menu</SidebarGroupLabel>
							<SidebarGroupContent>
								<SidebarMenu>
									<SidebarMenuLink
										label="Dashboard"
										leadingIcon={GridFourIcon}
									/>
									<SidebarMenuLink label="Profile" leadingIcon={UserIcon} />
									<SidebarSubMenu>
										<SidebarSubMenuTrigger
											label={"Settings"}
											leadingIcon={GearIcon}
										/>
										<SidebarSubMenuPanel>
											<SidebarMenuLink
												label="Account"
												leadingIcon={SlidersIcon}
											/>
											<SidebarMenuLink
												label="Preferences"
												leadingIcon={SlidersHorizontalIcon}
											/>
										</SidebarSubMenuPanel>
									</SidebarSubMenu>
								</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>
					</SidebarContent>
					<SidebarFooter></SidebarFooter>
				</Sidebar>
				<SidebarToggle />
			</SidebarProvider>
		</div>
	),
}
