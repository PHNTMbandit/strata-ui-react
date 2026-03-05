import { Menu as BaseMenu } from "@base-ui/react/menu"
import { cn } from "suwa-ui"
import type { MenuGroupLabelProps } from "./menu.types"

export const MenuGroupLabel = ({
	className,
	children,
	ref,
	...props
}: MenuGroupLabelProps) => {
	return (
		<BaseMenu.GroupLabel
			className={cn(
				"style-text-default--2 cursor-default select-none px-2xs py-3xs text-on-surface-variant leading-4",
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
		</BaseMenu.GroupLabel>
	)
}
