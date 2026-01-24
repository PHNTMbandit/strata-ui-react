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
	tone?:
		| "primary"
		| "secondary"
		| "accent"
		| "neutral"
		| "success"
		| "error"
		| "warning"
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
		tone: "success",
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
		tone: {
			control: "select",
			options: [
				"primary",
				"secondary",
				"accent",
				"neutral",
				"error",
				"success",
				"warning",
			],
		},
	},
	render: (args: any) => {
		return (
			<ToastProvider position={args.position}>
				<TestButton tone={args.tone}>Click here</TestButton>
			</ToastProvider>
		)
	},
}

export const Primary = {
	args: {
		tone: "primary",
		position: "top-left",
	},
}

export const Secondary = {
	args: {
		tone: "secondary",
		position: "top-center",
	},
}

export const Accent = {
	args: {
		tone: "accent",
		position: "top-right",
	},
}

export const Neutral = {
	args: {
		tone: "neutral",
		position: "bottom-left",
	},
}

// biome-ignore lint/suspicious/noShadowRestrictedNames: This is a story name
export const Error = {
	args: {
		tone: "error",
		position: "bottom-right",
	},
}

export const Success = {
	args: {
		tone: "success",
		position: "bottom-center",
	},
}

export const Warning = {
	args: {
		tone: "warning",
	},
}
