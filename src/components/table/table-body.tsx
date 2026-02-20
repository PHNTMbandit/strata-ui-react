import { flexRender } from "@tanstack/react-table"
import { cn } from "@/utils/cn"
import { useTable } from "./table"

type TableBodyProps = React.ComponentProps<"tbody">

export const TableBody = ({
	className,
	children,
	ref,
	...props
}: TableBodyProps) => {
	const { table } = useTable()

	return (
		<tbody className={cn("", className)} ref={ref} {...props}>
			{children}
			{table.getRowModel().rows.map((row) => {
				return (
					<tr key={row.id}>
						{row.getVisibleCells().map((cell) => {
							return (
								<td key={cell.id}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</td>
							)
						})}
					</tr>
				)
			})}
		</tbody>
	)
}
