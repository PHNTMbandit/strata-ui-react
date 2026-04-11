import { type ButtonProps, buttonVariants } from './button.types'
import { cn } from '@/utils/cn'

export function Button({
  className,
  children,
  shape = 'rounded',
  tone = 'brand',
  size = 'medium',
  variant = 'solid',
  ...props
}: ButtonProps) {
  return (
    <button
      data-size={size}
      className={cn(buttonVariants({ shape, tone, size, variant, className }))}
      {...props}
    >
      {children}
    </button>
  )
}
