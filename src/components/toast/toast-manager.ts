import {
	Toast as BaseToast,
	type ToastManagerAddOptions,
} from "@base-ui/react/toast"

type ToastAddOptions = ToastManagerAddOptions<object> & {
	variant?:
		| "primary"
		| "secondary"
		| "neutral"
		| "success"
		| "error"
		| "info"
		| "warning"
}

export const useToastManager = () => {
	const toast = BaseToast.useToastManager()

	const add = (options: ToastAddOptions) => {
		return toast.add({
			...options,
			data: {
				...options.data,
				variant: options.variant,
			},
		})
	}

	return { add, toasts: toast.toasts }
}
