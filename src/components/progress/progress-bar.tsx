import { cn } from '@/utils/cn'

import type { ProgressBarProps } from './progress.types'

export const ProgressBar = ({
  className,
  children,
  ref,
  ...props
}: ProgressBarProps & { isCompleted?: boolean }) => {
  const { isCompleted = false, ...restProps } = props as {
    isCompleted?: boolean
  }
  return (
    <div className="w-full">
      <div
        className={cn(
          'h-3xs w-full grow rounded-full bg-success/20 transition-colors ease-in-out',
          isCompleted && 'bg-success opacity-100',
          className,
        )}
        ref={ref}
        {...restProps}
      >
        {children}
      </div>
    </div>
  )
}

ProgressBar.displayName = 'ProgressBar'
