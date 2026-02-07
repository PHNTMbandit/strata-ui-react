import { createFormHook, createFormHookContexts } from "@tanstack/react-form"
import {
	FieldDescription,
	FieldErrors,
	FieldInput,
	FieldLabel,
	FieldSlider,
} from "../field"
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
