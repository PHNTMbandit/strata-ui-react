import { Meter as BaseMeter } from "@base-ui/react";
import { cn } from "@/utils/cn";
import { type MeterProps, meterVariants } from "./meter.types";

export const Meter = ({ orientation, className, children, ref, ...props }: MeterProps) => {
  return (
    <BaseMeter.Root className={cn(meterVariants({ orientation, className }))} ref={ref} {...props}>
      {children}
    </BaseMeter.Root>
  );
};
