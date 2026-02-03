import { ScrollArea as BaseScrollArea } from "@base-ui/react/scroll-area"
import { cn } from "@/utils/cn"
import type { ScrollAreaProps } from "./scroll-area.types"

export const ScrollArea = ({
	orientation = "vertical",
	defaultHeight = 200,
	className,
	children,
	ref,
	...props
}: ScrollAreaProps) => {
	return (
		<BaseScrollArea.Root
			className={cn(
				className,
				`rounded-lg bg-surface-container`,
				orientation === "horizontal" && "h-full",
			)}
			ref={ref}
			style={{
				height: orientation === "vertical" ? `${defaultHeight}px` : "100%",
			}}
			{...props}
		>
			<BaseScrollArea.Viewport
				className={cn(
					"prose-step-0 flex h-full gap-xs overscroll-contain rounded-lg bg-surface-container-mid py-xs pr-md",
					orientation === "horizontal" && "flex-row pb-md pl-sm",
					orientation === "vertical" && "flex-col pl-sm",
				)}
			>
				{children}
			</BaseScrollArea.Viewport>
			<BaseScrollArea.Scrollbar
				className={cn(
					"ml-sm opacity-0 transition-opacity delay-300 hover:cursor-pointer data-hovering:opacity-100 data-scrolling:opacity-100 data-hovering:delay-0 data-scrolling:delay-0 data-hovering:duration-75 data-scrolling:duration-75",
					orientation === "vertical" && "my-xs mr-2xs w-2xs",
					orientation === "horizontal" && "mx-xs mb-xs h-2xs",
				)}
				orientation={orientation}
			>
				<BaseScrollArea.Thumb
					className={"h-full w-full rounded-full bg-primary shadow-xs"}
				/>
			</BaseScrollArea.Scrollbar>
			<BaseScrollArea.Corner />
		</BaseScrollArea.Root>
	)
}
