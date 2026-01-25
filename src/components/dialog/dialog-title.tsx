import { Dialog as BaseDialog } from "@base-ui/react/dialog"
import { cn } from "@/utils/cn"
import type { DialogTitleProps } from "./dialog.types"

export const DialogTitle = ({
	className,
	children,
	ref,
	...props
}: DialogTitleProps) => {
	return (
		<BaseDialog.Title
			className={cn(
				"style-text-strong-2 flex items-center gap-2xs [&>svg]:size-md",
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
		</BaseDialog.Title>
	)
}
