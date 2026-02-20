import { CaretLineLeftIcon } from "@phosphor-icons/react"
import type * as React from "react"
import { cn } from "@/utils/cn"
import { Button } from "../button"
import { useTable } from "./table"

type TableFirstPageProps = React.ComponentProps<typeof Button>

export const TableFirstPage = ({
	className,
	children,
	ref,
	...props
}: TableFirstPageProps) => {
	const { table } = useTable()

	const handleClick = () => {
		table.setPageIndex(0)
	}

	return (
		<Button
			className={cn("shrink-0", className)}
			disabled={!table.getCanPreviousPage()}
			onClick={handleClick}
			ref={ref}
			size={"iconMedium"}
			style="ghost"
			tone="neutral"
			{...props}
		>
			{children}
			<CaretLineLeftIcon weight="bold" />
		</Button>
	)
}
