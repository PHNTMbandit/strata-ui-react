import { cn } from '@/utils/cn'

import type { KbdProps } from './kbd.types'

export const Kbd = ({ className, children, ref, ...props }: KbdProps) => {
  return (
    <div
      className={cn(
        'inline-flex h-md items-center justify-center rounded-full border border-outline bg-surface-container px-3xs style-text-prose--2 whitespace-nowrap text-on-surface-variant shadow-xs select-none [&>p]:p-3xs [&>svg]:size-sm',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
