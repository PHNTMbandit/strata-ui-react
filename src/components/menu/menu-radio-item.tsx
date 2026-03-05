import { Menu as BaseMenu } from "@base-ui/react/menu"
import { CheckIcon } from "@phosphor-icons/react"
import { cn } from "@/utils/cn"
import type { MenuRadioItemProps } from "./menu.types"

export const MenuRadioItem = ({
	className,
	children,
	ref,
	...props
}: MenuRadioItemProps) => {
	return (
		<BaseMenu.RadioItem
			className={cn(
				"grid cursor-default select-none grid-cols-[1fr_2rem] items-center px-sm py-3xs leading-md outline-none transition-colors before:transition-colors hover:cursor-pointer data-highlighted:relative data-highlighted:z-0 data-highlighted:text-on-primary-container data-highlighted:before:absolute data-highlighted:before:inset-x-3xs data-highlighted:before:inset-y-[0px] data-highlighted:before:z-[-1] data-highlighted:before:rounded-md data-highlighted:before:bg-primary-container",
				className,
			)}
			ref={ref}
			{...props}
		>
			<span className="col-start-1 min-w-3xl">{children}</span>
			<BaseMenu.RadioItemIndicator className="col-start-2 flex items-center justify-center place-self-end self-center">
				<CheckIcon className="size-sm" weight="bold" />
			</BaseMenu.RadioItemIndicator>
		</BaseMenu.RadioItem>
	)
}
