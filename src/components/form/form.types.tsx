import type { Button } from "../button"

export type FormProps = React.ComponentProps<"form">
export type FormErrorsProps = React.ComponentProps<"div">
export type FormResetProps = React.ComponentProps<typeof Button>
export type FormSubmitProps = React.ComponentProps<typeof Button> & {
	submittingText?: string
}
