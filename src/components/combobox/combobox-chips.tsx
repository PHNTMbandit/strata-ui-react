import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { cn } from "@/utils/cn";
import type { ComboboxChipsProps } from "./combobox.types";

export const ComboboxChips = ({ className, children, ref, ...props }: ComboboxChipsProps) => {
  return (
    <BaseCombobox.Chips
      className={cn("not-empty:mb-2xs flex flex-wrap items-center gap-2xs", className)}
      ref={ref}
      {...props}
    >
      {children}
    </BaseCombobox.Chips>
  );
};
