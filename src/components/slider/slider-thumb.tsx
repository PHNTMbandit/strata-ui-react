import { Slider as BaseSlider } from "@base-ui/react"
import React from "react"
import { cn } from "@/utils/cn"
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip"
import type { SliderThumbProps } from "./slider.types"

export const SliderThumb = ({
	className,
	children,
	ref,
	...props
}: SliderThumbProps) => {
	const [isHovering, setIsHovering] = React.useState(false)
	const [isDragging, setIsDragging] = React.useState(false)

	React.useEffect(() => {
		if (!isDragging) return
		const handlePointerUp = () => setIsDragging(false)
		window.addEventListener("pointerup", handlePointerUp)
		return () => window.removeEventListener("pointerup", handlePointerUp)
	}, [isDragging])

	return (
		<Tooltip open={isHovering || isDragging} trackCursorAxis="x">
			<TooltipTrigger
				delay={0}
				render={
					<BaseSlider.Thumb
						className={cn(
							"absolute inset-shadow-raised-xs aspect-square size-sm rounded-full border border-secondary bg-surface-bright shadow-xs outline-none transition-[width,height] hover:cursor-pointer data-dragging:inset-shadow-raised-sm data-dragging:size-md data-dragging:cursor-grabbing data-dragging:border-2 data-dragging:shadow-sm",
							className,
						)}
						onPointerDown={() => setIsDragging(true)}
						onPointerEnter={() => setIsHovering(true)}
						onPointerLeave={() => setIsHovering(false)}
						ref={ref}
						{...props}
					>
						{children}
					</BaseSlider.Thumb>
				}
			/>
			<TooltipContent sideOffset={10}>
				<BaseSlider.Value />
			</TooltipContent>
		</Tooltip>
	)
}
