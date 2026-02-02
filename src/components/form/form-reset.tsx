import { cn } from "@/utils/cn"
import { Button } from "../button"
import type { FormResetProps } from "./form.types"
import { useFormContext } from "./form-context"

export const FormReset = ({
	className,
	children,
	ref,
	...props
}: FormResetProps) => {
	const form = useFormContext()

	const handleClick = () => {
		form.reset()
	}

	return (
		<form.Subscribe selector={(state) => state}>
			{(state) => (
				<Button
					className={cn("w-full", className)}
					disabled={!state.values}
					onClick={handleClick}
					ref={ref}
					type="reset"
					{...props}
				>
					{children}
				</Button>
			)}
		</form.Subscribe>
	)
}
