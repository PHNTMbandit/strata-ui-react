import { Autocomplete as BaseAutocomplete } from '@base-ui/react/autocomplete'
import { cn } from '@/utils/cn'

import type { AutocompleteInputProps } from './autocomplete.types'

export const AutocompleteInput = ({
  placeholder,
  className,
  ref,
  ...props
}: AutocompleteInputProps) => {
  return (
    <BaseAutocomplete.Input
      placeholder={placeholder}
      className={cn(
        'flex h-xl w-full items-center gap-xs rounded-xl bg-surface-container p-sm style-text-prose-0 text-ellipsis elevation-xs outline outline-outline-variant transition-all placeholder:opacity-85 focus-within:caret-brand focus-within:outline-brand-outline hover:not-focus-within:outline-outline disabled:cursor-not-allowed data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50 hover:data-[disabled=true]:outline-transparent',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
}
