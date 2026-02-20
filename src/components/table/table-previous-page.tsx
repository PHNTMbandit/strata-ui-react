import { CaretLeftIcon } from "@phosphor-icons/react"
import type * as React from "react"
import { cn } from "@/utils/cn"
import { Button } from "../button"
import { useTable } from "./table"

type TablePreviousPageProps = React.ComponentProps<typeof Button>

export const TablePreviousPage = ({
	className,
	children,
	ref,
	...props
}: TablePreviousPageProps) => {
	const { table } = useTable()

	const handleClick = () => {
		table.previousPage()
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
			<CaretLeftIcon weight="bold" />
		</Button>
	)
}
