import { Menu as BaseMenu } from "@base-ui/react/menu";
import { cn } from "@/utils/cn";
import type { MenuSeperatorProps } from "./menu.types";

export const MenuSeperator = ({ className, ref, ...props }: MenuSeperatorProps) => {
  return (
    <BaseMenu.Separator
      className={cn("mx-2xs my-3xs h-px bg-outline", className)}
      ref={ref}
      {...props}
    />
  );
};
