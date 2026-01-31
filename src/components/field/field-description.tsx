import { cn } from "@/utils/cn"

type FieldDescriptionProps = React.ComponentProps<"p">

export const FieldDescription = ({
	className,
	children,
	ref,
	...props
}: FieldDescriptionProps) => {
	return (
		<p
			className={cn("style-text-prose-0 text-on-surface-variant", className)}
			ref={ref}
			{...props}
		>
			{children}
		</p>
	)
}
