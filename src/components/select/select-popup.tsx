import { Select as BaseSelect } from "@base-ui/react/select"
import { CaretDownIcon, CaretUpIcon } from "@phosphor-icons/react"
import { cn } from "@/utils/cn"
import type { SelectPopupProps } from "./select.types"

export const SelectPopup = ({
	className,
	children,
	ref,
	...props
}: SelectPopupProps) => {
	return (
		<BaseSelect.Portal>
			<BaseSelect.Positioner
				className={cn("z-10 select-none outline-none", className)}
				ref={ref}
				{...props}
				sideOffset={8}
			>
				<BaseSelect.Popup
					className={
						"group min-w-(--anchor-width) origin-(--transform-origin) rounded-md bg-surface-bright bg-clip-padding p-sm shadow-md outline outline-outline-variant transition-[transform,scale,opacity] data-[side=none]:data-ending-style:scale-90 data-[side=none]:data-starting-style:scale-90 data-[side=none]:data-ending-style:opacity-0 data-[side=none]:data-starting-style:opacity-0 data-[side=none]:min-w-[calc(var(--anchor-width)+1rem)] data-ending-style:scale-90 data-starting-style:scale-90 data-ending-style:opacity-0 data-starting-style:opacity-0"
					}
				>
					<BaseSelect.ScrollUpArrow
						className={
							"top-[0px] right-[0px] z-[1px] flex h-md w-full cursor-default items-center justify-center rounded-md bg-surface-bright before:absolute before:left-[0px] before:h-full before:w-full before:content-[''] data-[side=none]:before:-top-full"
						}
					>
						<CaretUpIcon className="size-sm" weight="fill" />
					</BaseSelect.ScrollUpArrow>
					<BaseSelect.List
						className={
							"relative max-h-(--available-height) scroll-py-md space-y-3xs overflow-y-auto"
						}
					>
						{children}
					</BaseSelect.List>
					<BaseSelect.ScrollDownArrow
						className={
							"right-[0px] bottom-[0px] z-[1px] flex h-md w-full cursor-default items-center justify-center rounded-md bg-surface-bright before:absolute before:left-[0px] before:h-full before:w-full before:content-[''] data-[side=none]:before:-bottom-full"
						}
					>
						<CaretDownIcon className="size-sm" weight="fill" />
					</BaseSelect.ScrollDownArrow>
				</BaseSelect.Popup>
			</BaseSelect.Positioner>
		</BaseSelect.Portal>
	)
}
