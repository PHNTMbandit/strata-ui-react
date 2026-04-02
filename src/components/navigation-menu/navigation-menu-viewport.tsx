import { NavigationMenu as BaseNavigationMenu } from '@base-ui/react/navigation-menu'
import { cn } from '@/utils/cn'

import type { NavigationMenuViewportProps } from './navigation-menu.types'

export const NavigationMenuViewport = ({
  className,
  children,
  ref,
  ...props
}: NavigationMenuViewportProps) => {
  return (
    <BaseNavigationMenu.Portal>
      <BaseNavigationMenu.Positioner
        className={cn(
          "h-(--positioner-height) w-fit max-w-(--available-width) transition-[top,left,right,bottom] duration-(--duration) ease-(--easing) before:absolute before:content-[''] data-instant:transition-none before:data-[side=bottom]:top-[-10px] before:data-[side=bottom]:right-0 before:data-[side=bottom]:left-0 before:data-[side=bottom]:h-2xs before:data-[side=left]:top-0 before:data-[side=left]:right-[-10px] before:data-[side=left]:bottom-0 before:data-[side=left]:w-2xs before:data-[side=right]:top-0 before:data-[side=right]:bottom-0 before:data-[side=right]:left-[-10px] before:data-[side=right]:w-2xs before:data-[side=top]:right-0 before:data-[side=top]:bottom-[-10px] before:data-[side=top]:left-0 before:data-[side=top]:h-2xs",
          className,
        )}
        collisionAvoidance={{ side: 'none' }}
        collisionPadding={{ top: 5, bottom: 5, left: 20, right: 20 }}
        ref={ref}
        sideOffset={10}
        {...props}
        style={{
          ['--duration' as string]: '0.35s',
          ['--easing' as string]: 'cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <BaseNavigationMenu.Popup
          className={cn(
            'data-[ending-style]:easing-[ease] inset-shadow-raised-lg relative w-fit origin-(--transform-origin) rounded-xl border border-outline bg-surface-container shadow-lg outline outline-outline-variant transition-[opacity,transform,scale] duration-(--duration) ease-(--easing) data-ending-style:scale-90 data-ending-style:opacity-0 data-ending-style:duration-150 data-starting-style:scale-90 data-starting-style:opacity-0',
          )}
        >
          <BaseNavigationMenu.Arrow className="flex transition-[left] duration-(--duration) ease-(--easing) data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180" />
          <BaseNavigationMenu.Viewport className="relative w-full overflow-hidden">
            {children}
          </BaseNavigationMenu.Viewport>
        </BaseNavigationMenu.Popup>
      </BaseNavigationMenu.Positioner>
    </BaseNavigationMenu.Portal>
  )
}
