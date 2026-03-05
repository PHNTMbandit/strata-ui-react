import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete"
import { createElement } from "react"
import { cn } from "@/utils/cn"
import type { AutocompleteInputProps } from "./autocomplete.types"

export const AutocompleteInput = ({
	leadingIcon,
	placeholder,
	className,
	ref,
	...props
}: AutocompleteInputProps) => {
	return (
		<div
			className={cn(
				"group style-text-prose-0 flex h-xl w-full items-center gap-xs rounded-full bg-surface-container-low px-md py-sm shadow-xs outline-2 outline-transparent transition-all focus-within:caret-secondary focus-within:outline-secondary hover:not-focus-within:outline-outline data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50 data-[disabled=true]:hover:outline-transparent",
				className,
			)}
		>
			{leadingIcon && (
				<div
					className={cn(
						"flex items-center justify-center text-on-surface-variant transition-all group-focus-within:text-primary [&>svg]:size-sm",
					)}
				>
					{createElement(leadingIcon, {
						weight: "bold",
					})}
				</div>
			)}
			<BaseAutocomplete.Input
				placeholder={placeholder}
				{...props}
				className={cn(
					"w-full overflow-ellipsis outline-none placeholder:opacity-60 disabled:cursor-not-allowed disabled:text-text-neutral-primary-disabled",
				)}
				ref={ref}
			/>
		</div>
	)
}
