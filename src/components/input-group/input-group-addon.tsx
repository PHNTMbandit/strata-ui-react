import { cn } from '@/utils/cn'

import type { InputGroupAddonProps } from './input-group.types'

export const InputGroupAddon = ({ className, children, ref, ...props }: InputGroupAddonProps) => {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-xs style-text-default-0 text-on-surface-variant',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
