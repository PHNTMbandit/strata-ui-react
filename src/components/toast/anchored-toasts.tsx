import { Toast as BaseToast } from "@base-ui/react/toast"
import { cn } from "@/utils/cn"
import { AnchoredToastItem } from "./anchored-toast-item"
import type { AnchoredToastProps } from "./toast.types"
import { useToastManager } from "./toast-manager"

export const AnchoredToasts = ({
	className,
	children,
	ref,
	...props
}: AnchoredToastProps) => {
	const { toasts } = useToastManager()

	return (
		<BaseToast.Portal>
			<BaseToast.Viewport
				className={cn(
					"fixed top-auto right-[1rem] bottom-[1rem] z-10 mx-auto flex w-[250px] sm:right-[2rem] sm:bottom-[2rem] sm:w-[300px]",
					className,
				)}
				ref={ref}
				{...props}
			>
				{toasts.map((toast) => (
					<BaseToast.Positioner
						className={"z-[calc(1000-var(--toast-index))]"}
						key={toast.id}
						toast={toast}
					>
						<AnchoredToastItem toast={toast} {...props} />
					</BaseToast.Positioner>
				))}
			</BaseToast.Viewport>
		</BaseToast.Portal>
	)
}
