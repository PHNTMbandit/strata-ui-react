import { Autocomplete as BaseAutocomplete } from '@base-ui/react/autocomplete'

import type { Icon } from '@phosphor-icons/react'

export type AutocompleteProps = React.ComponentProps<typeof BaseAutocomplete.Root>
export type AutocompleteInputProps = React.ComponentProps<typeof BaseAutocomplete.Input> & {
  leadingIcon?: Icon
}
export type AutocompleteContentProps = React.ComponentProps<typeof BaseAutocomplete.Positioner> & {
  emptyText: string
}

export type AutocompleteGridContentProps = React.ComponentProps<
  typeof BaseAutocomplete.Positioner
> & {
  placeholder?: string
  emptyText: string
}

export type AutocompleteItemProps = React.ComponentProps<typeof BaseAutocomplete.Item>
export type AutocompleteGridItemProps = React.ComponentProps<typeof BaseAutocomplete.Item>
export type AutocompleteGroupProps = React.ComponentProps<typeof BaseAutocomplete.Group>
export type AutocompleteGroupLabelProps = React.ComponentProps<typeof BaseAutocomplete.GroupLabel>
export type AutocompleteCollectionProps = React.ComponentProps<typeof BaseAutocomplete.Collection>
export type AutocompleteRowProps = React.ComponentProps<typeof BaseAutocomplete.Row>
export type AutocompleteTriggerProps = React.ComponentProps<typeof BaseAutocomplete.Trigger>

export type AutocompleteStatusProps = React.ComponentProps<typeof BaseAutocomplete.Status>
export const useFilter = BaseAutocomplete.useFilter
