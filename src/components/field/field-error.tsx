import { cn } from "@/utils/cn"
import { useFieldContext } from "../form/form-context"
import type { FieldErrorProps } from "./field.types"

export const FieldError = ({
	className,
	children,
	ref,
	...props
}: FieldErrorProps) => {
	const field = useFieldContext()

	return (
		<div
			className={cn("style-text-prose--1 text-error", className)}
			ref={ref}
			{...props}
		>
			{children}
			{field.state.meta.errors.length > 0 && (
				<div className="mt-2">
					{field.state.meta.errors.map((error) => (
						<p key={error.message}>{error.message}</p>
					))}
				</div>
			)}
		</div>
	)
}
