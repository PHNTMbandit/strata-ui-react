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
          'hover:not-disabled:bg-brand-container hover:not-disabled:text-on-brand-container data-pressed:text-on-surface-inverse dark:data-pressed:text-on-surface data-pressed:bg-brand hover:border-brand-outline',
        accent:
          'hover:not-disabled:bg-accent-container hover:not-disabled:text-on-accent-container data-pressed:text-on-surface dark:data-pressed:text-on-surface data-pressed:bg-accent hover:border-accent-outline',
        neutral:
          'hover:not-disabled:not-active:bg-surface-container active:bg-surface-dim hover:not-disabled:text-on-surface-container data-pressed:text-on-surface data-pressed:bg-surface-container dark:data-pressed:text-on-surface hover:border-outline',
        error:
          'hover:not-disabled:bg-error-container hover:not-disabled:text-on-error-container data-pressed:text-error dark:data-pressed:text-error data-pressed:bg-error hover:border-error-outline data-pressed:text-on-surface-inverse dark:data-pressed:text-on-surface',
        info: 'hover:not-disabled:bg-info-container hover:not-disabled:text-on-info-container data-pressed:text-info dark:data-pressed:text-info data-pressed:bg-info hover:border-info-outline data-pressed:text-on-surface-inverse dark:data-pressed:text-on-surface',
        success:
          'hover:not-disabled:bg-success-container hover:not-disabled:text-on-success-container data-pressed:text-success dark:data-pressed:text-success data-pressed:bg-success hover:border-success-outline data-pressed:text-on-surface-inverse dark:data-pressed:text-on-surface',
        warning:
          'hover:not-disabled:bg-warning-container hover:not-disabled:text-on-warning-container data-pressed:text-warning dark:data-pressed:text-warning data-pressed:bg-warning hover:border-warning-outline data-pressed:text-on-surface-inverse dark:data-pressed:text-on-surface',
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
