import { Separator as BaseSeparator } from '@base-ui/react/separator'
import { type SeparatorProps, separatorVariants } from './separator.types'
import { cn } from '@/utils/cn'

export const Separator = ({
  orientation,
  weight,
  style,
  tone,
  className,
  ref,
  ...props
}: SeparatorProps) => {
  return (
    <BaseSeparator
      className={cn(separatorVariants({ orientation, weight, style, tone, className }))}
      orientation={orientation}
      ref={ref}
      {...props}
    />
  )
}
