import { cn } from '@/utils/cn'

import type { MeterSubtitleProps } from './meter.types'

export const MeterSubtitle = ({ className, children, ref, ...props }: MeterSubtitleProps) => {
  return (
    <div
      className={cn('col-span-2 style-text-prose--1 text-on-surface-variant', className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
