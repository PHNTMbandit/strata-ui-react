import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import { XIcon } from "@phosphor-icons/react";
import { cn } from "@/utils/cn";
import type { DialogCloseProps } from "./dialog.types";

export const DialogClose = ({ className, children, ref, ...props }: DialogCloseProps) => {
  return (
    <BaseDialog.Close
      className={cn("absolute top-sm right-sm", className)}
      ref={ref}
      {...props}
      render={
        <button
          aria-label="Close"
          className="flex items-center justify-center rounded-lg border border-transparent p-3xs text-on-surface transition-colors hover:cursor-pointer hover:border-error-outline hover:bg-error-container hover:text-on-error-container"
          type="button"
        >
          <XIcon className="size-sm" weight="bold" />
        </button>
      }
    >
      {children}
    </BaseDialog.Close>
  );
};
