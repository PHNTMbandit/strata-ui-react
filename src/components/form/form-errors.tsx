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
				const error = errorMap.onSubmit
				const errorMessage =
					typeof error === "object" && "form" in error ? error.form : null

				if (!error || !errorMessage) return null

				return (
					<Alert className={cn("", className)} ref={ref} {...props}>
						{headerLabel && (
							<AlertHeader>
								<XCircleIcon weight="fill" />
								Error
							</AlertHeader>
						)}
						<AlertDescription>{errorMessage}</AlertDescription>
						{children}
					</Alert>
				)
			}}
		</form.Subscribe>
	)
}
