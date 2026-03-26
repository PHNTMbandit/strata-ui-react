import { Meter as BaseMeter } from "@base-ui/react";
import { cn } from "@/utils/cn";
import type { MeterTrackProps } from "./meter.types";

export const MeterTrack = ({ className, children, ref, ...props }: MeterTrackProps) => {
  return (
    <BaseMeter.Track
      className={cn(
        "inset-shadow-xs col-span-2 h-2xs overflow-hidden rounded-full bg-surface-dim",
        className,
      )}
      data-track
      ref={ref}
      {...props}
    >
      {children}
    </BaseMeter.Track>
  );
};
