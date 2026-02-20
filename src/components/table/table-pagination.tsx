import type * as React from "react"
import { useTable } from "./table"

type TablePaginationProps = Omit<React.ComponentProps<"div">, "children"> & {
	children: (
		start: number,
		end: number,
		totalRows: number,
	) => React.ReactElement
}

export const TablePagination = ({ children }: TablePaginationProps) => {
	const { table } = useTable()
	const pageIndex = table.getState().pagination.pageIndex
	const pageSize = table.getState().pagination.pageSize
	const totalRows = table.getFilteredRowModel().rows.length

	const start = totalRows === 0 ? 0 : pageIndex * pageSize + 1
	const end = totalRows === 0 ? 0 : Math.min(start + pageSize - 1, totalRows)

	return children(start, end, totalRows) as React.ReactElement
}
