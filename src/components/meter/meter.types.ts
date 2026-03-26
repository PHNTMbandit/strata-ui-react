import type { Meter as BaseMeter } from "@base-ui/react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export type MeterProps = React.ComponentProps<typeof BaseMeter.Root> &
  VariantProps<typeof meterVariants> & {
    orientation?: "horizontal" | "vertical";
  };
export type MeterLabelProps = React.ComponentProps<typeof BaseMeter.Label>;
export type MeterValueProps = React.ComponentProps<typeof BaseMeter.Value>;
export type MeterTrackProps = React.ComponentProps<typeof BaseMeter.Track>;
export type MeterIndicatorProps = React.ComponentProps<typeof BaseMeter.Indicator>;
export type MeterSubtitleProps = React.ComponentProps<"div">;

export const meterVariants = cva("", {
  variants: {
    orientation: {
      horizontal:
        "flex items-center justify-between gap-xs [&_[data-track]]:w-full [&_button]:shrink-0",
      vertical:
        "grid grid-cols-2 space-y-xs [&_[data-value]]:col-start-2 [&_[data-value]]:row-start-1",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});
