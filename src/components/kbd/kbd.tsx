import { cn } from '@/utils/cn'

import type { KbdProps } from './kbd.types'

export const Kbd = ({ className, children, ref, ...props }: KbdProps) => {
  return (
    <div
      className={cn(
        'inline-flex h-md items-center justify-center rounded-full border border-outline bg-surface-container-2 px-2xs align-middle style-text-default--1 whitespace-nowrap text-on-surface select-none [&:has(svg)]:size-md [&:has(svg)]:p-0 [&>svg]:size-sm',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
