import { cn } from '@/utils/cn'

import type { BreadcrumbLinkProps } from './breadcrumb.types'

export const BreadcrumbLink = ({ className, children, ref, ...props }: BreadcrumbLinkProps) => {
  return (
    <div
      className={cn(
        'inline-flex h-md items-center justify-center gap-3xs rounded-md border border-transparent px-2xs style-text-default--1 text-on-surface-variant transition-colors select-none hover:cursor-pointer hover:border-outline hover:bg-surface-container active:bg-surface-dim [&>svg]:size-xs',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
