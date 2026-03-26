import { type BreadcrumbProps, breadcrumbVariants } from './breadcrumb.types'
import { cn } from '@/utils/cn'

export const Breadcrumb = ({ style, className, children, ref, ...props }: BreadcrumbProps) => {
  return (
    <div className={cn(breadcrumbVariants({ style, className }))} ref={ref} {...props}>
      {children}
    </div>
  )
}
