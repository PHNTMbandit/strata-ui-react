import { cn } from '@/utils/cn'

import type { KbdProps } from './kbd.types'

export const Kbd = ({ className, children, ref, ...props }: KbdProps) => {
  return (
    <div
      className={cn(
        'inline-flex h-md items-center justify-center rounded-full border border-outline bg-surface-bright px-xs style-text-default--1 whitespace-nowrap text-on-surface-variant select-none [&:has(svg)]:px-3xs [&>svg]:size-sm',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
