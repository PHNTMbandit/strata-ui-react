import { AlertDialog as BaseAlertDialog } from "@base-ui/react";
import { cn } from "@/utils/cn";
import type { AlertDialogTitleProps } from "./alert-dialog.types";

export const AlertDialogTitle = ({ className, children, ref, ...props }: AlertDialogTitleProps) => {
  return (
    <BaseAlertDialog.Title
      className={cn("style-text-strong-2 flex items-center gap-2xs [&>svg]:size-md", className)}
      ref={ref}
      {...props}
    >
      {children}
    </BaseAlertDialog.Title>
  );
};
