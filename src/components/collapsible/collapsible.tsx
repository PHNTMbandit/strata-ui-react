import { Collapsible as BaseCollapsible } from "@base-ui/react";
import { cn } from "@/utils/cn";
import type { CollapsibleProps } from "./collapsible.types";

export const Collapsible = ({ className, children, ref, ...props }: CollapsibleProps) => {
  return (
    <BaseCollapsible.Root className={cn("", className)} ref={ref} {...props}>
      {children}
    </BaseCollapsible.Root>
  );
};
