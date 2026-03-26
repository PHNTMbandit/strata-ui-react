import { NumberField as BaseNumberField } from '@base-ui/react/number-field'
import { MinusIcon, PlusIcon } from '@phosphor-icons/react'
import React from 'react'
import { cn } from '@/utils/cn'

import type { NumberFieldTypesProps } from './number-field.types'

export const NumberField = ({ label, className, ref, ...props }: NumberFieldTypesProps) => {
  const id = React.useId()

  return (
    <BaseNumberField.Root
      className={cn('flex flex-col gap-3xs', className)}
      ref={ref}
      {...props}
      id={id}
    >
      <BaseNumberField.ScrubArea className={'cursor-ew-resize'}>
        <label className="cursor-ew-resize style-text-default--1" htmlFor={id}>
          {label}
        </label>
        <BaseNumberField.ScrubAreaCursor className="drop-shadow-[0_1px_1px_#0008] filter">
          <CursorGrowIcon />
        </BaseNumberField.ScrubAreaCursor>
      </BaseNumberField.ScrubArea>
      <BaseNumberField.Group className="flex w-fit items-center rounded-full bg-surface-container shadow-xs">
        <BaseNumberField.Decrement className="peer inline-flex size-lg items-center justify-center rounded-full rounded-r-none text-error transition-colors hover:cursor-pointer hover:bg-error-container hover:text-on-error-container">
          <MinusIcon className="size-sm" weight="bold" />
        </BaseNumberField.Decrement>
        <BaseNumberField.Input
          aria-label="number-field"
          className="w-xl text-center style-text-default-0 focus:outline-none"
        />
        <BaseNumberField.Increment className="inline-flex size-lg items-center justify-center rounded-full rounded-l-none text-success transition-colors hover:cursor-pointer hover:bg-success-container hover:text-on-success-container">
          <PlusIcon className="size-sm" weight="bold" />
        </BaseNumberField.Increment>
      </BaseNumberField.Group>
    </BaseNumberField.Root>
  )
}

function CursorGrowIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="black"
      height="14"
      stroke="white"
      viewBox="0 0 24 14"
      width="26"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Resize cursor</title>
      <path d="M19.5 5.5L6.49737 5.51844V2L1 6.9999L6.5 12L6.49737 8.5L19.5 8.5V12L25 6.9999L19.5 2V5.5Z" />
    </svg>
  )
}
