import { cn } from "@/utils/cn"
import { Button } from "../button"
import type { FormSubmitProps } from "./form.types"
import { useFormContext } from "./form-context"

export const FormSubmit = ({
	submittingText = "Submitting...",
	className,
	children,
	ref,
	...props
}: FormSubmitProps) => {
	const form = useFormContext()

	return (
		<form.Subscribe selector={(state) => state}>
			{(state) => (
				<Button
					className={cn("w-full", className)}
					disabled={
						state.isSubmitting || !state.canSubmit || form.state.isPristine
					}
					ref={ref}
					type="submit"
					{...props}
				>
					{state.isSubmitting ? submittingText : children}
				</Button>
			)}
		</form.Subscribe>
	)
}
