import React from "react"
import ReactDOM from "react-dom/client"
import "./styles/index.css"
import {
	GearIcon,
	GridFourIcon,
	SlidersHorizontalIcon,
	SlidersIcon,
	UserIcon,
} from "@phosphor-icons/react"
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuLink,
	SidebarProvider,
	SidebarSubMenu,
	SidebarSubMenuPanel,
	SidebarSubMenuTrigger,
	SidebarToggle,
} from "./components"

const rootElement = document.getElementById("root")

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<main className="h-screen w-full">
				<SidebarProvider collapsible="offcanvas">
					<Sidebar>
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
						</SidebarContent>
						<SidebarFooter></SidebarFooter>
					</Sidebar>
					<SidebarToggle />
				</SidebarProvider>
			</main>
		</React.StrictMode>,
	)
}
