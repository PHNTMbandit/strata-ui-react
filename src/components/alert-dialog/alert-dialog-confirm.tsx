import { AlertDialog as BaseAlertDialog } from '@base-ui/react'
import { Button } from '../button'
import { cn } from '@/utils/cn'

import type { AlertDialogConfirmProps } from './alert-dialog.types'

export const AlertDialogConfirm = ({
  className,
  children,
  ref,
  ...props
}: AlertDialogConfirmProps) => {
  return (
    <BaseAlertDialog.Close
      className={cn('', className)}
      ref={ref}
      {...props}
      render={
        <Button className="w-full" tone="error">
          {children}
        </Button>
      }
    />
  )
}
