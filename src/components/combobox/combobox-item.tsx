import { Combobox as BaseCombobox } from '@base-ui/react/combobox'
import { CheckIcon } from '@phosphor-icons/react'
import { cn } from '@/utils/cn'

import type { ComboboxItemProps } from './combobox.types'

export const ComboboxItem = ({ className, children, ref, ...props }: ComboboxItemProps) => {
  return (
    <BaseCombobox.Item
      className={cn(
        'mx-2xs grid cursor-default grid-cols-[1fr_0.75rem] items-center gap-xs rounded-md border border-transparent px-2xs py-3xs style-text-default-0 leading-md select-none group-data-[side=none]:pr-xs group-data-[side=none]:leading-lg first:mt-2xs last:mb-2xs hover:cursor-pointer data-highlighted:relative data-highlighted:z-0 data-highlighted:border-brand-outline data-highlighted:bg-brand-container data-highlighted:text-on-brand-container data-highlighted:before:absolute data-highlighted:before:inset-x-3xs data-highlighted:before:inset-y-[0px] data-highlighted:before:z-[-1] data-highlighted:before:rounded-sm data-selected:bg-brand data-selected:text-on-brand pointer-coarse:py-xs',
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
