import { DotsThreeIcon } from '@phosphor-icons/react'
import { cn } from '@/utils/cn'

import type { BreadcrumbEllipsisProps } from './breadcrumb.types'

export const BreadcrumbEllipsis = ({
  className,
  children,
  ref,
  ...props
}: BreadcrumbEllipsisProps) => {
  return (
    <div
      className={cn(
        'flex size-md items-center justify-center rounded-sm border border-transparent text-on-surface-variant transition-all hover:cursor-pointer hover:border-outline hover:bg-surface-container active:bg-surface-dim disabled:opacity-50 [&>svg]:size-sm',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
      <DotsThreeIcon weight="bold" />
    </div>
  )
}
