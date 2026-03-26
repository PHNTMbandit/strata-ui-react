import { Select as BaseSelect } from '@base-ui/react/select'
import { CheckIcon } from '@phosphor-icons/react'
import { cn } from '@/utils/cn'

import type { SelectItemProps } from './select.types'

export const SelectItem = ({ className, children, ref, ...props }: SelectItemProps) => {
  return (
    <BaseSelect.Item
      className={cn(
        'grid cursor-default grid-cols-[1fr_0.75rem] items-center gap-xs rounded-md border border-transparent pl-xs style-text-default-0 leading-md select-none group-data-[side=none]:pr-xs group-data-[side=none]:leading-lg hover:cursor-pointer data-highlighted:relative data-highlighted:z-0 data-highlighted:border-brand-outline data-highlighted:bg-brand-container data-highlighted:text-on-brand-container data-highlighted:before:absolute data-highlighted:before:inset-x-3xs data-highlighted:before:inset-y-[0px] data-highlighted:before:z-[-1] data-highlighted:before:rounded-sm data-highlighted:before:border-brand-outline data-selected:bg-brand data-selected:text-surface pointer-coarse:py-xs',
        className,
      )}
      ref={ref}
      {...props}
    >
      <BaseSelect.ItemText>{children}</BaseSelect.ItemText>
      <BaseSelect.ItemIndicator className="place-self-end self-center">
        <CheckIcon weight="bold" />
      </BaseSelect.ItemIndicator>
    </BaseSelect.Item>
  )
}
