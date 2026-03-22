import { Input as BaseInput } from "@base-ui/react/input"
import { useRef } from "react"
import { cn } from "@/utils/cn"
import type { InputProps } from "./input.types"

export const Input = ({
	leadingIcon: Icon,
	children,
	className,
	ref,
	...props
}: InputProps) => {
	const inputRef = useRef<HTMLInputElement>(null)
	const colorPreviewRef = useRef<HTMLDivElement>(null)
	const colorLabelRef = useRef<HTMLParagraphElement>(null)

	const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const color = e.target.value
		if (colorPreviewRef.current) {
			colorPreviewRef.current.style.backgroundColor = color
		}
		if (colorLabelRef.current) {
			colorLabelRef.current.textContent = color
		}
	}

	if (props.type === "color") {
		const value = (props.value as string) ?? "#000000"

		return (
			<button
				aria-label="Open color picker"
				className="elevated-sm relative h-xl w-[calc(var(--spacing-3xl)+5rem)] items-center rounded-xl bg-surface-container pl-xs text-prose-0 outline-2 outline-outline-variant transition-all focus-within:caret-brand focus-within:outline-brand focus-within:outline-offset-2 hover:cursor-pointer hover:not-focus-within:outline-outline hover:not-focus-within:outline-offset-2 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50 data-[disabled=true]:hover:outline-transparent"
				onClick={() => inputRef.current?.click()}
				type="button"
			>
				<div
					className={cn(
						"absolute top-1/2 left-[0px] aspect-square h-full -translate-y-1/2 rounded-l-xl border-outline border-r",
					)}
					ref={colorPreviewRef}
					style={{
						backgroundColor: value,
					}}
				/>
				<BaseInput
					className="peer pointer-events-none invisible absolute top-lg"
					onChange={handleColorChange}
					ref={inputRef}
					type="color"
					value={value}
					{...props}
				/>
				<p className="pl-xl text-left text-default-0" ref={colorLabelRef}>
					{value}
				</p>
			</button>
		)
	}

	return (
		<div
			aria-disabled={props.disabled}
			className={cn(
				"group elevation-sm flex h-xl w-full items-center gap-xs rounded-full bg-surface-container py-sm pr-xs pl-md text-prose-0 outline-2 outline-outline-variant transition-all focus-within:caret-brand focus-within:outline-brand focus-within:outline-offset-2 hover:not-focus-within:outline-outline hover:not-focus-within:outline-offset-2 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50 data-[disabled=true]:hover:outline-transparent",
				className,
			)}
			data-disabled={props.disabled}
		>
			{Icon && (
				<div
					className={cn(
						"flex items-center justify-center text-on-surface/50 transition-all group-focus-within:text-brand [&>svg]:size-sm",
					)}
				>
					<Icon weight="bold" />
				</div>
			)}
			<BaseInput
				className={cn(
					"w-full outline-none",
					"placeholder:opacity-60",
					"disabled:cursor-not-allowed disabled:text-on-surface/50",
					"overflow-ellipsis",
				)}
				ref={ref}
				{...props}
			/>
			{children}
		</div>
	)
}
