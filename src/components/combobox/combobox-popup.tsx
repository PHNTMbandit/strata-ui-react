import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { cn } from "@/utils/cn";
import type { ComboboxPopupProps } from "./combobox.types";

export const ComboboxPopup = ({ className, children, ref, ...props }: ComboboxPopupProps) => {
  return (
    <BaseCombobox.Portal>
      <BaseCombobox.Positioner className={cn("", className)} ref={ref} sideOffset={24} {...props}>
        <BaseCombobox.Popup
          className={
            "max-h-[23rem] w-[calc(var(--anchor-width)+var(--spacing-lg))] max-w-(--available-width) origin-(--transform-origin) rounded-md bg-surface-container pl-2xs shadow-md outline outline-outline transition-[transform,scale,opacity] duration-100 [--input-container-height:4rem] data-ending-style:scale-95 data-starting-style:scale-95 data-ending-style:opacity-0 data-starting-style:opacity-0"
          }
        >
          {children}
        </BaseCombobox.Popup>
      </BaseCombobox.Positioner>
    </BaseCombobox.Portal>
  );
};
