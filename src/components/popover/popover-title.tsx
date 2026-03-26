import { Popover as BasePopover } from "@base-ui/react/popover";
import { cn } from "@/utils/cn";
import type { PopoverTitleProps } from "./popover.types";

export const PopoverTitle = ({ className, ref, children, ...props }: PopoverTitleProps) => {
  return (
    <BasePopover.Title
      className={cn("style-text-strong-0 flex items-center gap-2xs [&>svg]:size-sm", className)}
      ref={ref}
      {...props}
    >
      {children}
    </BasePopover.Title>
  );
};
