import { cva } from 'class-variance-authority'

import type { VariantProps } from 'class-variance-authority'

export const radarPingVariants = cva(
  'absolute top-[0px] right-[0px] flex text-on-surface-inverse dark:text-on-surface',
  {
    variants: {
      tone: {
        brand: '[&_[data-dot]]:bg-brand  [&_[data-radar-ping]]:bg-brand',
        accent: '[&_[data-dot]]:bg-accent [&_[data-radar-ping]]:bg-accent ',
        neutral:
          '[&_[data-dot]]:bg-on-surface-variant [&_[data-radar-ping]]:bg-on-surface-variant ',
        error: '[&_[data-dot]]:bg-error [&_[data-radar-ping]]:bg-error ',
        info: '[&_[data-dot]]:bg-info [&_[data-radar-ping]]:bg-info ',
        success: '[&_[data-dot]]:bg-success [&_[data-radar-ping]]:bg-success ',
        warning: '[&_[data-dot]]:bg-warning [&_[data-radar-ping]]:bg-warning ',
      },
      size: {
        small: '[&_[data-dot]]:size-xs -mt-px -mr-px style-text-default--2',
        medium: '[&_[data-dot]]:size-sm -mt-3xs -mr-3xs style-text-default--2',
        large: '[&_[data-dot]]:size-md -mt-2xs -mr-2xs style-text-default--1 ',
      },
    },
    defaultVariants: {
      tone: 'brand',
      size: 'medium',
    },
  },
)

export type RadarPingProps = React.ComponentProps<'div'> &
  VariantProps<typeof radarPingVariants> & {
    hidePing?: boolean
  }
