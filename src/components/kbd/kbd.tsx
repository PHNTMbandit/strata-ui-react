import { cn } from "@/utils/cn";
import type { KbdProps } from "./kbd.types";

export const Kbd = ({ className, children, ref, ...props }: KbdProps) => {
  return (
    <div
      className={cn(
        "style-text-prose--2 inline-flex h-md select-none items-center justify-center whitespace-nowrap rounded-full border border-outline bg-surface-container px-3xs text-on-surface-variant shadow-xs [&>p]:p-3xs [&>svg]:size-sm",
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
};
