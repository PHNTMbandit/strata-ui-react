import { Popover as BasePopover } from '@base-ui/react/popover'

import type { PopoverPanelProps } from './popover.types'

export const PopoverPanel = ({ className, ref, children, ...props }: PopoverPanelProps) => {
  return (
    <BasePopover.Portal>
      <BasePopover.Positioner className={className} ref={ref} sideOffset={8} {...props}>
        <BasePopover.Popup className="inset-shadow-raised-md origin-(--transform-origin) space-y-3xs rounded-xl border border-outline bg-surface-container px-md py-sm shadow-md outline outline-outline-variant transition-[transform,scale,opacity] data-ending-style:scale-90 data-ending-style:opacity-0 data-starting-style:scale-90 data-starting-style:opacity-0">
          <BasePopover.Arrow className="data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180">
            {/* <ArrowSvg /> */}
          </BasePopover.Arrow>
          {children}
        </BasePopover.Popup>
      </BasePopover.Positioner>
    </BasePopover.Portal>
  )
}
