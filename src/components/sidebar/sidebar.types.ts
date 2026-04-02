import { cva } from 'class-variance-authority'

import type { Button } from '../button'
import type { Icon } from '@phosphor-icons/react'

export type SidebarToggleProps = React.ComponentProps<typeof Button>
export type SidebarContentProps = React.ComponentProps<'div'> & {
  hideScrollbar?: boolean
}
export type SidebarGroupContentProps = React.ComponentProps<'div'>
export type SidebarGroupLabelProps = React.ComponentProps<'span'>
export type SidebarGroupProps = React.ComponentProps<'div'>
export type SidebarHeaderProps = React.ComponentProps<'div'>
export type SidebarFooterProps = React.ComponentProps<'div'>
export type SidebarMenuProps = React.ComponentProps<'div'>
export type SidebarProps = React.ComponentProps<'div'> & {
  tone?: 'default' | 'ghost'
  width?: string | number
}

export type SidebarMenuButtonProps = React.ComponentProps<'button'>
export type SidebarMenuLinkProps = React.ComponentProps<typeof Button> & {
  isActive?: boolean
  label: string
  leadingIcon?: Icon
}

export const sidebarSubMenuTriggerVariants = cva(
  'group inline-flex items-center justify-between rounded-xl px-sm text-on-surface transition-[margin,box-shadow,background-color] hover:bg-surface-container hover:shadow-sm hover:cursor-pointer active:inset-shadow-sm active:bg-surface-dim data-panel-open:bg-surface-dim data-panel-open:inset-shadow-sm shrink-0',
  {
    variants: {
      size: {
        full: 'w-full h-xl',
        compact: 'size-xl',
      },
    },
    defaultVariants: {
      size: 'full',
    },
  },
)
