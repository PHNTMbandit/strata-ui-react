import { Menu as BaseMenu } from '@base-ui/react/menu'
import { CaretRightIcon } from '@phosphor-icons/react'
import { cn } from '@/utils/cn'

import type { MenuSubmenuTriggerProps } from './menu.types'

export const MenuSubmenuTrigger = ({
  className,
  children,
  ref,
  ...props
}: MenuSubmenuTriggerProps) => {
  return (
    <BaseMenu.SubmenuTrigger
      className={cn(
        'grid cursor-default grid-cols-[1fr_2rem] items-center px-sm py-3xs leading-md outline outline-transparent select-none before:outline before:outline-transparent hover:cursor-pointer data-highlighted:relative data-highlighted:z-0 data-highlighted:text-on-brand-container before:data-highlighted:absolute before:data-highlighted:inset-x-3xs before:data-highlighted:inset-y-[0px] before:data-highlighted:z-[-1] before:data-highlighted:rounded-md before:data-highlighted:bg-brand-container before:data-highlighted:outline-brand-outline data-popup-open:relative data-popup-open:z-0 before:data-popup-open:absolute before:data-popup-open:inset-x-3xs before:data-popup-open:inset-y-[0px] before:data-popup-open:z-[-1] before:data-popup-open:rounded-md before:data-popup-open:bg-surface-dim before:data-highlighted:data-popup-open:bg-brand-container',
        className,
      )}
      ref={ref}
      {...props}
    >
      <span className="col-start-1 min-w-3xl pr-2xl">{children}</span>
      <CaretRightIcon className="col-start-2 size-xs place-self-end self-center" weight="bold" />
    </BaseMenu.SubmenuTrigger>
  )
}
