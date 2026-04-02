import { Combobox as BaseCombobox } from '@base-ui/react/combobox'
import { cn } from '@/utils/cn'

import type { ComboboxGroupLabelProps } from './combobox.types'

export const ComboboxGroupLabel = ({
  className,
  children,
  ref,
  ...props
}: ComboboxGroupLabelProps) => {
  return (
    <BaseCombobox.GroupLabel
      className={cn(
        'sticky top-[0px] z-1 my-[0px] mr-[0px] ml-[-3px] bg-surface-container px-sm pt-sm pb-3xs style-text-strong--2 text-on-surface-variant uppercase',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </BaseCombobox.GroupLabel>
  )
}
