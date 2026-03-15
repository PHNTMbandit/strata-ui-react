import type { ContextMenu as BaseContextMenu } from "@base-ui/react/context-menu"

export type ContextMenuProps = React.ComponentProps<typeof BaseContextMenu.Root>
export type ContextMenuTriggerProps = React.ComponentProps<
	typeof BaseContextMenu.Trigger
>
export type ContextMenuPopupProps = React.ComponentProps<
	typeof BaseContextMenu.Popup
>
export type ContextMenuSeparatorProps = React.ComponentProps<
	typeof BaseContextMenu.Separator
>
export type ContextMenuSubmenuProps = React.ComponentProps<
	typeof BaseContextMenu.SubmenuRoot
>
export type ContextMenuSubmenuTriggerProps = React.ComponentProps<
	typeof BaseContextMenu.SubmenuTrigger
>
export type ContextMenuItemProps = React.ComponentProps<
	typeof BaseContextMenu.Item
>
