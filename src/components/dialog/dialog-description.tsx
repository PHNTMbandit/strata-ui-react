import { Dialog as BaseDialog } from '@base-ui/react/dialog'
import { cn } from '@/utils/cn'

import type { DialogDescriptionProps } from './dialog.types'

export const DialogDescription = ({
  className,
  children,
  ref,
  ...props
}: DialogDescriptionProps) => {
  return (
    <BaseDialog.Description
      className={cn('mb-0 style-text-prose-0', className)}
      ref={ref}
      {...props}
    >
      {children}
    </BaseDialog.Description>
  )
}
