import { FunnelIcon } from "@phosphor-icons/react"
import { cn } from "@/utils/cn"
import { Button } from "../button"
import type { TableFilterProps } from "./table.types"

export const TableFilter = ({
	className,
	children,
	ref,
	...props
}: TableFilterProps) => {
	return (
		<Button className={cn("", className)} ref={ref} {...props}>
			{children}
			<FunnelIcon weight="bold" />
		</Button>
	)
}
