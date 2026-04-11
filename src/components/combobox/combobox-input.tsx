import { Combobox as BaseCombobox } from '@base-ui/react/combobox'
import { CaretDownIcon, XIcon } from '@phosphor-icons/react'
import React from 'react'
import { Button } from '../button'
import { InputGroup, InputGroupAddon } from '../input-group'
import { Separator } from '../separator'
import { cn } from '@/utils/cn'

import type { ComboboxInputProps } from './combobox.types'

export const ComboboxInput = ({
  inline = false,
  className,
  children,
  ref,
  ...props
}: ComboboxInputProps) => {
  const id = React.useId()

  if (inline) {
    return (
      <div className="h-(--input-container-height) py-2xs pr-2xs">
        <BaseCombobox.Input
          className={cn(
            'h-xl w-full rounded-lg bg-surface-dim px-sm outline-outline transition-all not-active:outline-1 focus-within:outline-2 hover:outline-2 focus:caret-brand focus:outline-brand data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50',
            'placeholder:opacity-60',
            'disabled:cursor-not-allowed',
            'text-ellipsis',
            className,
          )}
          id={id}
          ref={ref}
          {...props}
        />
      </div>
    )
  }

  return (
    <InputGroup className="flex h-full! max-w-[500px] flex-wrap py-xs [&:has([data-chips]:not(:empty))]:rounded-xl [&:has([data-chips]:empty)]:*:[[role=separator]]:hidden [&:not(:has([data-chips]))_[role=separator]]:hidden">
      {children}
      <Separator weight={'thinnest'} />
      <BaseCombobox.InputGroup className="relative flex w-full items-center justify-between [&>input]:pr-[calc(0.5rem+1.5rem)] has-[.combobox-clear]:[&>input]:pr-[calc(0.5rem+1.5rem*2)]">
        <BaseCombobox.Input
          className={cn(
            'w-full text-ellipsis outline-none placeholder:opacity-60 disabled:cursor-not-allowed',
            className,
          )}
          id={id}
          ref={ref}
          {...props}
        />
        <InputGroupAddon>
          <BaseCombobox.Clear
            aria-label="Clear selection"
            className={cn(className)}
            keepMounted
            render={(e) => (
              <Button onClick={e.onClick} size={'iconSmall'} tone="error">
                <XIcon weight="bold" />
              </Button>
            )}
          />
          <BaseCombobox.Trigger
            aria-label="Open popup"
            render={(props, state) => (
              <Button
                onClick={props.onClick}
                size={'iconSmall'}
                tone={state.open ? 'brand' : 'neutral'}
              >
                <CaretDownIcon weight="bold" />
              </Button>
            )}
          />
        </InputGroupAddon>
      </BaseCombobox.InputGroup>
    </InputGroup>
  )
}
