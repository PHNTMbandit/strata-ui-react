import type { Meta, StoryObj } from "@storybook/react-vite"
import { TextArea } from "./text-area"

export default {
	title: "Components/Text Area",
	component: TextArea,
	parameters: {
		docs: {
			subtitle: "A multi-line text input field for user input.",
			description: {
				component:
					"The TextArea component provides a multi-line input field that allows users to enter and edit large amounts of text. It is ideal for scenarios such as comments, descriptions, or any other text input that requires more space than a standard input field. The TextArea can be customized with various styles and properties to enhance user experience.",
			},
		},
	},
	args: {
		placeholder: "Enter your text here...",
		maxLength: 50,
	},
} satisfies Meta<typeof TextArea>

type Story = StoryObj<typeof TextArea>

export const Default: Story = {}
