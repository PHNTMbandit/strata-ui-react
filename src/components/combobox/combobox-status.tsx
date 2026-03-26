import { Combobox as BaseCombobox } from '@base-ui/react/combobox'
import { cn } from '@/utils/cn'

import type { ComboboxStatusProps } from './combobox.types'

export const ComboboxStatus = ({ className, children, ref, ...props }: ComboboxStatusProps) => {
  return (
    <BaseCombobox.Status
      className={cn(
        'gap-2 flex items-center p-xs style-text-prose--1 text-on-surface-variant empty:hidden',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </BaseCombobox.Status>
  )
}
