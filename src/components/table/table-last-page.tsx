import { CaretLineRightIcon } from "@phosphor-icons/react"
import { cn } from "@/utils/cn"
import { Button } from "../button"
import { useTable } from "./table"
import type { TableLastPageProps } from "./table.types"

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
