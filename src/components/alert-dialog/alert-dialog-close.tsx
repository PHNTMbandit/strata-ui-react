import { AlertDialog as BaseAlertDialog } from "@base-ui/react"
import { cn } from "@/utils/cn"
import { Button } from "../button"
import type { AlertDialogCloseProps } from "./alert-dialog.types"

export const AlertDialogClose = ({
	className,
	children,
	ref,
	...props
}: AlertDialogCloseProps) => {
	return (
		<BaseAlertDialog.Close
			className={cn("", className)}
			ref={ref}
			{...props}
			render={
				<Button
					aria-label="Close"
					className="w-full"
					style="ghost"
					tone="neutral"
				>
					{children}
				</Button>
			}
		/>
	)
}
