import { Combobox as BaseCombobox } from "@base-ui/react/combobox"
import { CheckIcon } from "@phosphor-icons/react"
import { cn } from "@/utils/cn"
import type { ComboboxItemProps } from "./combobox.types"

export const ComboboxItem = ({
	className,
	children,
	ref,
	...props
}: ComboboxItemProps) => {
	return (
		<BaseCombobox.Item
			className={cn(
				"style-text-default-0 mr-2xs grid cursor-default select-none grid-cols-[1fr_0.75rem] items-center gap-xs rounded-md pointer-coarse:py-xs py-3xs pr-2xs pl-xs leading-md outline-none transition-colors first-of-type:mt-2xs last-of-type:mb-2xs hover:cursor-pointer data-highlighted:relative data-highlighted:z-0 data-highlighted:bg-primary-container data-selected:bg-primary data-highlighted:text-on-primary-container data-selected:text-surface data-highlighted:before:absolute data-highlighted:before:inset-x-3xs data-highlighted:before:inset-y-[0px] data-highlighted:before:z-[-1] data-highlighted:before:rounded-sm group-data-[side=none]:pr-xs group-data-[side=none]:leading-lg",
				className,
			)}
			ref={ref}
			{...props}
		>
			<span className="col-start-1">{children}</span>
			<BaseCombobox.ItemIndicator
				className={"col-start-2 place-self-end self-center"}
			>
				<CheckIcon className="size-sm" weight="bold" />
			</BaseCombobox.ItemIndicator>
		</BaseCombobox.Item>
	)
}
