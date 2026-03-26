import { cn } from "@/utils/cn";
import { type BreadcrumbProps, breadcrumbVariants } from "./breadcrumb.types";

export const Breadcrumb = ({ style, className, children, ref, ...props }: BreadcrumbProps) => {
  return (
    <div className={cn(breadcrumbVariants({ style, className }))} ref={ref} {...props}>
      {children}
    </div>
  );
};
