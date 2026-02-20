import { flexRender } from "@tanstack/react-table"
import type * as React from "react"
import { cn } from "@/utils/cn"
import { useTable } from "./table"

type TableHeaderProps = React.ComponentProps<"thead">

export const TableHeader = ({
	className,
	children,
	ref,
	...props
}: TableHeaderProps) => {
	const { table } = useTable()

	return (
		<thead className={cn("", className)} ref={ref} {...props}>
			{children}
			{table.getHeaderGroups().map((headerGroup) => (
				<tr key={headerGroup.id}>
					{headerGroup.headers.map((header) => {
						return (
							<th colSpan={header.colSpan} key={header.id}>
								{header.isPlaceholder ? null : (
									<>
										<div
											{...{
												className: header.column.getCanSort()
													? "cursor-pointer select-none"
													: "",
												onClick: header.column.getToggleSortingHandler(),
											}}
										>
											{flexRender(
												header.column.columnDef.header,
												header.getContext(),
											)}
											{{
												asc: " 🔼",
												desc: " 🔽",
											}[header.column.getIsSorted() as string] ?? null}
										</div>
										{header.column.getCanFilter() ? (
											<div>{/* <Filter column={header.column} /> */}</div>
										) : null}
									</>
								)}
							</th>
						)
					})}
				</tr>
			))}
		</thead>
	)
}
