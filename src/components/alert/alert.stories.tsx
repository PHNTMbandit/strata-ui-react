import { XCircleIcon } from "@phosphor-icons/react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Alert } from "./alert"
import { AlertDescription } from "./alert-description"
import { AlertHeader } from "./alert-header"

export default {
	title: "Components/Alert",
	component: Alert,
	subcomponents: { AlertHeader, AlertDescription },
	parameters: {
		docs: {
			subtitle:
				"Alerts are used to capture the user's attention and convey important information.",
			description: {
				component:
					"The Alert component is used to display important messages to users, such as warnings, errors, or informational messages. It typically includes a header and a description to provide context.",
			},
		},
	},
	args: {
		tone: "error",
	},
	argTypes: {
		tone: {
			description: "Defines the tone of the alert, affecting its styling.",
			control: {
				type: "select",
			},
			options: [
				"primary",
				"secondary",
				"neutral",
				"error",
				"success",
				"warning",
			],
		},
	},
} satisfies Meta<typeof Alert>

type Story = StoryObj<typeof Alert>

export const PrimaryVariant: Story = {
	args: {
		tone: "primary",
	},
	render: (args) => (
		<Alert {...args}>
			<AlertHeader>
				<XCircleIcon weight="fill" />
				Primary Alert
			</AlertHeader>
			<AlertDescription>
				This is a primary alert. It indicates important information.
			</AlertDescription>
		</Alert>
	),
}

export const SecondaryVariant: Story = {
	args: {
		tone: "secondary",
	},
	render: (args) => (
		<Alert {...args}>
			<AlertHeader>
				<XCircleIcon weight="fill" />
				Secondary Alert
			</AlertHeader>
			<AlertDescription>
				This is a secondary alert. It provides additional context.
			</AlertDescription>
		</Alert>
	),
}

export const NeutralVariant: Story = {
	args: {
		tone: "neutral",
	},
	render: (args) => (
		<Alert {...args}>
			<AlertHeader>
				<XCircleIcon weight="fill" />
				Neutral Alert
			</AlertHeader>
			<AlertDescription>
				This is a neutral alert. It conveys general information.
			</AlertDescription>
		</Alert>
	),
}

export const ErrorVariant: Story = {
	args: {
		tone: "error",
	},
	render: (args) => (
		<Alert {...args}>
			<AlertHeader>
				<XCircleIcon weight="fill" />
				Error Alert
			</AlertHeader>
			<AlertDescription>
				This is an error alert. Please take necessary actions.
			</AlertDescription>
		</Alert>
	),
}

export const SuccessVariant: Story = {
	args: {
		tone: "success",
	},
	render: (args) => (
		<Alert {...args}>
			<AlertHeader>
				<XCircleIcon weight="fill" />
				Success Alert
			</AlertHeader>
			<AlertDescription>
				This is a success alert. Your operation was successful.
			</AlertDescription>
		</Alert>
	),
}

export const WarningVariant: Story = {
	args: {
		tone: "warning",
	},
	render: (args) => (
		<Alert {...args}>
			<AlertHeader>
				<XCircleIcon weight="fill" />
				Warning Alert
			</AlertHeader>
			<AlertDescription>
				This is a warning alert. Please be cautious.
			</AlertDescription>
		</Alert>
	),
}
