import type { Meta, StoryObj } from "@storybook/react-vite"
import { NavigationMenu } from "./navigation-menu"
import { NavigationMenuContent } from "./navigation-menu-content"
import { NavigationMenuItem } from "./navigation-menu-item"
import { NavigationMenuList } from "./navigation-menu-list"
import { NavigationMenuTrigger } from "./navigation-menu-trigger"
import { NavigationMenuViewport } from "./navigation-menu-viewport"

export default {
	title: "Components/Navigation Menu",
	component: NavigationMenu,
	parameters: {
		docs: {
			subtitle: "Displays a navigation menu for site navigation.",
			description: {
				component:
					"The Navigation Menu component provides a structured way to navigate through different sections of a website or application. It supports various styles and configurations to enhance user experience and accessibility.",
			},
		},
	},
	render: (args) => (
		<NavigationMenu {...args}>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Home</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="p-4">
							<h2 className="">Welcome to the Home Page</h2>
							<p>This is the main landing page of the website.</p>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>About</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="p-4">
							<h2 className="">About Us</h2>
							<p>Learn more about our mission and values.</p>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Services</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="p-4">
							<h2 className="">Our Services</h2>
							<p>Discover the services we offer to our clients.</p>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
			<NavigationMenuViewport />
		</NavigationMenu>
	),
} satisfies Meta<typeof NavigationMenu>

type Story = StoryObj<typeof NavigationMenu>

export const Default: Story = {}
