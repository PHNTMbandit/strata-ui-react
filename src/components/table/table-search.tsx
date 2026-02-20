import { MagnifyingGlassIcon } from "@phosphor-icons/react"
import type * as React from "react"
import { cn } from "@/utils/cn"
import { Input } from "../input"
import { useTable } from "./table"

type TableSearchProps = React.ComponentProps<"input">

export const TableSearch = ({
	className,
	children,
	ref,
	...props
}: TableSearchProps) => {
	const { table } = useTable()

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		table.setGlobalFilter(String(event.target.value))
	}

	return (
		<Input
			className={cn("", className)}
			leadingIcon={MagnifyingGlassIcon}
			onChange={handleChange}
			placeholder={`Search by ${table
				.getAllColumns()
				.map((column) => column.id)
				.join(", ")}`}
			ref={ref}
			value={table.getState().globalFilter ?? ""}
			{...props}
		>
			{children}
		</Input>
	)
}
