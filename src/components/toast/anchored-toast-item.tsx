import { Toast as BaseToast } from "@base-ui/react/toast"
import { cn } from "@/utils/cn"
import type { AnchoredToastItemProps } from "./toast.types"

export const AnchoredToastItem = ({
	className,
	children,
	ref,
	toast,
	...props
}: AnchoredToastItemProps) => {
	return (
		<BaseToast.Root
			className={cn(
				"group flex w-max origin-(--transform-origin) flex-col rounded-md border border-outline bg-surface-container px-sm py-2xs shadow-lg outline outline-outline-variant transition-[transform,scale,opacity] focus-visible:outline-1 focus-visible:-outline-offset-1 data-ending-style:scale-90 data-starting-style:scale-90 data-ending-style:opacity-0 data-starting-style:opacity-0",
				className,
			)}
			ref={ref}
			toast={toast}
			{...props}
		>
			<BaseToast.Arrow className="data-[side=bottom]:-top-3xs data-[side=left]:right-[-13px] data-[side=top]:-bottom-3xs data-[side=right]:left-[-13px] data-[side=left]:rotate-90 data-[side=right]:-rotate-90 data-[side=top]:rotate-180" />
			<BaseToast.Content>
				<BaseToast.Description className={"style-text-default--1"} />
			</BaseToast.Content>
		</BaseToast.Root>
	)
}
