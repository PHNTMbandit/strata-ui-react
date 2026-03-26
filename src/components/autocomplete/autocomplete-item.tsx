import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete";
import { cn } from "@/utils/cn";
import type { AutocompleteItemProps } from "./autocomplete.types";

export const AutocompleteItem = ({ className, children, ref, ...props }: AutocompleteItemProps) => {
  return (
    <BaseAutocomplete.Item
      className={cn(
        "mx-2xs flex cursor-default select-none items-center rounded-md border border-transparent px-2xs py-3xs text-prose--1 transition-colors first:mt-2xs last:mb-2xs hover:cursor-pointer hover:border-brand-outline hover:bg-brand-container hover:text-on-brand-container data-highlighted:relative data-highlighted:z-0 data-highlighted:border-brand-outline data-highlighted:bg-brand-container data-highlighted:text-on-brand-container data-highlighted:before:absolute data-highlighted:before:inset-x-2xs data-highlighted:before:inset-y-[0px] data-highlighted:before:z-[-1] data-highlighted:before:rounded-2xs",
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </BaseAutocomplete.Item>
  );
};
