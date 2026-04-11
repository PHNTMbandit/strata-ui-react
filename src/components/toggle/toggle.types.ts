import { cva } from 'class-variance-authority'

import type { Toggle, ToggleState } from '@base-ui/react'
import type { VariantProps } from 'class-variance-authority'

export const toggleVariants = cva(
  'flex items-center justify-center transition-all hover:cursor-pointer text-on-surface-variant active:not-disabled:inset-shadow-xs hover:not-disabled:not-active:shadow-xs disabled:opacity-70 border border-transparent',
  {
    variants: {
      size: {
        iconSmall: 'size-sm rounded-sm [&>svg]:size-xs',
        iconMedium: 'size-md rounded-md [&>svg]:size-sm',
        iconLarge: 'size-lg rounded-lg [&>svg]:size-md',
        small: 'h-md px-3xs gap-3xs rounded-sm style-text-default--2 [&>svg]:size-xs',
        medium: 'h-lg px-2xs gap-2xs rounded-md style-text-default--1 [&>svg]:size-sm',
        large: 'h-xl px-xs gap-xs rounded-lg style-text-default-0 [&>svg]:size-md',
      },
      tone: {
        brand:
          'hover:not-disabled:bg-brand-container hover:not-disabled:text-on-brand-container hover:border-brand-outline data-[pressed=true]:text-on-surface-inverse data-[pressed=true]:bg-brand data-pressed:text-brand-on-surface',
        accent:
          'hover:not-disabled:bg-accent-container hover:not-disabled:text-on-accent-container hover:border-accent-outline data-[pressed=true]:text-on-surface data-[pressed=true]:bg-accent data-pressed:text-accent-on-surface',
        neutral:
          'hover:not-disabled:not-active:bg-surface-container active:bg-surface-dim hover:not-disabled:text-on-surface hover:border-outline data-[pressed=true]:text-on-surface data-[pressed=true]:bg-surface-container data-pressed:text-on-surface',
        error:
          'hover:not-disabled:bg-error-container hover:not-disabled:text-on-error-container hover:border-error-outline data-[pressed=true]:text-on-error data-[pressed=true]:bg-error data-pressed:text-error-on-surface',
        info: 'hover:not-disabled:bg-info-container hover:not-disabled:text-on-info-container hover:border-info-outline data-[pressed=true]:text-on-info data-[pressed=true]:bg-info data-pressed:text-on-info',
        success:
          'hover:not-disabled:bg-success-container hover:not-disabled:text-on-success-container hover:border-success-outline data-[pressed=true]:text-on-success data-[pressed=true]:bg-success data-pressed:text-success-on-surface',
        warning:
          'hover:not-disabled:bg-warning-container hover:not-disabled:text-on-warning-container hover:border-warning-outline data-[pressed=true]:text-on-warning data-[pressed=true]:bg-warning data-pressed:text-warning-on-surface',
      },
    },
    defaultVariants: {
      size: 'medium',
      tone: 'brand',
    },
  },
)

export type ToggleProps = Omit<React.ComponentProps<typeof Toggle>, 'children'> &
  VariantProps<typeof toggleVariants> & {
    children?: React.ReactNode | ((state: ToggleState) => React.ReactNode)
  }
