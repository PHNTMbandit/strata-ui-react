import { Dialog as BaseDialog } from "@base-ui/react/dialog"
import { XIcon } from "@phosphor-icons/react"
import { cn } from "@/utils/cn"
import type { DialogCloseProps } from "./dialog.types"

export const DialogClose = ({
	className,
	children,
	ref,
	...props
}: DialogCloseProps) => {
	return (
		<BaseDialog.Close
			className={cn("absolute top-sm right-sm", className)}
			ref={ref}
			{...props}
			render={
				<button aria-label="Close" className="" type="button">
					<XIcon
						className="size-sm text-on-surface transition-colors hover:cursor-pointer hover:text-error"
						weight="bold"
					/>
				</button>
			}
		>
			{children}
		</BaseDialog.Close>
	)
}
