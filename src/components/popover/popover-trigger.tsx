import { Popover as BasePopover } from "@base-ui/react/popover";
import { cn } from "@/utils/cn";
import type { PopoverTriggerProps } from "./popover.types";

export const PopoverTrigger = ({ className, ref, children, ...props }: PopoverTriggerProps) => {
  return (
    <BasePopover.Trigger
      className={cn("inline-flex justify-start", className)}
      ref={ref}
      render={children as React.ReactElement}
      {...props}
    />
  );
};
