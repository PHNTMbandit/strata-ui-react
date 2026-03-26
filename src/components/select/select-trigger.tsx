import { Select as BaseSelect } from "@base-ui/react/select";
import { cn } from "@/utils/cn";
import type { SelectTriggerProps } from "./select.types";

export const SelectTrigger = ({ className, children, ref, ...props }: SelectTriggerProps) => {
  return (
    <BaseSelect.Trigger
      className={cn(
        "elevation-xs flex h-xl min-w-[calc(var(--suwa-spacing-3xl)+5rem)] items-center justify-between gap-xl rounded-xl bg-surface-container pr-xs pl-md shadow-xs outline-2 outline-outline-variant transition-all hover:cursor-pointer hover:outline-brand-outline hover:outline-offset-2 data-popup-open:outline-transparent data-[disabled=true]:hover:outline-transparent",
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </BaseSelect.Trigger>
  );
};
