import { Meter as BaseMeter } from "@base-ui/react"
import { cn } from "@/utils/cn"
import type { MeterValueProps } from "./meter.types"

export const MeterValue = ({ className, ref, ...props }: MeterValueProps) => {
	return (
		<BaseMeter.Value
			className={cn("style-text-default--1 text-right", className)}
			data-value
			ref={ref}
			{...props}
		/>
	)
}
