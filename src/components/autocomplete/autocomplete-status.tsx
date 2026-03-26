import { Autocomplete as BaseAutocomplete } from '@base-ui/react/autocomplete'
import { cn } from '@/utils/cn'

import type { AutocompleteStatusProps } from './autocomplete.types'

export const AutocompleteStatus = ({
  className,
  children,
  ref,
  ...props
}: AutocompleteStatusProps) => {
  return (
    <BaseAutocomplete.Status
      className={cn(
        'gap-2 flex items-center p-xs style-text-prose--1 text-on-surface-variant empty:hidden',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </BaseAutocomplete.Status>
  )
}
