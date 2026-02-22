import { ArrowsClockwiseIcon } from "@phosphor-icons/react"
import * as React from "react"
import { cn } from "@/utils/cn"
import { Button } from "../button"
import type { TableRefreshProps } from "./table.types"

export const TableRefresh = ({
	className,
	children,
	ref,
	...props
}: TableRefreshProps) => {
	const rerender = React.useReducer(() => ({}), {})[1]

	const handleClick = () => {
		rerender()
	}
	return (
		<Button
			className={cn("", className)}
			onClick={handleClick}
			ref={ref}
			size={"iconMedium"}
			{...props}
		>
			{children}
			<ArrowsClockwiseIcon weight="bold" />
		</Button>
	)
}
