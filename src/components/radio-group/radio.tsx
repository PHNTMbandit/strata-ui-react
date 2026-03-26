import { Radio as BaseRadio } from "@base-ui/react";
import { cn } from "@/utils/cn";
import { Label } from "../label";
import type { RadioProps } from "./radio-group.types";

export const Radio = ({ className, children, ref, ...props }: RadioProps) => {
  return (
    <Label htmlFor={props.id}>
      <BaseRadio.Root
        className={cn(
          "inset-shadow-xs inline-flex size-sm items-center justify-center rounded-full bg-surface-dim outline-2 outline-transparent outline-offset-1 transition-colors hover:outline-brand group-hover:outline-brand",
          className,
        )}
        ref={ref}
        {...props}
      >
        <BaseRadio.Indicator className="flex before:size-xs before:rounded-full before:bg-brand before:shadow-xs data-unchecked:hidden" />
      </BaseRadio.Root>
      {children}
    </Label>
  );
};
