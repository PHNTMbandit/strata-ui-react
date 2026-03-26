import { Radio as BaseRadio } from '@base-ui/react'
import { Label } from '../label'
import { cn } from '@/utils/cn'

import type { RadioProps } from './radio-group.types'

export const Radio = ({ className, children, ref, ...props }: RadioProps) => {
  return (
    <Label htmlFor={props.id}>
      <BaseRadio.Root
        className={cn(
          'inline-flex size-sm items-center justify-center rounded-full bg-surface-dim inset-shadow-xs outline-2 outline-offset-1 outline-transparent transition-colors group-hover:outline-brand hover:outline-brand',
          className,
        )}
        ref={ref}
        {...props}
      >
        <BaseRadio.Indicator className="flex before:size-xs before:rounded-full before:bg-brand before:shadow-xs data-unchecked:hidden" />
      </BaseRadio.Root>
      {children}
    </Label>
  )
}
