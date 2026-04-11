import { createFormHook, createFormHookContexts } from '@tanstack/react-form'
import { lazy } from 'react'

const FieldDescription = lazy(() =>
  import('../field/field-description').then((m) => ({
    default: m.FieldDescription,
  })),
)
const FieldErrors = lazy(() =>
  import('../field/field-errors').then((m) => ({
    default: m.FieldErrors,
  })),
)
const FieldInput = lazy(() =>
  import('../field/field-input').then((m) => ({
    default: m.FieldInput,
  })),
)
const FieldLabel = lazy(() =>
  import('../field/field-label').then((m) => ({
    default: m.FieldLabel,
  })),
)
const FieldSlider = lazy(() =>
  import('../field/field-slider').then((m) => ({
    default: m.FieldSlider,
  })),
)

const FormErrors = lazy(() =>
  import('../form/form-errors').then((m) => ({
    default: m.FormErrors,
  })),
)
const FormReset = lazy(() =>
  import('../form/form-reset').then((m) => ({
    default: m.FormReset,
  })),
)
const FormSubmit = lazy(() =>
  import('../form/form-submit').then((m) => ({
    default: m.FormSubmit,
  })),
)

export const { fieldContext, useFieldContext, formContext, useFormContext } =
  createFormHookContexts()

export const { useAppForm, withFieldGroup, withForm, useTypedAppFormContext } = createFormHook({
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
