import type { ButtonProps } from '@/components/button/button.types'

export type SidebarToggleProps = ButtonProps
export type SidebarContentProps = React.ComponentProps<'div'>
export type SidebarGroupContentProps = React.ComponentProps<'div'>
export type SidebarGroupLabelProps = React.ComponentProps<'span'>
export type SidebarGroupProps = React.ComponentProps<'div'>
export type SidebarHeaderProps = Omit<React.ComponentProps<'div'>, 'children'> & {
  children?: React.ReactNode | ((isExpanded: boolean) => React.ReactNode)
}
export type SidebarFooterProps = React.ComponentProps<'div'>
export type SidebarMenuProps = React.ComponentProps<'div'>
export type SidebarProps = React.ComponentProps<'div'> & {
  tone?: 'default' | 'ghost'
  width?: string | number
}

export type SidebarMenuButtonProps = React.ComponentProps<'button'>
export type SidebarMenuLinkProps = ButtonProps & {
  isActive?: boolean
}
