import { cn } from '@/utils/cn'

import type { DialogContentProps } from './dialog.types'

export const DialogContent = ({ className, children, ref, ...props }: DialogContentProps) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center gap-2xs border-b border-outline-variant px-sm pb-md',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
