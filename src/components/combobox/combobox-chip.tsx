import { Combobox as BaseCombobox } from "@base-ui/react/combobox"
import { XIcon } from "@phosphor-icons/react"
import { cn } from "@/utils/cn"
import type { ComboboxChipProps } from "./combobox.types"

export const ComboboxChip = ({
	className,
	children,
	ref,
	...props
}: ComboboxChipProps) => {
	return (
		<BaseCombobox.Chip
			className={cn(
				"style-text-default-0 inline-flex h-lg items-center gap-xs rounded-full bg-primary-container pr-2xs pl-sm text-on-primary-container",
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
			<BaseCombobox.ChipRemove
				aria-label="Remove"
				className={
					"rounded-full p-3xs transition-colors hover:cursor-pointer hover:bg-error-container hover:text-on-error-container"
				}
			>
				<XIcon className="size-sm" weight="bold" />
			</BaseCombobox.ChipRemove>
		</BaseCombobox.Chip>
	)
}
