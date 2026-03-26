import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete";
import { cn } from "@/utils/cn";
import type { AutocompleteGroupProps } from "./autocomplete.types";

export const AutocompleteGroupLabel = ({
  className,
  children,
  ref,
  ...props
}: AutocompleteGroupProps) => {
  return (
    <BaseAutocomplete.GroupLabel
      className={cn(
        "style-text-strong--2 sticky top-[0px] z-1 mt-[0px] mr-[0px] mb-[0px] ml-[0px] bg-surface-bright px-sm pt-sm pb-3xs text-on-surface-variant uppercase",
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </BaseAutocomplete.GroupLabel>
  );
};
