import { Toggle as BaseToggle } from "@base-ui/react/toggle"
import { cn } from "@/utils/cn"
import { type ToggleProps, toggleVariants } from "./toggle.types"

export const Toggle = ({
	size,
	tone,
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
						className={cn(toggleVariants({ size, tone, className }))}
						type="button"
					>
						{typeof children === "function" ? children(state) : children}
					</button>
				)
			}}
		/>
	)
}
