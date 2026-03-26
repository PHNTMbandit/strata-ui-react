import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { CaretUpDownIcon } from "@phosphor-icons/react";
import { cn } from "@/utils/cn";
import type { ComboboxTriggerProps } from "./combobox.types";

export const ComboboxTrigger = ({
  placeholder,
  className,
  children,
  ref,
  ...props
}: ComboboxTriggerProps) => {
  return (
    <BaseCombobox.Trigger
      className={cn(
        "style-text-default-0 inline-flex h-xl items-center justify-between gap-xl rounded-md bg-surface-bright pr-sm pl-md shadow-xs outline-2 outline-transparent transition-all hover:cursor-pointer hover:outline-outline data-popup-open:outline-transparent data-[disabled=true]:hover:outline-transparent",
        className,
      )}
      ref={ref}
      {...props}
    >
      <BaseCombobox.Value placeholder={<span className="opacity-70">{placeholder}</span>} />
      <BaseCombobox.Icon>
        <CaretUpDownIcon />
      </BaseCombobox.Icon>
      {children}
    </BaseCombobox.Trigger>
  );
};
