import { withForm } from "./form-context"

export const Form = withForm({
	render: function Render({ form, children }) {
		return (
			<form action={form.handleSubmit}>
				<form.AppForm>{children}</form.AppForm>
			</form>
		)
	},
})
