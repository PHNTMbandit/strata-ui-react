import type { Button } from "../button"

export type FormProps = React.ComponentProps<"form">
export type FormSubmitProps = React.ComponentProps<typeof Button> & {
	submittingText?: string
}
export type FormResetProps = React.ComponentProps<typeof Button>
