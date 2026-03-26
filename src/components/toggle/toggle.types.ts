import type { Toggle, ToggleState } from "@base-ui/react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export const toggleVariants = cva(
  "flex items-center justify-center transition-all hover:cursor-pointer text-on-surface-variant not-disabled:active:inset-shadow-xs not-disabled:not-active:hover:shadow-xs disabled:opacity-70 border border-transparent",
  {
    variants: {
      size: {
        iconSmall: "size-sm rounded-sm [&>svg]:size-xs",
        iconMedium: "size-md rounded-md [&>svg]:size-sm",
        iconLarge: "size-lg rounded-lg [&>svg]:size-md",
        small: "h-md px-3xs gap-3xs rounded-sm style-text-default--2 [&>svg]:size-xs",
        medium: "h-lg px-2xs gap-2xs rounded-md style-text-default--1 [&>svg]:size-sm",
        large: "h-xl px-xs gap-xs rounded-lg style-text-default-0 [&>svg]:size-md",
      },
      tone: {
        brand:
          "not-disabled:hover:bg-brand-container not-disabled:hover:text-on-brand-container data-pressed:text-on-surface-inverse dark:data-pressed:text-on-surface data-pressed:bg-brand hover:border-brand-outline",
        accent:
          "not-disabled:hover:bg-accent-container not-disabled:hover:text-on-accent-container data-pressed:text-on-surface dark:data-pressed:text-on-surface data-pressed:bg-accent hover:border-accent-outline",
        neutral:
          "not-disabled:hover:not-active:bg-surface-container active:bg-surface-dim not-disabled:hover:text-on-surface-container data-pressed:text-on-surface data-pressed:bg-surface-container dark:data-pressed:text-on-surface hover:border-outline",
        error:
          "not-disabled:hover:bg-error-container not-disabled:hover:text-on-error-container data-pressed:text-error dark:data-pressed:text-error data-pressed:bg-error hover:border-error-outline data-pressed:text-on-surface-inverse dark:data-pressed:text-on-surface",
        info: "not-disabled:hover:bg-info-container not-disabled:hover:text-on-info-container data-pressed:text-info dark:data-pressed:text-info data-pressed:bg-info hover:border-info-outline data-pressed:text-on-surface-inverse dark:data-pressed:text-on-surface",
        success:
          "not-disabled:hover:bg-success-container not-disabled:hover:text-on-success-container data-pressed:text-success dark:data-pressed:text-success data-pressed:bg-success hover:border-success-outline data-pressed:text-on-surface-inverse dark:data-pressed:text-on-surface",
        warning:
          "not-disabled:hover:bg-warning-container not-disabled:hover:text-on-warning-container data-pressed:text-warning dark:data-pressed:text-warning data-pressed:bg-warning hover:border-warning-outline data-pressed:text-on-surface-inverse dark:data-pressed:text-on-surface",
      },
    },
    defaultVariants: {
      size: "medium",
      tone: "brand",
    },
  },
);

export type ToggleProps = Omit<React.ComponentProps<typeof Toggle>, "children"> &
  VariantProps<typeof toggleVariants> & {
    children?: React.ReactNode | ((state: ToggleState) => React.ReactNode);
  };
