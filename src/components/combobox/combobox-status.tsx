import { Combobox as BaseCombobox } from "@base-ui/react/combobox"
import { cn } from "@/utils/cn"
import type { ComboboxStatusProps } from "./combobox.types"

export const ComboboxStatus = ({
	className,
	children,
	ref,
	...props
}: ComboboxStatusProps) => {
	return (
		<BaseCombobox.Status
			className={cn(
				"style-text-prose--1 flex items-center gap-2 p-xs text-on-surface-variant empty:hidden",
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
		</BaseCombobox.Status>
	)
}
