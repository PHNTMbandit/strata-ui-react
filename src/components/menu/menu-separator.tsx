import { Menu as BaseMenu } from '@base-ui/react/menu'
import { cn } from '@/utils/cn'

import type { MenuSeparatorProps } from './menu.types'

export const MenuSeparator = ({ className, ref, ...props }: MenuSeparatorProps) => {
  return (
    <BaseMenu.Separator
      className={cn('my-3xs h-px border-t border-outline-variant bg-outline pb-px', className)}
      ref={ref}
      {...props}
    />
  )
}
