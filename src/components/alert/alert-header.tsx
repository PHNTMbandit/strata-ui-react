import { cn } from '@/utils/cn'

import type { AlertHeaderProps } from './alert.types'

export const AlertHeader = ({ className, children, ref, ...props }: AlertHeaderProps) => {
  return (
    <div
      className={cn('flex items-center gap-2xs style-text-strong--1 [&_svg]:size-sm', className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
