import { Autocomplete as BaseAutocomplete } from '@base-ui/react/autocomplete'
import { cn } from '@/utils/cn'

import type { AutocompleteItemProps } from './autocomplete.types'

export const AutocompleteItem = ({ className, children, ref, ...props }: AutocompleteItemProps) => {
  return (
    <BaseAutocomplete.Item
      className={cn(
        'text-prose--1 before:data-highlighted:rounded-2xs mx-2xs flex cursor-default items-center rounded-md border border-transparent px-2xs py-3xs transition-colors select-none first:mt-2xs last:mb-2xs hover:cursor-pointer hover:border-brand-outline hover:bg-brand-container hover:text-on-brand-container data-highlighted:relative data-highlighted:z-0 data-highlighted:border-brand-outline data-highlighted:bg-brand-container data-highlighted:text-on-brand-container before:data-highlighted:absolute before:data-highlighted:inset-x-2xs before:data-highlighted:inset-y-[0px] before:data-highlighted:z-[-1]',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </BaseAutocomplete.Item>
  )
}
