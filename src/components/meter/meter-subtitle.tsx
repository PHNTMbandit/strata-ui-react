import { cn } from "@/utils/cn";
import type { MeterSubtitleProps } from "./meter.types";

export const MeterSubtitle = ({ className, children, ref, ...props }: MeterSubtitleProps) => {
  return (
    <div
      className={cn("style-text-prose--1 col-span-2 text-on-surface-variant", className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
};
