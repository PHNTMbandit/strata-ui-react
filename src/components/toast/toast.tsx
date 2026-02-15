import { Toast as BaseToast } from "@base-ui/react/toast"
import { XIcon } from "@phosphor-icons/react"
import { cn } from "@/utils/cn"
import type { ToastProps } from "./toast.types"
import { useToastManager } from "./toast-manager"

export const Toast = ({
	className,
	children,
	position = "bottom-center",
	ref,
	...props
}: ToastProps) => {
	const { toasts } = useToastManager()

	const getSwipeDirection = (pos: string) => {
		switch (pos) {
			case "top-left":
				return "left"
			case "bottom-left":
				return "left"
			case "top-right":
				return "right"
			case "bottom-right":
				return "right"
			case "top-center":
				return "up"
			case "bottom-center":
				return "down"
			default:
				return "right"
		}
	}

	return toasts.map((toast) => (
		<BaseToast.Root
			className={cn(
				position === "bottom-right" ||
					position === "bottom-center" ||
					position === "bottom-left"
					? 'transform-[translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)+calc(min(var(--toast-index),10)*-15px)))_scale(calc(max(0,1-(var(--toast-index)*0.1))))] data-expanded:transform-[translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-offset-y)*-1+calc(var(--toast-index)*var(--gap)*-1)+var(--toast-swipe-movement-y)))] data-starting-style:transform-[translateY(150%)] [&[data-ending-style]:not([data-limited]):not([data-swipe-direction])]:transform-[translateY(150%)] data-ending-style:data-[swipe-direction=down]:transform-[translateY(calc(var(--toast-swipe-movement-y)+150%))] data-expanded:data-ending-style:data-[swipe-direction=down]:transform-[translateY(calc(var(--toast-swipe-movement-y)+150%))] data-ending-style:data-[swipe-direction=left]:transform-[translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))] data-expanded:data-ending-style:data-[swipe-direction=left]:transform-[translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))] data-ending-style:data-[swipe-direction=right]:transform-[translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-expanded:data-ending-style:data-[swipe-direction=right]:transform-[translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-ending-style:data-[swipe-direction=up]:transform-[translateY(calc(var(--toast-swipe-movement-y)-150%))] data-expanded:data-ending-style:data-[swipe-direction=up]:transform-[translateY(calc(var(--toast-swipe-movement-y)-150%))] absolute inset-shadow-raised-md right-0 bottom-0 left-auto z-[calc(1000-var(--toast-index))] mr-0 flex w-full select-none flex-col gap-3xs rounded-lg border border-outline bg-surface-container bg-clip-padding p-sm shadow-md transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [transition-property:opacity,transform] after:absolute after:bottom-full after:left-0 after:h-[calc(var(--gap)+1px)] after:w-full after:content-[""] data-ending-style:opacity-0 data-limited:opacity-0'
					: "transform-[translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)+calc(min(var(--toast-index),10)*15px)))_scale(calc(max(0,1-(var(--toast-index)*0.1))))] data-expanded:transform-[translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-offset-y)+calc(var(--toast-index)*var(--gap))+var(--toast-swipe-movement-y)))] data-starting-style:transform-[translateY(-150%)] [&[data-ending-style]:not([data-limited]):not([data-swipe-direction])]:transform-[translateY(-150%)] data-ending-style:data-[swipe-direction=down]:transform-[translateY(calc(var(--toast-swipe-movement-y)+150%))] data-expanded:data-ending-style:data-[swipe-direction=down]:transform-[translateY(calc(var(--toast-swipe-movement-y)+150%))] data-ending-style:data-[swipe-direction=left]:transform-[translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))] data-expanded:data-ending-style:data-[swipe-direction=left]:transform-[translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))] data-ending-style:data-[swipe-direction=right]:transform-[translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-expanded:data-ending-style:data-[swipe-direction=right]:transform-[translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))] data-ending-style:data-[swipe-direction=up]:transform-[translateY(calc(var(--toast-swipe-movement-y)-150%))] data-expanded:data-ending-style:data-[swipe-direction=up]:transform-[translateY(calc(var(--toast-swipe-movement-y)-150%))] absolute inset-shadow-raised-md top-0 right-0 left-0 z-[calc(1000-var(--toast-index))] mx-auto w-full select-none rounded-lg border border-gray-200 border-outline-variant bg-gray-50 bg-clip-padding p-sm shadow-md transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [transition-property:opacity,transform] after:absolute after:top-full after:left-0 after:h-[calc(var(--gap)+1px)] after:w-full after:content-[''] data-ending-style:opacity-0 data-limited:opacity-0",
				className,
				toast.data.variant === "primary" &&
					"border-primary bg-primary-container text-on-primary-container",
				toast.data.variant === "secondary" &&
					"border-secondary bg-secondary-container text-on-secondary-container",
				toast.data.variant === "neutral" &&
					"border-outline-variant bg-surface-bright text-on-surface",
				toast.data.variant === "success" &&
					"border-success bg-success-container text-on-success-container",
				toast.data.variant === "error" &&
					"border-error bg-error-container text-on-error-container",
				toast.data.variant === "warning" &&
					"border-warning bg-warning-container text-on-warning-container",
			)}
			key={toast.id}
			ref={ref}
			style={{
				["--gap" as string]: "1rem",
				["--offset-y" as string]:
					"calc(var(--toast-offset-y) * -1 + (var(--toast-index) * var(--gap) * -1) + var(--toast-swipe-movement-y))",
			}}
			swipeDirection={getSwipeDirection(position)}
			toast={toast}
			{...props}
		>
			{children}
			<BaseToast.Title className={cn("style-text-strong--1")} />
			<BaseToast.Description className={cn("style-text-prose--1")} />
			<BaseToast.Close
				aria-label="Close"
				className="absolute top-xs right-2xs flex size-xs items-center justify-center rounded border-none bg-transparent text-on-surface hover:cursor-pointer"
			>
				<XIcon weight="bold" />
			</BaseToast.Close>
		</BaseToast.Root>
	))
}
