import { Menu as BaseMenu } from "@base-ui/react/menu"
import { CheckIcon } from "@phosphor-icons/react"
import { cn } from "@/utils/cn"
import type { MenuCheckboxItemProps } from "./menu.types"

export const MenuCheckboxItem = ({
	className,
	children,
	ref,
	...props
}: MenuCheckboxItemProps) => {
	return (
		<BaseMenu.CheckboxItem
			className={cn(
				"grid cursor-default select-none grid-cols-[1fr_2rem] items-center px-sm py-3xs leading-md outline outline-transparent before:outline before:outline-transparent hover:cursor-pointer data-highlighted:relative data-highlighted:z-0 data-highlighted:text-on-brand-container data-highlighted:before:absolute data-highlighted:before:inset-x-3xs data-highlighted:before:inset-y-[0px] data-highlighted:before:z-[-1] data-highlighted:before:rounded-md data-highlighted:before:bg-brand-container data-highlighted:before:outline-brand-outline",
				className,
			)}
			ref={ref}
			{...props}
		>
			<span className="col-start-1">{children}</span>
			<BaseMenu.CheckboxItemIndicator className="col-start-2 flex items-center justify-center place-self-end self-center">
				<CheckIcon className="size-sm" weight="bold" />
			</BaseMenu.CheckboxItemIndicator>
		</BaseMenu.CheckboxItem>
	)
}
