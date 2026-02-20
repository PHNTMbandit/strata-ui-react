import { CaretRightIcon } from "@phosphor-icons/react"
import type * as React from "react"
import { cn } from "@/utils/cn"
import { Button } from "../button"
import { useTable } from "./table"

type TableNextPageProps = React.ComponentProps<typeof Button>

export const TableNextPage = ({
	className,
	children,
	ref,
	...props
}: TableNextPageProps) => {
	const { table } = useTable()

	const handleClick = () => {
		table.nextPage()
	}

	return (
		<Button
			className={cn("shrink-0", className)}
			disabled={!table.getCanNextPage()}
			onClick={handleClick}
			ref={ref}
			size={"iconMedium"}
			style="ghost"
			tone="neutral"
			{...props}
		>
			{children}
			<CaretRightIcon weight="bold" />
		</Button>
	)
}
