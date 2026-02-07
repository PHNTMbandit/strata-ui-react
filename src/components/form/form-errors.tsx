import { cn } from "@/utils/cn"
import { Alert, AlertDescription } from "../alert"
import type { FormErrorsProps } from "./form.types"
import { useFormContext } from "./form-context"

export const FormErrors = ({
	className,
	children,
	ref,
	...props
}: FormErrorsProps) => {
	const form = useFormContext()

	return (
		<form.Subscribe selector={(state) => [state.errors]}>
			{([errors]) => {
				if (!errors || errors.length === 0) {
					return null
				}

				const allMessages: string[] = []

				errors.forEach((errorObj) => {
					Object.values(errorObj).forEach((fieldErrors) => {
						if (Array.isArray(fieldErrors)) {
							fieldErrors.forEach((err) => {
								if (err?.message) {
									allMessages.push(err.message)
								}
							})
						}
					})
				})

				return (
					<Alert className={cn("", className)} ref={ref} {...props}>
						{children}
						<AlertDescription>
							<ul className="pl-lg">
								{allMessages.length > 0 ? (
									allMessages.map((message) => <li key={message}>{message}</li>)
								) : (
									<li>{errors.toString()}</li>
								)}
							</ul>
						</AlertDescription>
					</Alert>
				)
			}}
		</form.Subscribe>
	)
}
