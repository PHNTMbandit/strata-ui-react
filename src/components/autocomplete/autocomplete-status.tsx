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
				"style-text-default--1 p-sm text-on-surface-variant",
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
		</BaseAutocomplete.Status>
	)
}
