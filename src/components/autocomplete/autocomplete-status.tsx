import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete"
import { cn } from "@/utils/cn"
import type { AutocompleteStatusProps } from "./autocomplete.types"

export const AutocompleteStatus = ({
	className,
	children,
	ref,
	...props
}: AutocompleteStatusProps) => {
	return (
		<BaseAutocomplete.Status
			className={cn(
				"style-text-prose--1 flex items-center gap-2 p-xs text-on-surface-variant empty:hidden",
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
		</BaseAutocomplete.Status>
	)
}
