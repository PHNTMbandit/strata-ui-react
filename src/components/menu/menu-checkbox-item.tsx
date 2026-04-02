import { Menu as BaseMenu } from '@base-ui/react/menu'
import { CheckIcon } from '@phosphor-icons/react'
import { cn } from '@/utils/cn'

import type { MenuCheckboxItemProps } from './menu.types'

export const MenuCheckboxItem = ({ className, children, ref, ...props }: MenuCheckboxItemProps) => {
  return (
    <BaseMenu.CheckboxItem
      className={cn(
        'grid cursor-default grid-cols-[1fr_2rem] items-center px-sm py-3xs leading-md outline outline-transparent select-none before:outline before:outline-transparent hover:cursor-pointer data-highlighted:relative data-highlighted:z-0 data-highlighted:text-on-brand-container before:data-highlighted:absolute before:data-highlighted:inset-x-3xs before:data-highlighted:inset-y-[0px] before:data-highlighted:z-[-1] before:data-highlighted:rounded-md before:data-highlighted:bg-brand-container before:data-highlighted:outline-brand-outline',
        className,
      )}
      ref={ref}
      {...props}
    >
      <span className="col-start-1">{children}</span>
      <BaseMenu.CheckboxItemIndicator className="col-start-2 flex items-center justify-center place-self-end self-center">
        <CheckIcon className="size-sm" weight="bold" />
      </BaseMenu.CheckboxItemIndicator>
    </BaseMenu.CheckboxItem>
  )
}
