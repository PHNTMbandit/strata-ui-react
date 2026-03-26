import type { Menu as BaseMenu } from '@base-ui/react/menu'

export type MenuProps = React.ComponentProps<typeof BaseMenu.Root>
export type MenuTriggerProps = React.ComponentProps<typeof BaseMenu.Trigger>
export type MenuPopupProps = React.ComponentProps<typeof BaseMenu.Positioner>
export type MenuItemProps = React.ComponentProps<typeof BaseMenu.Item>
export type MenuSeperatorProps = React.ComponentProps<typeof BaseMenu.Separator>
export type MenuCheckboxItemProps = React.ComponentProps<typeof BaseMenu.CheckboxItem>
export type MenuRadioGroupProps = React.ComponentProps<typeof BaseMenu.RadioGroup>
export type MenuRadioItemProps = React.ComponentProps<typeof BaseMenu.RadioItem>
export type MenuGroupProps = React.ComponentProps<typeof BaseMenu.Group>
export type MenuGroupLabelProps = React.ComponentProps<typeof BaseMenu.GroupLabel>
export type MenuSubmenuProps = React.ComponentProps<typeof BaseMenu.SubmenuRoot>
export type MenuSubmenuTriggerProps = React.ComponentProps<typeof BaseMenu.SubmenuTrigger>
