import { cn } from "@/utils/cn"
import { type ButtonProps, buttonVariants } from "./button.types"

export function Button({
	className,
	children,
	tone = "brand",
	size = "medium",
	variant = "solid",
	...props
}: ButtonProps) {
	return (
		<button
			className={cn(buttonVariants({ tone, size, variant, className }))}
			{...props}
		>
			{children}
		</button>
	)
}
