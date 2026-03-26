import { Menu as BaseMenu } from "@base-ui/react/menu";
import { CaretRightIcon } from "@phosphor-icons/react";
import { cn } from "@/utils/cn";
import type { MenuSubmenuTriggerProps } from "./menu.types";

export const MenuSubmenuTrigger = ({
  className,
  children,
  ref,
  ...props
}: MenuSubmenuTriggerProps) => {
  return (
    <BaseMenu.SubmenuTrigger
      className={cn(
        "grid cursor-default select-none grid-cols-[1fr_2rem] items-center px-sm py-3xs leading-md outline outline-transparent before:outline before:outline-transparent hover:cursor-pointer data-highlighted:relative data-popup-open:relative data-highlighted:z-0 data-popup-open:z-0 data-highlighted:text-on-brand-container data-highlighted:data-popup-open:before:bg-brand-container data-highlighted:before:absolute data-popup-open:before:absolute data-highlighted:before:inset-x-3xs data-popup-open:before:inset-x-3xs data-highlighted:before:inset-y-[0px] data-popup-open:before:inset-y-[0px] data-highlighted:before:z-[-1] data-popup-open:before:z-[-1] data-highlighted:before:rounded-md data-popup-open:before:rounded-md data-highlighted:before:bg-brand-container data-popup-open:before:bg-surface-dim data-highlighted:before:outline-brand-outline",
        className,
      )}
      ref={ref}
      {...props}
    >
      <span className="col-start-1 min-w-3xl pr-2xl">{children}</span>
      <CaretRightIcon className="col-start-2 size-xs place-self-end self-center" weight="bold" />
    </BaseMenu.SubmenuTrigger>
  );
};
