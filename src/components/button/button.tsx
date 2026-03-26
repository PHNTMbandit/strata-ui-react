import { type ButtonProps, buttonVariants } from './button.types'
import { cn } from '@/utils/cn'

export function Button({
  className,
  children,
  tone = 'brand',
  size = 'medium',
  variant = 'solid',
  ...props
}: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ tone, size, variant, className }))} {...props}>
      {children}
    </button>
  )
}
