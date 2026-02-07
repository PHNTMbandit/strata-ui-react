import { Toggle as BaseToggle } from "@base-ui/react/toggle"
import { cn } from "@/utils/cn"
import type { ToggleProps } from "./toggle.types"

export const Toggle = ({
	pressedChildren,
	className,
	children,
	ref,
	...props
}: ToggleProps) => {
	return (
		<BaseToggle
			ref={ref}
			{...props}
			render={(props, state) => {
				return (
					<button
						{...props}
						className={cn(
							"style-text-default--2 flex h-md min-w-md items-center justify-center gap-3xs rounded-sm bg-surface-container-low px-3xs transition-all hover:cursor-pointer data-pressed:inset-shadow-xs data-pressed:bg-surface-dim [&:not([data-pressed])]:not-hover:shadow-xs [&:not([data-pressed])]:hover:shadow-sm [&>svg]:size-sm",
							className,
						)}
						type="button"
					>
						{state.pressed && pressedChildren ? pressedChildren : children}
					</button>
				)
			}}
		/>
	)
}
