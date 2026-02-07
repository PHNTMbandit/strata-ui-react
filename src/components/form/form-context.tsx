import { createFormHook, createFormHookContexts } from "@tanstack/react-form"
import { FieldDescription } from "../field/field-description"
import { FieldErrors } from "../field/field-errors"
import { FieldInput } from "../field/field-input"
import { FieldLabel } from "../field/field-label"
import { FieldSlider } from "../field/field-slider"
import { FormErrors } from "./form-errors"
import { FormReset } from "./form-reset"
import { FormSubmit } from "./form-submit"

export const { fieldContext, useFieldContext, formContext, useFormContext } =
	createFormHookContexts()

export const { useAppForm, withFieldGroup, withForm, useTypedAppFormContext } =
	createFormHook({
		fieldContext,
		fieldComponents: {
			FieldDescription,
			FieldErrors,
			FieldInput,
			FieldLabel,
			FieldSlider,
		},
		formContext,
		formComponents: {
			FormErrors,
			FormReset,
			FormSubmit,
		},
	})
