import { Dialog as BaseDialog } from '@base-ui/react/dialog'
import { DialogClose } from './dialog-close'
import { cn } from '@/utils/cn'

import type { DialogPopupProps } from './dialog.types'

export const DialogPopup = ({
  showCloseButton = true,
  className,
  children,
  ref,
  ...props
}: DialogPopupProps) => {
  return (
    <BaseDialog.Portal>
      <BaseDialog.Backdrop
        className={
          'fixed inset-[0px] min-h-dvh bg-scrim opacity-50 transition-all duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-[-webkit-touch-callout:none]:absolute'
        }
      />
      <BaseDialog.Popup
        className={cn(
          'fixed top-1/2 left-1/2 max-w-[calc(100vw-3rem)] min-w-1/3 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl bg-surface-container pt-md shadow-md outline outline-outline transition-all duration-150 data-ending-style:scale-90 data-ending-style:opacity-0 data-starting-style:scale-90 data-starting-style:opacity-0',
          className,
        )}
        ref={ref}
        {...props}
      >
        {showCloseButton && <DialogClose />}
        {children}
      </BaseDialog.Popup>
    </BaseDialog.Portal>
  )
}
