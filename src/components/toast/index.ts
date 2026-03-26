import { createToastManager } from "./toast-manager";

export { StackToasts } from "./stack-toasts";
export type {
  AnchoredToastProps,
  StackToastProps,
  ToastProviderProps,
  ToastVariant,
} from "./toast.types";
export { useToastManager } from "./toast-manager";
export { ToastProvider } from "./toast-provider";

export const anchoredToastManager = createToastManager();
export const stackToastManager = createToastManager();
