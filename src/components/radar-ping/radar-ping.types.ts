import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export const radarPingVariants = cva(
  "absolute top-[0px] right-[0px] flex text-on-surface-inverse dark:text-on-surface",
  {
    variants: {
      tone: {
        brand:
          "[&_[data-dot]]:bg-brand [&_[data-dot]]:outline-brand-outline [&_[data-radar-ping]]:bg-brand",
        accent:
          "[&_[data-dot]]:bg-accent [&_[data-radar-ping]]:bg-accent [&_[data-dot]]:outline-accent-outline",
        neutral:
          "[&_[data-dot]]:bg-on-surface-variant [&_[data-radar-ping]]:bg-on-surface-variant [&_[data-dot]]:outline-outline",
        error:
          "[&_[data-dot]]:bg-error [&_[data-radar-ping]]:bg-error [&_[data-dot]]:outline-error-outline",
        info: "[&_[data-dot]]:bg-info [&_[data-radar-ping]]:bg-info [&_[data-dot]]:outline-info-outline",
        success:
          "[&_[data-dot]]:bg-success [&_[data-radar-ping]]:bg-success [&_[data-dot]]:outline-success-outline",
        warning:
          "[&_[data-dot]]:bg-warning [&_[data-radar-ping]]:bg-warning [&_[data-dot]]:outline-warning-outline",
      },
      size: {
        small:
          "[&_[data-dot]]:size-sm -mt-3xs -mr-3xs style-text-default--2 [&_[data-dot]]:outline",
        medium:
          "[&_[data-dot]]:size-md -mt-2xs -mr-2xs style-text-default--1 [&_[data-dot]]:outline-2",
        large: "[&_[data-dot]]:size-lg -mt-xs -mr-xs style-text-default-0 [&_[data-dot]]:outline-3",
      },
    },
    defaultVariants: {
      tone: "brand",
      size: "medium",
    },
  },
);

export type RadarPingProps = React.ComponentProps<"div"> &
  VariantProps<typeof radarPingVariants> & {
    hidePing?: boolean;
  };
