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
		const defaultColor = (props.defaultValue as string) ?? "#000000"

		return (
			<button
				aria-label="Open color picker"
				className="relative h-xl w-[calc(var(--spacing-3xl)+5rem)] items-center rounded-xl bg-surface-container-low pl-xs shadow-xs outline-2 outline-transparent transition-all hover:cursor-pointer hover:outline-outline peer-focus:outline-primary"
				onClick={() => inputRef.current?.click()}
				type="button"
			>
				<div
					className={cn(
						"absolute top-1/2 left-[0px] aspect-square h-full -translate-y-1/2 rounded-l-xl border-outline border-r",
					)}
					ref={colorPreviewRef}
					style={{
						backgroundColor: defaultColor,
					}}
				/>
				<BaseInput
					className="peer pointer-events-none invisible absolute top-lg"
					defaultValue={defaultColor}
					onChange={handleColorChange}
					ref={inputRef}
					type="color"
					{...props}
				/>
				<p className="style-text-default-0 pl-xl text-left" ref={colorLabelRef}>
					{defaultColor}
				</p>
			</button>
		)
	}

	return (
		<div
			aria-disabled={props.disabled}
			className={cn(
				"group style-text-prose-0 flex h-xl w-full items-center gap-xs rounded-full bg-surface-container-low py-sm pr-xs pl-md shadow-xs outline-2 outline-transparent transition-all focus-within:caret-primary focus-within:outline-primary hover:not-focus-within:outline-outline data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50 data-[disabled=true]:hover:outline-transparent",
				className,
			)}
			data-disabled={props.disabled}
		>
			{Icon && (
				<div
					className={cn(
						"flex items-center justify-center text-on-surface-variant transition-all group-focus-within:text-primary [&>svg]:size-sm",
					)}
				>
					<Icon weight="bold" />
				</div>
			)}
			<BaseInput
				className={cn(
					"w-full outline-none",
					"placeholder:opacity-60",
					"disabled:cursor-not-allowed disabled:text-text-neutral-primary-disabled",
					"overflow-ellipsis",
				)}
				ref={ref}
				{...props}
			/>
			{children}
		</div>
	)
}
