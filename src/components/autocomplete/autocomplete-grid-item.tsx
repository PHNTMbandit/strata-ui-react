import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete"
import { cn } from "@/utils/cn"
import type { AutocompleteGridItemProps } from "./autocomplete.types"

export const AutocompleteGridItem = ({
	className,
	children,
	ref,
	...props
}: AutocompleteGridItemProps) => {
	return (
		<BaseAutocomplete.Item
			className={cn(
				"group style-text-prose--1 flex h-lg min-w-(--anchor-width) cursor-default select-none items-center rounded-md hover:cursor-pointer hover:bg-secondary hover:text-surface data-highlighted:relative data-highlighted:z-0 data-highlighted:bg-secondary data-highlighted:text-surface data-highlighted:before:absolute data-highlighted:before:inset-[0px] data-highlighted:before:z-[-1] data-highlighted:before:rounded-md",
				className,
			)}
			ref={ref}
			{...props}
		>
			<span className="text-lg leading-none">{children}</span>
		</BaseAutocomplete.Item>
	)
}
