import { Autocomplete as BaseAutocomplete } from '@base-ui/react/autocomplete'
import { cn } from '@/utils/cn'

import type { AutocompleteGridItemProps } from './autocomplete.types'

export const AutocompleteGridItem = ({
  className,
  children,
  ref,
  ...props
}: AutocompleteGridItemProps) => {
  return (
    <BaseAutocomplete.Item
      className={cn(
        'group flex h-lg min-w-(--anchor-width) cursor-default items-center rounded-md style-text-prose--1 select-none hover:cursor-pointer hover:bg-accent hover:text-surface data-highlighted:relative data-highlighted:z-0 data-highlighted:bg-accent data-highlighted:text-surface data-highlighted:before:absolute data-highlighted:before:inset-0 data-highlighted:before:z-[-1] data-highlighted:before:rounded-md data-highlighted:before:bg-accent',
        className,
      )}
      ref={ref}
      {...props}
    >
      <span className="text-lg leading-none">{children}</span>
    </BaseAutocomplete.Item>
  )
}
