import { useFieldContext } from '../form'
import { cn } from '@/utils/cn'

import type { FieldErrorsProps } from './field.types'

export const FieldErrors = ({ className, children, ref, ...props }: FieldErrorsProps) => {
  const field = useFieldContext()

  if (field.state.meta.errors.length === 0 && !children) {
    return null
  }

  return (
    <>
      {field.state.meta.errors.length > 0 && (
        <ul className={cn('space-y-3xs', className)} ref={ref} {...props}>
          {field.state.meta.errors.map((error) => (
            <li
              className="flex items-center gap-2xs style-text-strong--1 text-error"
              key={error.message}
            >
              {error.message}
            </li>
          ))}
          {children}
        </ul>
      )}
    </>
  )
}
