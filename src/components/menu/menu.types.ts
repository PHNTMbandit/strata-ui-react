import type { Menu as BaseMenu } from "@base-ui/react/menu"

export type MenuProps = React.ComponentProps<typeof BaseMenu.Root>
export type MenuTriggerProps = React.ComponentProps<typeof BaseMenu.Trigger>
export type MenuPopupProps = React.ComponentProps<typeof BaseMenu.Positioner>
export type MenuItemProps = React.ComponentProps<typeof BaseMenu.Item>
export type MenuSeperatorProps = React.ComponentProps<typeof BaseMenu.Separator>
export type MenuCheckboxItemProps = React.ComponentProps<
	typeof BaseMenu.CheckboxItem
>
