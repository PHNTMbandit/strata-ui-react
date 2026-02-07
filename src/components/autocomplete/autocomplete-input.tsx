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
		<div className="group style-text-default-0 inset-shadow-sm flex h-xl w-full items-center gap-xs rounded-lg bg-surface-dim px-md py-sm outline-2 outline-transparent transition-all focus-within:caret-primary focus-within:outline-primary hover:not-focus-within:outline-outline data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50 data-[disabled=true]:hover:outline-transparent">
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
					className,
				)}
				ref={ref}
			/>
		</div>
	)
}
