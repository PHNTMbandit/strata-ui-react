import * as BaseResizable from "react-resizable-panels"
import { cn } from "@/utils/cn"
import type { ResizeableHandleProps } from "./resizeable.types"

export const ResizeableHandle = ({
	withHandle = false,
	className,
	children,
	...props
}: ResizeableHandleProps) => {
	return (
		<BaseResizable.Separator
			className={cn(
				"relative flex w-px items-center justify-center bg-outline after:absolute after:inset-y-[0px] after:left-1/2 after:w-px after:-translate-x-1/2 focus-visible:outline-hidden aria-[orientation=horizontal]:h-px aria-[orientation=horizontal]:w-full aria-[orientation=horizontal]:after:left-[0px] aria-[orientation=horizontal]:after:h-px aria-[orientation=horizontal]:after:w-full aria-[orientation=horizontal]:after:translate-x-[0px] aria-[orientation=horizontal]:after:-translate-y-1/2 [&[aria-orientation=horizontal]>div]:rotate-90",
				className,
			)}
			data-slot="resizable-handle"
			{...props}
		>
			{withHandle && (
				<div className="z-10 flex h-md w-3xs shrink-0 rounded-lg bg-outline" />
			)}
		</BaseResizable.Separator>
	)
}
