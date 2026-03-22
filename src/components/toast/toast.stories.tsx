import type { Meta, StoryObj } from "@storybook/react-vite"
import React from "react"
import { cn } from "@/utils/cn"
import { Button } from "../button"
import { anchoredToastManager, stackToastManager } from "."
import { AnchoredToasts } from "./anchored-toasts"
import { StackToasts } from "./stack-toasts"
import { ToastProvider } from "./toast-provider"

const StackButton = ({
	tone,
	className,
	children,
	ref,
	...props
}: React.ComponentProps<typeof Button> & {
	tone?:
		| "brand"
		| "accent"
		| "neutral"
		| "info"
		| "success"
		| "error"
		| "warning"
}) => {
	return (
		<Button
			className={cn("", className)}
			ref={ref}
			tone={tone}
			{...props}
			onClick={() => {
				const id = stackToastManager.add({
					title: "Notification",
					description:
						"This is a sample toast notification. It will disappear after 10 seconds.",
					variant: tone,
					actionProps: {
						children: "Undo",
						onClick() {
							stackToastManager.close(id)
							stackToastManager.add({
								title: "Action Undone",
								description: "The previous action has been undone.",
								variant: tone,
							})
						},
					},
				})
			}}
		>
			{children}
		</Button>
	)
}

const AnchoredButton = ({
	tone,
	className,
	children,
	ref,
	...props
}: React.ComponentProps<typeof Button> & {
	tone?:
		| "brand"
		| "accent"
		| "neutral"
		| "info"
		| "success"
		| "error"
		| "warning"
}) => {
	const [showingToast, setShowingToast] = React.useState(false)
	const buttonRef = React.useRef<HTMLButtonElement | null>(null)

	return (
		<Button
			className={cn("", className)}
			disabled={showingToast}
			ref={buttonRef}
			tone={tone}
			{...props}
			onClick={() => {
				setShowingToast(true)

				anchoredToastManager.add({
					title: "Notification",
					description: "This is a sample toast notification.",
					variant: tone,
					positionerProps: {
						anchor: buttonRef.current,
						sideOffset: 8,
					},
					timeout: 5000,
					onClose() {
						setShowingToast(false)
					},
				})
			}}
		>
			{children}
		</Button>
	)
}

export default {
	title: "Components/Toast",
	component: ToastProvider,
	subcomponents: { StackToasts, AnchoredToasts },
	parameters: {
		docs: {
			subtitle: "A component for displaying brief messages to users",
			description: {
				component:
					"The Toast component is used to show transient notifications to users. It typically appears at the bottom or top of the screen and automatically disappears after a short duration. This component is useful for providing feedback on user actions, such as form submissions or system alerts.",
			},
		},
	},
} satisfies Meta<typeof ToastProvider>

type Story = StoryObj<typeof ToastProvider>

export const Brand: Story = {
	render: (args) => {
		return (
			<ToastProvider {...args}>
				<StackButton tone={"brand"}>Click here</StackButton>
			</ToastProvider>
		)
	},
}

export const Accent: Story = {
	render: (args) => {
		return (
			<ToastProvider {...args}>
				<StackButton tone={"accent"}>Click here</StackButton>
			</ToastProvider>
		)
	},
}

export const Neutral: Story = {
	render: (args) => {
		return (
			<ToastProvider {...args}>
				<StackButton tone={"neutral"}>Click here</StackButton>
			</ToastProvider>
		)
	},
}

// biome-ignore lint/suspicious/noShadowRestrictedNames: This is a story name
export const Error: Story = {
	render: (args) => {
		return (
			<ToastProvider {...args}>
				<StackButton tone={"error"}>Click here</StackButton>
			</ToastProvider>
		)
	},
}

export const Info: Story = {
	render: (args) => {
		return (
			<ToastProvider {...args}>
				<StackButton tone={"info"}>Click here</StackButton>
			</ToastProvider>
		)
	},
}

export const Success: Story = {
	render: (args) => {
		return (
			<ToastProvider {...args}>
				<StackButton tone={"success"}>Click here</StackButton>
			</ToastProvider>
		)
	},
}

export const Warning: Story = {
	render: (args) => {
		return (
			<ToastProvider {...args}>
				<StackButton tone={"warning"}>Click here</StackButton>
			</ToastProvider>
		)
	},
}

export const AnchoredToast: Story = {
	render: (args) => {
		return (
			<ToastProvider {...args}>
				<AnchoredButton tone={"brand"}>Click here</AnchoredButton>
			</ToastProvider>
		)
	},
}

export const Action: Story = {
	render: (args) => {
		return <ToastProvider {...args}></ToastProvider>
	},
}
