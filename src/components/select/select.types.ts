import type { Select as BaseSelect } from "@base-ui/react/select"

export type SelectProps = React.ComponentProps<typeof BaseSelect.Root>
export type SelectTriggerProps = React.ComponentProps<typeof BaseSelect.Trigger>
export type SelectValueProps = React.ComponentProps<typeof BaseSelect.Value>
export type SelectIconProps = React.ComponentProps<typeof BaseSelect.Icon>
export type SelectPopupProps = React.ComponentProps<
	typeof BaseSelect.Positioner
>
export type SelectItemProps = React.ComponentProps<typeof BaseSelect.Item>
