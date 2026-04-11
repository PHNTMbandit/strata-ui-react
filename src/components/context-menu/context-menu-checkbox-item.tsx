import { ContextMenu as BaseContextMenu } from '@base-ui/react/context-menu'
import { CheckIcon } from '@phosphor-icons/react'
import { cn } from '@/utils/cn'

import type { ContextMenuCheckboxItemProps } from './context-menu.types'

export const ContextMenuCheckboxItem = ({
  className,
  children,
  ref,
  ...props
}: ContextMenuCheckboxItemProps) => {
  return (
    <BaseContextMenu.CheckboxItem
      className={cn(
        'rounded-md border border-transparent hover:border-outline',
        'grid cursor-default grid-cols-[1fr_2rem] items-center px-2xs py-3xs leading-md outline-none select-none hover:cursor-pointer data-highlighted:relative data-highlighted:z-0 data-highlighted:text-on-surface data-highlighted:before:absolute data-highlighted:before:inset-[0px] data-highlighted:before:z-[-1] data-highlighted:before:rounded-md data-highlighted:before:bg-surface-container-2',
        className,
      )}
      ref={ref}
      {...props}
    >
      <span className="col-start-1">{children}</span>
      <BaseContextMenu.CheckboxItemIndicator className="col-start-2 flex items-center justify-center place-self-end self-center">
        <CheckIcon className="size-sm" weight="bold" />
      </BaseContextMenu.CheckboxItemIndicator>
    </BaseContextMenu.CheckboxItem>
  )
}
