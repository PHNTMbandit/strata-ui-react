import { NavigationMenu as BaseNavigationMenu } from '@base-ui/react/navigation-menu'
import { NavigationMenuIcon } from './navigation-menu-icon'
import { cn } from '@/utils/cn'

import type { NavigationMenuTriggerProps } from './navigation-menu.types'

export const NavigationMenuTrigger = ({
  className,
  children,
  ref,
  ...props
}: NavigationMenuTriggerProps) => {
  return (
    <BaseNavigationMenu.Trigger
      className={cn(
        'flex items-center gap-2xs rounded-full px-sm py-xs style-text-default-0 transition-all hover:cursor-pointer data-popup-open:bg-surface-container data-popup-open:shadow-sm',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
      <NavigationMenuIcon />
    </BaseNavigationMenu.Trigger>
  )
}
