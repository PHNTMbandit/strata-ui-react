import { CaretRightIcon } from "@phosphor-icons/react";
import { cn } from "@/utils/cn";
import type { BreadcrumbSeparatorProps } from "./breadcrumb.types";

export const BreadcrumbSeparator = ({ className, ref, ...props }: BreadcrumbSeparatorProps) => {
  return (
    <div
      className={cn(
        "flex size-md items-center justify-center text-surface-on-surface-variant [&>svg]:size-xs",
        className,
      )}
      ref={ref}
      {...props}
    >
      <CaretRightIcon weight="bold" />
    </div>
  );
};
