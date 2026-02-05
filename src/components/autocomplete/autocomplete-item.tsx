import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete"
import { cn } from "@/utils/cn"
import type { AutocompleteItemProps } from "./autocomplete.types"

export const AutocompleteItem = ({
	className,
	children,
	ref,
	...props
}: AutocompleteItemProps) => {
	return (
		<BaseAutocomplete.Item
			className={cn(
				"style-text-prose--1 mx-sm flex cursor-default select-none items-center rounded-md px-2xs py-3xs first:mt-sm last:mb-sm hover:cursor-pointer hover:bg-secondary hover:text-surface data-highlighted:relative data-highlighted:z-0 data-highlighted:bg-secondary data-highlighted:text-surface data-highlighted:before:absolute data-highlighted:before:inset-x-sm data-highlighted:before:inset-y-[0px] data-highlighted:before:z-[-1] data-highlighted:before:rounded-sm",
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
		</BaseAutocomplete.Item>
	)
}
