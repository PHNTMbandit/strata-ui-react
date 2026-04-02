import { Switch as BaseSwitch } from '@base-ui/react/switch'
import { Label } from '../label'
import { cn } from '@/utils/cn'

import type { SwitchProps } from './switch.types'

export const Switch = ({ label, className, ref, ...props }: SwitchProps) => {
  return (
    <div className="flex items-center gap-xs">
      <BaseSwitch.Root
        aria-label={label ?? undefined}
        className={cn(
          'group p-0.5 active:data-checked:bg-gray-500 relative flex h-[26px] w-[50px] items-center rounded-full bg-surface-dim bg-size-[6.5rem_100%] inset-shadow-xs outline-2 outline-transparent transition-colors ease-[cubic-bezier(0.26,0.75,0.38,0.45)] before:absolute before:rounded-full hover:cursor-pointer hover:not-disabled:outline-accent disabled:pointer-events-none disabled:opacity-50 data-checked:bg-accent',
          className,
        )}
        ref={ref}
        {...props}
      >
        <BaseSwitch.Thumb
          className={
            'size-[12px] translate-x-[8px] rounded-full bg-accent shadow-xs elevation-xs transition-transform duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] data-checked:size-[16px] data-checked:translate-x-[28px] data-checked:scale-[1.1] data-checked:bg-on-accent'
          }
        />
      </BaseSwitch.Root>
      {label && <Label htmlFor={props.id}>{label}</Label>}
    </div>
  )
}
