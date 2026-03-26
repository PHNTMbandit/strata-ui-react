import { Autocomplete as BaseAutocomplete } from '@base-ui/react/autocomplete'
import { createElement } from 'react'
import { cn } from '@/utils/cn'

import type { AutocompleteInputProps } from './autocomplete.types'

export const AutocompleteInput = ({
  leadingIcon,
  placeholder,
  className,
  ref,
  ...props
}: AutocompleteInputProps) => {
  return (
    <div
      className={cn(
        'group text-prose-0 flex h-xl w-full items-center gap-xs rounded-full bg-surface-container py-sm pr-xs pl-md elevation-sm outline-2 outline-outline-variant transition-all focus-within:caret-brand focus-within:outline-offset-2 focus-within:outline-brand hover:not-focus-within:outline-offset-2 hover:not-focus-within:outline-outline data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50 data-[disabled=true]:hover:outline-transparent',
        className,
      )}
    >
      {leadingIcon && (
        <div
          className={cn(
            'group-focus-within:text-primary flex items-center justify-center text-on-surface-variant transition-all [&>svg]:size-sm',
          )}
        >
          {createElement(leadingIcon, {
            weight: 'bold',
          })}
        </div>
      )}
      <BaseAutocomplete.Input
        placeholder={placeholder}
        {...props}
        className={cn(
          'disabled:text-text-neutral-primary-disabled w-full overflow-ellipsis outline-none placeholder:opacity-60 disabled:cursor-not-allowed',
        )}
        ref={ref}
      />
    </div>
  )
}
