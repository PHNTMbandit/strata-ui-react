import type { Input } from '../input'
import type { InputGroup, InputGroupInput } from '../input-group'
import type { Select } from '../select'
import type { Slider } from '../slider'

export type FieldDescriptionProps = React.ComponentProps<'p'>
export type FieldErrorsProps = React.ComponentProps<'ul'>
export type FieldInputGroupProps = React.ComponentProps<typeof InputGroup>
export type FieldInputGroupInputProps = React.ComponentProps<typeof InputGroupInput>
export type FieldInputProps = React.ComponentProps<typeof Input>
export type FieldLabelProps = React.ComponentProps<'div'>
export type FieldSelectProps = React.ComponentProps<typeof Select>
export type FieldSliderProps = React.ComponentProps<typeof Slider>
export type FieldProps = React.ComponentProps<'div'>
