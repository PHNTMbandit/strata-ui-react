import { Separator as BaseSeparator } from '@base-ui/react/separator'
import { type SeparatorProps, separatorVariants } from './separator.types'
import { cn } from '@/utils/cn'

export const Separator = ({
  label,
  tone = 'default',
  orientation = 'horizontal',
  weight = 'medium',
  className,
  children,
  ref,
  ...props
}: SeparatorProps) => {
  return (
    <BaseSeparator
      className={cn(separatorVariants({ tone, orientation, weight, className }))}
      ref={ref}
      orientation={orientation}
      {...props}
    >
      {children}
      {label && (
        <span className="absolute right-1/2 translate-x-1/2 -translate-y-1/2 bg-surface px-2xs style-text-prose--2 text-on-surface-variant">
          {label}
        </span>
      )}
    </BaseSeparator>
  )
}
