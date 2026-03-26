import { cn } from "@/utils/cn";
import type { AlertDialogContentProps } from "./alert-dialog.types";

export const AlertDialogContent = ({
  className,
  children,
  ref,
  ...props
}: AlertDialogContentProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-2xs border-outline-variant border-b px-sm pb-lg text-center",
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
};
