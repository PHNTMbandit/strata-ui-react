import { ContextMenu as BaseContextMenu } from '@base-ui/react/context-menu'
import { cn } from '@/utils/cn'

import type { ContextMenuSeparatorProps } from './context-menu.types'

export const ContextMenuSeparator = ({
  className,
  children,
  ref,
  ...props
}: ContextMenuSeparatorProps) => {
  return (
    <BaseContextMenu.Separator
      className={cn('my-3xs h-px border-t border-outline-variant bg-outline pb-px', className)}
      ref={ref}
      {...props}
    >
      {children}
    </BaseContextMenu.Separator>
  )
}
