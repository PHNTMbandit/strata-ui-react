import { ContextMenu as BaseContextMenu } from '@base-ui/react/context-menu'
import { cn } from '@/utils/cn'

import type { ContextMenuPopupProps } from './context-menu.types'

export const ContextMenuPopup = ({ className, children, ref, ...props }: ContextMenuPopupProps) => {
  return (
    <BaseContextMenu.Portal>
      <BaseContextMenu.Positioner>
        <BaseContextMenu.Popup
          className={cn(
            'w-[calc(100%+var(--spacing-xl))] origin-(--transform-origin) -translate-x-[calc(var(--spacing-xl)/2)] space-y-3xs rounded-md border border-outline bg-surface-bright py-3xs shadow-md outline outline-outline-variant transition-opacity data-ending-style:opacity-0',
            className,
          )}
          ref={ref}
          {...props}
        >
          {children}
        </BaseContextMenu.Popup>
      </BaseContextMenu.Positioner>
    </BaseContextMenu.Portal>
  )
}
