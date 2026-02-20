import type { Table as TanstackTable } from "@tanstack/react-table"
import * as React from "react"
import { cn } from "@/utils/cn"

type TableProps = React.ComponentProps<"table"> & {
	table: TanstackTable<any>
}

const TableContext = React.createContext<TableProps | null>(null)

export const Table = ({
	table,
	className,
	children,
	ref,
	...props
}: TableProps) => {
	return (
		<TableContext.Provider
			value={{ table, className, children, ref, ...props }}
		>
			<table className={cn("", className)} ref={ref} {...props}>
				{children}
			</table>
		</TableContext.Provider>
	)
}

export const useTable = () => {
	const context = React.useContext(TableContext)

	if (!context) {
		throw new Error("useTable must be used within a TableProvider")
	}

	return context
}
