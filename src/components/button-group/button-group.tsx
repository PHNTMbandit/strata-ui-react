import { cn } from "@/utils/cn"
import {
	type ButtonGroupProps,
	buttonGroupVariants,
} from "./button-group.types"

export const ButtonGroup = ({
	split,
	orientation,
	className,
	children,
	ref,
	...props
}: ButtonGroupProps) => {
	return (
		<div
			className={cn(buttonGroupVariants({ orientation, split }), className)}
			ref={ref}
			{...props}
		>
			{children}
		</div>
	)
}
