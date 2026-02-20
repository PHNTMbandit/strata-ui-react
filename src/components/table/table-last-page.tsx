import { CaretLineRightIcon } from "@phosphor-icons/react"
import type * as React from "react"
import { cn } from "@/utils/cn"
import { Button } from "../button"
import { useTable } from "./table"

type TableLastPageProps = React.ComponentProps<typeof Button>

export const TableLastPage = ({
	className,
	children,
	ref,
	...props
}: TableLastPageProps) => {
	const { table } = useTable()

	const handleClick = () => {
		table.setPageIndex(table.getPageCount() - 1)
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
			<CaretLineRightIcon weight="bold" />
		</Button>
	)
}
