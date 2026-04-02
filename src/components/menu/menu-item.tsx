import { Menu as BaseMenu } from '@base-ui/react/menu'
import { cn } from '@/utils/cn'

import type { MenuItemProps } from './menu.types'

export const MenuItem = ({ className, children, ref, ...props }: MenuItemProps) => {
  return (
    <BaseMenu.Item
      className={cn(
        'flex cursor-default items-center px-sm py-3xs pr-2xl leading-md outline outline-transparent select-none before:outline before:outline-transparent hover:cursor-pointer data-highlighted:relative data-highlighted:z-0 data-highlighted:text-on-brand-container before:data-highlighted:absolute before:data-highlighted:inset-x-3xs before:data-highlighted:inset-y-[0px] before:data-highlighted:z-[-1] before:data-highlighted:rounded-md before:data-highlighted:bg-brand-container before:data-highlighted:outline-brand-outline',
        className,
      )}
      ref={ref}
      {...props}
    >
      <div className="flex items-center gap-2xs [&>svg]:size-sm">{children}</div>
    </BaseMenu.Item>
  )
}
