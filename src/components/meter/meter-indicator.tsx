import { Meter as BaseMeter } from "@base-ui/react";
import { cn } from "@/utils/cn";
import type { MeterIndicatorProps } from "./meter.types";

export const MeterIndicator = ({ className, children, ref, ...props }: MeterIndicatorProps) => {
  return (
    <BaseMeter.Indicator className={cn("rounded-full bg-success", className)} ref={ref} {...props}>
      {children}
    </BaseMeter.Indicator>
  );
};
