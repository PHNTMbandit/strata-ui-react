import { Combobox as BaseCombobox } from '@base-ui/react/combobox'
import { CheckIcon } from '@phosphor-icons/react'
import { cn } from '@/utils/cn'

import type { ComboboxItemProps } from './combobox.types'

export const ComboboxItem = ({ className, children, ref, ...props }: ComboboxItemProps) => {
  return (
    <BaseCombobox.Item
      className={cn(
        'mr-2xs grid cursor-default grid-cols-[1fr_0.75rem] items-center gap-xs rounded-md border border-transparent py-3xs pr-2xs pl-xs style-text-default-0 leading-md outline-none select-none group-data-[side=none]:pr-xs group-data-[side=none]:leading-lg first-of-type:mt-2xs last-of-type:mb-2xs hover:cursor-pointer hover:border-brand-outline data-highlighted:relative data-highlighted:z-0 data-highlighted:border-brand-outline data-highlighted:bg-brand-container data-highlighted:text-on-brand-container before:data-highlighted:absolute before:data-highlighted:inset-x-3xs before:data-highlighted:inset-y-[0px] before:data-highlighted:z-[-1] before:data-highlighted:rounded-sm data-selected:bg-brand data-selected:text-on-surface-inverse dark:data-selected:text-on-surface pointer-coarse:py-xs',
        className,
      )}
      ref={ref}
      {...props}
    >
      <span className="col-start-1">{children}</span>
      <BaseCombobox.ItemIndicator className={'col-start-2 place-self-end self-center'}>
        <CheckIcon className="size-sm" weight="bold" />
      </BaseCombobox.ItemIndicator>
    </BaseCombobox.Item>
  )
}
