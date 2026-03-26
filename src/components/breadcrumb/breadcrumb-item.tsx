import { cn } from '@/utils/cn'

import type { BreadcrumbItemProps } from './breadcrumb.types'

export const BreadcrumbItem = ({ className, children, ref, ...props }: BreadcrumbItemProps) => {
  return (
    <div
      className={cn(
        'text-surface-on-surface-variant inline-flex h-md items-center justify-center gap-3xs style-text-default--1 [&>svg]:size-xs',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
