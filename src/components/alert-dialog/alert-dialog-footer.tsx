import { cn } from "@/utils/cn";
import type { AlertDialogFooterProps } from "./alert-dialog.types";

export const AlertDialogFooter = ({
  className,
  children,
  ref,
  ...props
}: AlertDialogFooterProps) => {
  return (
    <div
      className={cn("w-full border-outline border-t bg-surface-bright", className)}
      ref={ref}
      {...props}
    >
      <div className="flex w-full items-center gap-2xs p-sm">{children}</div>
    </div>
  );
};
