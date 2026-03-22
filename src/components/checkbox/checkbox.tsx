import { Checkbox as BaseCheckbox } from "@base-ui/react"
import { cn } from "@/utils/cn"
import { Label } from "../label"
import type { CheckboxRootProps } from "./checkbox.types"
import { CheckboxIndicator } from "./checkbox-indicator"

export const Checkbox = ({
	className,
	ref,
	label,
	id,
	disabled,
	...props
}: CheckboxRootProps) => {
	return (
		<div className="flex items-center gap-xs">
			<BaseCheckbox.Root
				className={cn(
					"group data-checked:elevation-xs flex size-md items-center justify-center rounded-sm bg-surface-dim not-indeterminate:text-on-accent outline-2 outline-accent/0 outline-offset-1 transition-colors indeterminate:text-accent hover:cursor-pointer hover:outline-accent hover:disabled:cursor-not-allowed data-checked:bg-accent [&:not([data-checked])]:inset-shadow-xs",
					className,
				)}
				disabled={disabled}
				id={id}
				ref={ref}
				{...props}
			>
				<CheckboxIndicator />
			</BaseCheckbox.Root>
			{label && (
				<Label className={cn(disabled && "opacity-50")} htmlFor={id}>
					{label}
				</Label>
			)}
		</div>
	)
}
