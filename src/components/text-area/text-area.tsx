import React from 'react'
import { cn } from '@/utils/cn'

import type { TextAreaProps } from './text-area.types'

export const TextArea = ({ className, ref, ...props }: TextAreaProps) => {
  const [value, setValue] = React.useState('')
  const isMaxLengthExceeded = props.maxLength ? value.length >= props.maxLength : false

  return (
    <div
      className={cn(
        'relative flex resize flex-col overflow-hidden rounded-lg border border-outline bg-surface-container outline outline-outline-variant transition-[outline] focus-within:outline-2 hover:not-focus-within:outline-2 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50 data-[disabled=true]:hover:outline-transparent',
        isMaxLengthExceeded ? 'outline-error' : 'focus-within:outline-brand',
      )}
    >
      <textarea
        className={cn(
          'grow resize-none px-xs py-2xs style-text-prose-0 outline-none focus-within:caret-brand',
          className,
        )}
        ref={ref}
        {...props}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <span
        className={cn(
          'w-full px-xs py-2xs text-right style-text-default--1 text-on-surface-variant',
          isMaxLengthExceeded && 'text-error',
        )}
      >
        {value.length} / {props.maxLength}
      </span>
    </div>
  )
}
