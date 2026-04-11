import { Dialog as BaseDialog } from '@base-ui/react/dialog'
import { XIcon } from '@phosphor-icons/react'
import { Button } from '../button'
import { cn } from '@/utils/cn'

import type { DialogCloseProps } from './dialog.types'

export const DialogClose = ({ className, children, ref, ...props }: DialogCloseProps) => {
  return (
    <BaseDialog.Close
      className={cn('absolute top-sm right-sm', className)}
      ref={ref}
      {...props}
      render={
        <Button variant={'ghost'} tone="error" size="iconXSmall" aria-label="Close" type="button">
          <XIcon className="size-sm" weight="bold" />
        </Button>
      }
    >
      {children}
    </BaseDialog.Close>
  )
}
