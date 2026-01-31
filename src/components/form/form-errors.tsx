/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all lint/suspicious/noExplicitAny: <explanation> */

import { cn } from "@/utils/cn"
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
		<form.Subscribe selector={(state) => [state.errorMap]}>
			{([errorMap]) => {
				const errors: string[] = []
				const onSubmit = errorMap.onSubmit
				if (onSubmit) {
					if (typeof onSubmit === "string") {
						errors.push(onSubmit)
					} else if (Array.isArray(onSubmit)) {
						errors.push(
							...onSubmit.map((err: any) => err.message ?? String(err)),
						)
					} else if (typeof onSubmit === "object" && onSubmit !== null) {
						Object.values(onSubmit)
							.flat()
							.forEach((err: any) => {
								errors.push(err.message ?? String(err))
							})
					} else {
						errors.push(String(onSubmit))
					}
				}
				return errors.length > 0 ? (
					<div className={cn("", className)} ref={ref} {...props}>
						<ul style={{ margin: 0, paddingLeft: 20 }}>
							{errors.map((err, i) => (
								<li key={i}>{err}</li>
							))}
						</ul>
					</div>
				) : null
			}}
		</form.Subscribe>
	)
}
