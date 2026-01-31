import { UserIcon } from "@phosphor-icons/react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { z } from "zod"
import { Form } from "./form"
import { useAppForm } from "./form-context"

export default {
	title: "Components/Form",
	parameters: {
		docs: {
			subtitle: "Provides context and state management for form fields.",
			description: {
				component:
					"The Form component is a container that manages the state and behavior of form fields. It provides context to its child components, allowing them to access and update form data seamlessly. The Form component handles validation, submission, and other form-related functionalities, making it easier to build complex forms with consistent behavior.",
			},
		},
	},
} satisfies Meta<typeof Form>

type Story = StoryObj<typeof Form>

export const Input: Story = {
	render: () => {
		const schema = z.object({
			firstName: z.string().min(2, "First name must be at least 2 characters"),
			lastName: z.string().min(2, "Last name must be at least 2 characters"),
		})

		const form = useAppForm({
			defaultValues: {
				firstName: "",
				lastName: "",
			},
			validators: {
				onSubmit: schema,
			},
			onSubmit: async (values) => {
				return new Promise<void>((resolve) => {
					setTimeout(() => {
						alert(
							`Form submitted successfully!\n\n${values.value.firstName} ${values.value.lastName}`,
						)
						resolve()
					}, 2000)
				})
			},
		})

		return (
			<Form form={form as any}>
				<form.AppField
					children={(field) => (
						<div>
							<field.FieldLabel />
							<field.FieldInput
								leadingIcon={UserIcon}
								placeholder="First Name"
							/>
							<field.FieldDescription>
								Please enter your first name.
							</field.FieldDescription>
							<field.FieldError />
						</div>
					)}
					name="firstName"
				/>
				<form.AppField
					children={(field) => (
						<div>
							<field.FieldLabel />
							<field.FieldInput
								leadingIcon={UserIcon}
								placeholder="First Name"
							/>
							<field.FieldDescription>
								Please enter your last name.
							</field.FieldDescription>
							<field.FieldError />
						</div>
					)}
					name="lastName"
				/>
				<form.FormErrors />
				<form.FormReset style="ghost" tone="error">
					Reset
				</form.FormReset>
				<form.FormSubmit>Submit</form.FormSubmit>
			</Form>
		)
	},
}

export const Slider: Story = {
	render: () => {
		const schema = z.object({
			age: z.number().min(0).max(120),
		})

		const form = useAppForm({
			defaultValues: {
				age: 0,
			},
			validators: {
				onSubmit: schema,
			},
			onSubmit: async (values) => {
				return new Promise<void>((resolve) => {
					setTimeout(() => {
						alert(
							`Form submitted successfully!\n\n${values.value.age} years old`,
						)
						resolve()
					}, 2000)
				})
			},
		})

		return (
			<Form form={form as any}>
				<form.AppField
					children={(field) => (
						<div>
							<field.FieldLabel />
							<field.FieldSlider leadingIcon={UserIcon} max={120} min={0} />
							<field.FieldDescription>
								Please enter your age.
							</field.FieldDescription>
							<field.FieldError />
						</div>
					)}
					name="age"
				/>

				<form.FormErrors />
				<form.FormReset style="ghost" tone="error">
					Reset
				</form.FormReset>
				<form.FormSubmit>Submit</form.FormSubmit>
			</Form>
		)
	},
}
