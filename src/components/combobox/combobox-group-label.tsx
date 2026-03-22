import { Combobox as BaseCombobox } from "@base-ui/react/combobox"
import { cn } from "@/utils/cn"
import type { ComboboxGroupLabelProps } from "./combobox.types"

export const ComboboxGroupLabel = ({
	className,
	children,
	ref,
	...props
}: ComboboxGroupLabelProps) => {
	return (
		<BaseCombobox.GroupLabel
			className={cn(
				"style-text-strong--2 sticky top-[0px] z-1 mt-[0px] mr-[0px] mb-[0px] ml-[-3px] bg-surface-container px-sm pt-sm pb-3xs text-on-surface-variant uppercase",
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
		</BaseCombobox.GroupLabel>
	)
}
