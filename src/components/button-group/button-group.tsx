import { type ButtonGroupProps, buttonGroupVariants } from './button-group.types'
import { cn } from '@/utils/cn'

export const ButtonGroup = ({
  orientation,
  className,
  children,
  ref,
  ...props
}: ButtonGroupProps) => {
  return (
    <div className={cn(buttonGroupVariants({ orientation }), className)} ref={ref} {...props}>
      {children}
    </div>
  )
}
