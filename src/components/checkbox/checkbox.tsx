import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox"
import { cn } from "@/utils/cn"
import { Label } from "../label"
import type { CheckboxRootProps } from "./checkbox.types"
import { CheckboxIndicator } from "./checkbox-indicator"

export const Checkbox = ({
	className,
	ref,
	label,
	disabled,
	...props
}: CheckboxRootProps) => {
	return (
		<div className="flex items-center gap-xs">
			<BaseCheckbox.Root
				aria-label={label || props["aria-label"]}
				className={cn(
					"group inset-shadow-xs flex size-md items-center justify-center rounded-sm bg-surface-dim text-on-accent outline-2 outline-accent/0 outline-offset-1 transition-colors hover:cursor-pointer not-disabled:hover:outline-accent hover:disabled:cursor-not-allowed data-checked:inset-shadow-raised-xs data-checked:bg-accent",
					className,
				)}
				disabled={disabled}
				id={props.id}
				ref={ref}
				{...props}
			>
				<CheckboxIndicator />
			</BaseCheckbox.Root>
			{label && (
				<Label className={cn(disabled && "opacity-50")} htmlFor={props.id}>
					{label}
				</Label>
			)}
		</div>
	)
}
