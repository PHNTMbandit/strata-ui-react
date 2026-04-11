import { Combobox as BaseCombobox } from '@base-ui/react/combobox'
import { CaretUpDownIcon } from '@phosphor-icons/react'
import { cn } from '@/utils/cn'

import type { ComboboxTriggerProps } from './combobox.types'

export const ComboboxTrigger = ({
  placeholder,
  className,
  children,
  ref,
  ...props
}: ComboboxTriggerProps) => {
  return (
    <BaseCombobox.Trigger
      className={cn(
        'inline-flex h-xl items-center justify-between gap-xl rounded-xl bg-surface-bright pr-sm pl-md style-text-default-0 elevation-xs outline outline-outline-variant transition-all hover:cursor-pointer hover:outline-outline data-popup-open:outline-brand-outline data-[disabled=true]:hover:outline-transparent',
        className,
      )}
      ref={ref}
      {...props}
    >
      <BaseCombobox.Value placeholder={<span className="opacity-70">{placeholder}</span>} />
      <BaseCombobox.Icon>
        <CaretUpDownIcon />
      </BaseCombobox.Icon>
      {children}
    </BaseCombobox.Trigger>
  )
}
