import { cn } from '@/utils/cn'

import type { DialogFooterProps } from './dialog.types'

export const DialogFooter = ({ className, children, ref, ...props }: DialogFooterProps) => {
  return (
    <div
      className={cn('w-full border-t border-outline bg-surface-container', className)}
      ref={ref}
      {...props}
    >
      <div className="flex w-full items-center gap-2xs p-sm">{children}</div>
    </div>
  )
}
