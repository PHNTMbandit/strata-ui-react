import { cn } from '@/utils/cn'

import type { ProgressIndicatorProps } from './progress.types'

export const ProgressIndicator = ({
  title,
  description,
  className,
  children,
  isActive = false,
  ref,
  ...props
}: ProgressIndicatorProps & { isCompleted?: boolean }) => {
  const { isCompleted = false, ...restProps } = props as {
    isCompleted?: boolean
  }
  return (
    <div className="relative">
      <div
        className={cn(
          'flex size-md shrink-0 flex-col items-center justify-center rounded-full border border-outline bg-surface-container text-center style-text-default--2 text-success transition-colors ease-in-out [&>svg]:size-xs',
          isActive && 'border-success-outline bg-success-container text-on-success-container',
          isCompleted && 'border-none bg-success text-on-success shadow-none',
          className,
        )}
        ref={ref}
        {...restProps}
      >
        {children}
      </div>
      <div className="absolute top-full left-1/2 w-3xl -translate-x-1/2 translate-y-2xs">
        {title && <div className="text-center style-text-strong--2 text-on-surface">{title}</div>}
        {description && (
          <div className="text-center style-text-prose--2 leading-sm text-on-surface-variant">
            {description}
          </div>
        )}
      </div>
    </div>
  )
}

ProgressIndicator.displayName = 'ProgressIndicator'
