import { cn } from "@/utils/cn"
import type { FormProps } from "./form.types"

export const Form = ({ className, children, ref, ...props }: FormProps) => {
	return (
		<form
			className={cn("space-y-sm transition-transform", className)}
			ref={ref}
			{...props}
		>
			{children}
		</form>
	)
}
