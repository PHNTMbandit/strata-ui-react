import React from "react"
import { cn } from "@/utils/cn"
import type { TextAreaProps } from "./text-area.types"

export const TextArea = ({ className, ref, ...props }: TextAreaProps) => {
	const [value, setValue] = React.useState("")
	const isMaxLengthExceeded = props.maxLength
		? value.length >= props.maxLength
		: false

	return (
		<div className="flex flex-col overflow-hidden rounded-lg bg-surface-bright shadow-xs outline-2 outline-transparent transition-colors focus-within:outline-secondary hover:not-focus-within:outline-outline data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50 data-[disabled=true]:hover:outline-transparent">
			<textarea
				className={cn(
					"style-text-prose-0 px-xs py-2xs outline-none focus-within:caret-secondary",
					className,
				)}
				ref={ref}
				{...props}
				onChange={(e) => setValue(e.target.value)}
				value={value}
			/>
			<span
				className={cn(
					"style-text-default--1 border-outline border-t bg-surface-container-mid px-xs py-2xs transition-colors",
					isMaxLengthExceeded &&
						"border-error-outline bg-error-container text-on-error-container",
				)}
			>
				{value.length} / {props.maxLength}
			</span>
		</div>
	)
}
