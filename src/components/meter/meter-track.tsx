import { Meter as BaseMeter } from '@base-ui/react'
import { cn } from '@/utils/cn'

import type { MeterTrackProps } from './meter.types'

export const MeterTrack = ({ className, children, ref, ...props }: MeterTrackProps) => {
  return (
    <BaseMeter.Track
      className={cn(
        'h-2xs w-full self-center rounded-full bg-surface-dim inset-shadow-xs',
        className,
      )}
      data-track
      ref={ref}
      {...props}
    >
      {children}
    </BaseMeter.Track>
  )
}
