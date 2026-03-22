import { cn } from "@/utils/cn"
import { Button } from "../button"
import { useTable } from "./table"
import type { TablePaginationProps } from "./table.types"
import { TableFirstPage } from "./table-first-page"
import { TableLastPage } from "./table-last-page"
import { TableNextPage } from "./table-next-page"
import { TablePreviousPage } from "./table-previous-page"

export const TablePagination = ({
	truncateFrom,
	truncateTo,
	className,
	children,
	ref,
	...props
}: TablePaginationProps) => {
	const { table } = useTable()

	const handleClick = (pageIndex: number) => {
		table.setPageIndex(pageIndex)
	}

	return (
		<div
			className={cn(
				"inline-flex items-center justify-center gap-3xs",
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
			<TableFirstPage />
			<TablePreviousPage />
			{Array.from({ length: table.getPageCount() }, (_, i) => {
				const start = truncateFrom ?? 0
				const end = truncateTo ?? table.getPageCount()
				if (i >= start && i < end) return null

				return (
					<Button
						disabled={i === table.getState().pagination.pageIndex}
						key={`page-${
							// biome-ignore lint/suspicious/noArrayIndexKey: The page index is a stable identifier for the page button, as it corresponds to the page number. It will not change unless the number of pages changes, which is a valid reason for the button to be re-rendered.
							i
						}`}
						onClick={() => handleClick(i)}
						size={"iconMedium"}
						tone="neutral"
					>
						{i + 1}
					</Button>
				)
			})}
			<TableNextPage />
			<TableLastPage />
		</div>
	)
}
