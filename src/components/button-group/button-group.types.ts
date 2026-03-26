import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export const buttonGroupVariants = cva("flex", {
  variants: {
    split: {
      gap: "gap-3xs",
      separator: "",
    },
    orientation: {
      horizontal:
        "flex-row [&>*:first-child]:rounded-l-full [&>*:first-child]:rounded-r-none [&>*:last-child]:rounded-r-full [&>*:last-child]:rounded-l-none [&>*:not(:first-child):not(:last-child)]:rounded-none",
      vertical:
        "flex-col [&>*:first-child]:rounded-t-full [&>*:first-child]:rounded-b-none [&>*:last-child]:rounded-b-full [&>*:last-child]:rounded-t-none [&>*:not(:first-child):not(:last-child)]:rounded-none",
    },
  },
  defaultVariants: {
    split: "gap",
    orientation: "horizontal",
  },
  compoundVariants: [
    {
      split: "separator",
      orientation: "horizontal",
      className: "divide-x",
    },
    {
      split: "separator",
      orientation: "vertical",
      className: "divide-y",
    },
  ],
});

export type ButtonGroupProps = React.ComponentProps<"div"> &
  VariantProps<typeof buttonGroupVariants>;
