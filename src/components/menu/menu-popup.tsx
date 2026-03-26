import { Menu as BaseMenu } from "@base-ui/react/menu";
import { cn } from "@/utils/cn";
import type { MenuPopupProps } from "./menu.types";

export const MenuPopup = ({ className, children, ref, ...props }: MenuPopupProps) => {
  return (
    <BaseMenu.Portal>
      <BaseMenu.Positioner
        className={cn("outline-none", className)}
        ref={ref}
        sideOffset={8}
        {...props}
      >
        <BaseMenu.Popup
          className={
            "origin-(--transform-origin) rounded-md border border-outline bg-surface-container p-3xs py-2xs shadow-md outline outline-outline-variant transition-[transform,scale,opacity] data-ending-style:scale-90 data-starting-style:scale-90 data-ending-style:opacity-0 data-starting-style:opacity-0"
          }
        >
          {children}
        </BaseMenu.Popup>
      </BaseMenu.Positioner>
    </BaseMenu.Portal>
  );
};
