import { CaretLeftIcon } from "@phosphor-icons/react"
import { cn } from "@/utils/cn"
import { Button } from "../button"
import { useTable } from "./table"
import type { TablePreviousPageProps } from "./table.types"

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
			tone="neutral"
			variant="ghost"
			{...props}
		>
			{children}
			<CaretLeftIcon weight="bold" />
		</Button>
	)
}
