import { Input as BaseInput } from '@base-ui/react/input'
import { cn } from '@/utils/cn'

import type { InputGroupInputProps } from './input-group.types'

export const InputGroupInput = ({ className, ref, ...props }: InputGroupInputProps) => {
  return (
    <BaseInput
      className={cn('text-ellipsis outline-none placeholder:opacity-85', className)}
      ref={ref}
      {...props}
    />
  )
}
