import { Checkbox as BaseCheckbox } from '@base-ui/react'
import { Label } from '../label'
import { CheckboxIndicator } from './checkbox-indicator'
import { cn } from '@/utils/cn'

import type { CheckboxRootProps } from './checkbox.types'

export const Checkbox = ({ className, ref, label, id, disabled, ...props }: CheckboxRootProps) => {
  return (
    <div className="flex items-center gap-xs">
      <BaseCheckbox.Root
        className={cn(
          'group flex size-md items-center justify-center rounded-sm bg-surface-dim outline-2 outline-offset-1 outline-brand/0 transition-colors not-indeterminate:text-on-brand indeterminate:text-brand hover:cursor-pointer hover:outline-brand hover:disabled:cursor-not-allowed data-checked:bg-brand data-checked:elevation-xs [&:not([data-checked])]:inset-shadow-xs',
          className,
        )}
        disabled={disabled}
        id={id}
        ref={ref}
        {...props}
      >
        <CheckboxIndicator />
      </BaseCheckbox.Root>
      {label && (
        <Label className={cn(disabled && 'opacity-50')} htmlFor={id}>
          {label}
        </Label>
      )}
    </div>
  )
}
