import { AlertDialog as BaseAlertDialog } from "@base-ui/react"
import { cn } from "@/utils/cn"
import type { AlertDialogPopupProps } from "./alert-dialog.types"

export const AlertDialogPopup = ({
	className,
	children,
	ref,
	...props
}: AlertDialogPopupProps) => {
	return (
		<BaseAlertDialog.Portal>
			<BaseAlertDialog.Backdrop
				className={
					"fixed inset-[0px] min-h-dvh bg-scrim opacity-50 transition-all duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-[-webkit-touch-callout:none]:absolute"
				}
			/>
			<BaseAlertDialog.Popup
				className={cn(
					"fixed top-1/2 left-1/2 min-w-1/3 max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 space-y-sm overflow-hidden rounded-xl bg-surface-container-low pt-md shadow-md outline outline-outline transition-all duration-150 data-ending-style:scale-90 data-starting-style:scale-90 data-ending-style:opacity-0 data-starting-style:opacity-0",
					className,
				)}
				ref={ref}
				{...props}
			>
				{children}
			</BaseAlertDialog.Popup>
		</BaseAlertDialog.Portal>
	)
}
