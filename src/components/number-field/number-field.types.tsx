import type { NumberField as BaseNumberField } from "@base-ui/react/number-field"

export type NumberFieldTypesProps = React.ComponentProps<
	typeof BaseNumberField.Root
> & {
	label?: string
}
