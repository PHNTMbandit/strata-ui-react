import type { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox"
import type { ComponentProps } from "react"

export type CheckboxRootProps = ComponentProps<typeof BaseCheckbox.Root> & {
	label?: string
}

export type CheckboxIndicatorProps = ComponentProps<
	typeof BaseCheckbox.Indicator
>
