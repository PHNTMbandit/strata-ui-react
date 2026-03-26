import { cn } from "@/utils/cn";
import type { BreadcrumbLinkProps } from "./breadcrumb.types";

export const BreadcrumbLink = ({ className, children, ref, ...props }: BreadcrumbLinkProps) => {
  return (
    <div
      className={cn(
        "style-text-default--1 inline-flex h-md items-center justify-center gap-3xs text-surface-on-surface-variant hover:cursor-pointer hover:underline hover:underline-offset-2 [&>svg]:size-xs",
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
};
