import { XCircleIcon } from "@phosphor-icons/react"
import { cn } from "@/utils/cn"
import { Alert, AlertDescription } from "../alert"
import { AlertHeader } from "../alert/alert-header"
import type { FormErrorsProps } from "./form.types"
import { useFormContext } from "./form-context"

export const FormErrors = ({
	headerLabel,
	className,
	children,
	ref,
	...props
}: FormErrorsProps) => {
	const form = useFormContext()

	return (
		<form.Subscribe selector={(state) => [state.errorMap]}>
			{([errorMap]) => {
				const submitError = errorMap.onSubmit
				const serverError = errorMap.onServer
				const submitErrorMessage =
					typeof submitError === "object" && "form" in submitError
						? submitError.form
						: null
				const serverErrorMessage =
					typeof serverError === "object" && "form" in serverError
						? serverError.form
						: null

				if (
					(!submitError && !serverError) ||
					(!submitErrorMessage && !serverErrorMessage)
				)
					return null

				return (
					<Alert className={cn("", className)} ref={ref} {...props}>
						{headerLabel && (
							<AlertHeader>
								<XCircleIcon weight="fill" />
								Error
							</AlertHeader>
						)}
						<AlertDescription>
							{submitErrorMessage}
							<br />
							{serverErrorMessage}
						</AlertDescription>
						{children}
					</Alert>
				)
			}}
		</form.Subscribe>
	)
}
