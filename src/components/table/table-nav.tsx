import { cn } from "@/utils/cn"

type TableNavProps = React.ComponentProps<"div">

export const TableNav = ({
	className,
	children,
	ref,
	...props
}: TableNavProps) => {
	return (
		<div
			className={cn(
				"inline-flex items-center justify-center gap-3xx",
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
		</div>
	)
}
