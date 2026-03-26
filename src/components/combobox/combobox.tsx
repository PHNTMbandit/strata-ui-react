import { Combobox as BaseCombobox } from "@base-ui/react";
import type { ComboboxProps } from "./combobox.types";

export const Combobox = ({ children, ...props }: ComboboxProps) => {
  return <BaseCombobox.Root {...props}>{children}</BaseCombobox.Root>;
};
