import { cn } from "@/utils/cn"
import type { AlertDialogHeaderProps } from "./alert-dialog.types"

export const AlertDialogHeader = ({
	className,
	children,
	ref,
	...props
}: AlertDialogHeaderProps) => {
	return (
		<div
			className={cn(
				"flex w-full items-center justify-center [&>svg]:size-xl [&>svg]:text-error",
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
		</div>
	)
}
