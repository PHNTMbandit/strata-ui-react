import { PasswordIcon, UserIcon, XCircleIcon } from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Suspense } from "react";
import { z } from "zod";
import { AlertHeader } from "../alert/alert-header";
import { Field } from "../field";
import { Form } from "./form";
import { useAppForm } from "./form-context";

export default {
  title: "Components/Form",
  parameters: {
    docs: {
      subtitle: "Provides context and state management for form fields.",
      description: {
        component:
          "The Form component is a container that manages the state and behavior of form fields. It provides context to its child components, allowing them to access and update form data seamlessly. The Form component handles validation, submission, and other form-related functionalities, making it easier to build complex forms with consistent behavior.",
      },
    },
  },
} satisfies Meta<typeof Form>;

type Story = StoryObj<typeof Form>;

export const FieldInput: Story = {
  render: () => {
    const schema = z
      .object({
        firstName: z.string().min(2, "First name must be at least 2 characters"),
        lastName: z.string().min(2, "Last name must be at least 2 characters"),
        password: z.string().min(6, "Password must be at least 6 characters"),
        confirmPassword: z.string().min(6, "Confirm Password must be at least 6 characters"),
      })
      .superRefine(({ password, confirmPassword }, ctx) => {
        if (confirmPassword !== password) {
          ctx.addIssue({
            code: "custom",
            message: "Passwords do not match",
            path: ["confirmPassword"],
          });
        }
      });

    const form = useAppForm({
      defaultValues: {
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
      },
      validators: {
        onSubmit: schema,
      },
      onSubmit: async () => {
        await new Promise<void>((resolve) => {
          setTimeout(() => {
            resolve();
          }, 2000);
        });
      },
    });

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Form action={() => form.handleSubmit()}>
          <form.AppForm>
            <form.FormErrors>
              <AlertHeader>
                <XCircleIcon weight="fill" />
                There were some problems with your submission
              </AlertHeader>
            </form.FormErrors>
            <form.AppField
              children={(field) => (
                <Field>
                  <field.FieldLabel />
                  <field.FieldInput leadingIcon={UserIcon} placeholder="First Name" />
                  <field.FieldErrors />
                  <field.FieldDescription>Please enter your first name.</field.FieldDescription>
                </Field>
              )}
              name="firstName"
            />
            <form.AppField
              children={(field) => (
                <Field>
                  <field.FieldLabel />
                  <field.FieldInput leadingIcon={UserIcon} placeholder="Last Name" />
                  <field.FieldErrors />
                  <field.FieldDescription>Please enter your last name.</field.FieldDescription>
                </Field>
              )}
              name="lastName"
            />
            <form.AppField name="password">
              {(field) => (
                <Field>
                  <field.FieldLabel />
                  <field.FieldInput
                    leadingIcon={PasswordIcon}
                    placeholder="Password"
                    type="password"
                  />
                  <field.FieldErrors />
                  <field.FieldDescription>
                    Your password must be at least 6 characters.
                  </field.FieldDescription>
                </Field>
              )}
            </form.AppField>
            <form.AppField
              name="confirmPassword"
              validators={{
                onChangeListenTo: ["password"],
                onChange: ({ value, fieldApi }) => {
                  const password = fieldApi.form.getFieldValue("password");
                  if (value && value !== password) {
                    return new Error("Passwords do not match");
                  }
                },
              }}
            >
              {(field) => (
                <Field>
                  <field.FieldLabel />
                  <field.FieldInput
                    leadingIcon={PasswordIcon}
                    placeholder="Confirm Password"
                    type="password"
                  />
                  <field.FieldErrors />
                  <field.FieldDescription>Please confirm your password.</field.FieldDescription>
                </Field>
              )}
            </form.AppField>
            <form.FormReset tone="error">Reset</form.FormReset>
            <form.FormSubmit>Submit</form.FormSubmit>
          </form.AppForm>
        </Form>
      </Suspense>
    );
  },
};

export const SubmitError: Story = {
  render: () => {
    const schema = z.object({
      username: z.string().min(2, "Username must be at least 2 characters"),
      password: z.string().min(6, "Password must be at least 6 characters"),
    });

    const form = useAppForm({
      defaultValues: {
        username: "",
        password: "",
      },
      validators: {
        onSubmit: schema,
        onSubmitAsync: async () => {
          await new Promise<void>((resolve) => {
            setTimeout(() => {
              resolve();
            }, 1000);
          });

          return "Invalid username or password";
        },
      },
    });

    return (
      <Form action={() => form.handleSubmit()}>
        <form.AppForm>
          <form.FormErrors>
            <AlertHeader>
              <XCircleIcon weight="fill" />
              There were some problems with your submission
            </AlertHeader>
          </form.FormErrors>
          <form.AppField name="username">
            {(field) => (
              <Field>
                <field.FieldLabel />
                <field.FieldInput leadingIcon={UserIcon} placeholder="Username" />
                <field.FieldErrors />
              </Field>
            )}
          </form.AppField>

          <form.AppField name="password">
            {(field) => (
              <Field>
                <field.FieldLabel />
                <field.FieldInput
                  leadingIcon={PasswordIcon}
                  placeholder="Password"
                  type="password"
                />
                <field.FieldErrors />
              </Field>
            )}
          </form.AppField>
          <form.FormReset tone="error">Reset</form.FormReset>
          <form.FormSubmit>Submit</form.FormSubmit>
        </form.AppForm>
      </Form>
    );
  },
};
