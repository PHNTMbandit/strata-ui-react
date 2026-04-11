import { Select as BaseSelect } from '@base-ui/react/select'
import { cn } from '@/utils/cn'

import type { SelectTriggerProps } from './select.types'

export const SelectTrigger = ({ className, children, ref, ...props }: SelectTriggerProps) => {
  return (
    <BaseSelect.Trigger
      className={cn(
        'flex h-xl min-w-(--suwa-spacing-3xl) items-center justify-between gap-xl rounded-xl bg-surface-bright pr-sm pl-md outline outline-outline-variant transition-all hover:cursor-pointer aria-invalid:bg-error-container aria-invalid:outline-error-outline data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50 [&:not([data-popup-open=true])]:[&:not([aria-invalid=true])]:outline-outline',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </BaseSelect.Trigger>
  )
}
