import { cva, type VariantProps } from 'class-variance-authority'

import type { Tabs as BaseTabs } from '@base-ui/react/tabs'
import type { ComponentProps } from 'react'

export type TabsPanelProps = ComponentProps<typeof BaseTabs.Panel>
export type TabsTabProps = ComponentProps<typeof BaseTabs.Tab>
export type TabsIndicatorProps = ComponentProps<typeof BaseTabs.Indicator>
export type TabsListProps = ComponentProps<typeof BaseTabs.List>

export const tabsVariants = cva('space-y-2xs gap-2xs', {
  variants: {
    variant: {
      default:
        '[&_[role=tablist]]:rounded-lg [&_[role=tablist]]:gap-3xs [&_[role=tablist]]:bg-surface-dim [&_[role=tablist]]:p-3xs [&_[role=tab]]:text-on-surface-variant [&_[role=presentation]]:bg-surface-container [&_[role=presentation]]:rounded-lg [&_[role=tab]]:px-md [&_[role=presentation]]:elevation-xs [&_[role=tab]]:h-lg [&_[role=tab]]:data-active:text-on-surface [&_[role=tab]]:hover:text-on-surface',
      underline: '',
    },
    fill: {
      true: '[&_[role=tablist]]:w-full [&_[role=tab]]:grow',
      false: '[&_[role=tablist]]:w-fit',
    },
  },
  defaultVariants: {
    variant: 'default',
    fill: false,
  },
})

export type TabsProps = ComponentProps<typeof BaseTabs.Root> & VariantProps<typeof tabsVariants>
