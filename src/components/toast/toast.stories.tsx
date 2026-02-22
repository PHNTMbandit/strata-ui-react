import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, within } from "storybook/test"
import { cn } from "@/utils/cn"
import { Button } from "../button"
import { Toast } from "./toast"
import { useToastManager } from "./toast-manager"
import { ToastProvider } from "./toast-provider"

const TestButton = ({
	tone,
	className,
	children,
	ref,
	...props
}: React.ComponentProps<typeof Button> & {
	tone?: "primary" | "secondary" | "neutral" | "success" | "error" | "warning"
}) => {
	const toast = useToastManager()

	return (
		<Button
			className={cn("", className)}
			ref={ref}
			tone={tone}
			{...props}
			onClick={() => {
				toast.add({
					title: "Notification",
					description: "This is a sample toast notification.",
					variant: tone,
				})
			}}
		>
			{children}
		</Button>
	)
}

export default {
	title: "Components/Toast",
	component: Toast,
	subcomponents: { ToastProvider },
	parameters: {
		docs: {
			subtitle: "A component for displaying brief messages to users",
			description: {
				component:
					"The Toast component is used to show transient notifications to users. It typically appears at the bottom or top of the screen and automatically disappears after a short duration. This component is useful for providing feedback on user actions, such as form submissions or system alerts.",
			},
		},
	},
	args: {
		position: "bottom-center",
	},
	argTypes: {
		position: {
			control: "select",
			options: [
				"top-left",
				"top-center",
				"top-right",
				"bottom-left",
				"bottom-center",
				"bottom-right",
			],
		},
	},
} satisfies Meta<typeof Toast>

type Story = StoryObj<typeof Toast>

export const Primary: Story = {
	args: {
		position: "top-left",
	},
	render: (args) => {
		return (
			<ToastProvider position={args.position}>
				<TestButton tone={"primary"}>Click here</TestButton>
			</ToastProvider>
		)
	},
	play: async ({ userEvent, canvasElement, step }) => {
		const canvas = within(canvasElement)
		const body = within(document.body)

		await step("Check if toast uses variant tone", async () => {
			const button = canvas.getByRole("button", { name: "Click here" })
			await userEvent.click(button)

			const toast = await body.findByRole("dialog")
			expect(toast).toBeInTheDocument()
			expect(toast).toHaveClass(
				"bg-primary-container",
				"text-on-primary-container",
			)
		})
	},
}

export const Secondary: Story = {
	args: {
		position: "top-center",
	},
	render: (args) => {
		return (
			<ToastProvider position={args.position}>
				<TestButton tone={"secondary"}>Click here</TestButton>
			</ToastProvider>
		)
	},
	play: async ({ userEvent, canvasElement, step }) => {
		const canvas = within(canvasElement)
		const body = within(document.body)

		await step("Check if toast uses variant tone", async () => {
			const button = canvas.getByRole("button", { name: "Click here" })
			await userEvent.click(button)

			const toast = await body.findByRole("dialog")
			expect(toast).toBeInTheDocument()
			expect(toast).toHaveClass(
				"bg-secondary-container",
				"text-on-secondary-container",
			)
		})
	},
}

export const Neutral: Story = {
	args: {
		position: "bottom-left",
	},
	render: (args) => {
		return (
			<ToastProvider position={args.position}>
				<TestButton tone={"neutral"}>Click here</TestButton>
			</ToastProvider>
		)
	},
	play: async ({ userEvent, canvasElement, step }) => {
		const canvas = within(canvasElement)
		const body = within(document.body)

		await step("Check if toast uses variant tone", async () => {
			const button = canvas.getByRole("button", { name: "Click here" })
			await userEvent.click(button)

			const toast = await body.findByRole("dialog")
			expect(toast).toBeInTheDocument()
			expect(toast).toHaveClass("bg-surface-bright", "text-on-surface")
		})
	},
}

// biome-ignore lint/suspicious/noShadowRestrictedNames: This is a story name
export const Error: Story = {
	args: {
		position: "bottom-right",
	},
	render: (args) => {
		return (
			<ToastProvider position={args.position}>
				<TestButton tone={"error"}>Click here</TestButton>
			</ToastProvider>
		)
	},
	play: async ({ userEvent, canvasElement, step }) => {
		const canvas = within(canvasElement)
		const body = within(document.body)

		await step("Check if toast uses variant tone", async () => {
			const button = canvas.getByRole("button", { name: "Click here" })
			await userEvent.click(button)

			const toast = await body.findByRole("dialog")
			expect(toast).toBeInTheDocument()
			expect(toast).toHaveClass("bg-error-container", "text-on-error-container")
		})
	},
}

export const Success: Story = {
	args: {
		position: "bottom-center",
	},
	render: (args) => {
		return (
			<ToastProvider position={args.position}>
				<TestButton tone={"success"}>Click here</TestButton>
			</ToastProvider>
		)
	},
	play: async ({ userEvent, canvasElement, step }) => {
		const canvas = within(canvasElement)
		const body = within(document.body)

		await step("Check if toast uses variant tone", async () => {
			const button = canvas.getByRole("button", { name: "Click here" })
			await userEvent.click(button)

			const toast = await body.findByRole("dialog")
			expect(toast).toBeInTheDocument()
			expect(toast).toHaveClass(
				"bg-success-container",
				"text-on-success-container",
			)
		})
	},
}

export const Warning: Story = {
	args: {
		position: "bottom-center",
	},
	render: (args) => {
		return (
			<ToastProvider position={args.position}>
				<TestButton tone={"warning"}>Click here</TestButton>
			</ToastProvider>
		)
	},
	play: async ({ userEvent, canvasElement, step }) => {
		const canvas = within(canvasElement)
		const body = within(document.body)

		await step("Check if toast uses variant tone", async () => {
			const button = canvas.getByRole("button", { name: "Click here" })
			await userEvent.click(button)

			const toast = await body.findByRole("dialog")
			expect(toast).toBeInTheDocument()
			expect(toast).toHaveClass(
				"bg-warning-container",
				"text-on-warning-container",
			)
		})
	},
}
