import type { Input } from "../input"
import type { Slider } from "../slider"

export type FieldDescriptionProps = React.ComponentProps<"p">
export type FieldErrorProps = React.ComponentProps<"div">
export type FieldInputProps = React.ComponentProps<typeof Input>
export type FieldLabelProps = React.ComponentProps<"span">
export type FieldSliderProps = React.ComponentProps<typeof Slider>
