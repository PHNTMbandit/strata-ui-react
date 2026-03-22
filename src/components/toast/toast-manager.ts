import {
	Toast as BaseToast,
	type ToastManagerAddOptions,
} from "@base-ui/react/toast"
import type { ToastVariant } from "./toast.types"

type ToastAddOptions = ToastManagerAddOptions<object> & {
	variant?: ToastVariant
}

export const createToastManager = () => {
	const manager = BaseToast.createToastManager()

	const add = (options: ToastAddOptions) => {
		return manager.add({
			...options,
			data: {
				...options.data,
				variant: options.variant,
			},
		})
	}

	return {
		...manager,
		add,
	}
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
