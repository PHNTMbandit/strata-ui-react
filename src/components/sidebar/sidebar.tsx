import React from "react";
import { cn } from "@/utils/cn";
import type { SidebarProps } from "./sidebar.types";
import { useSidebar } from "./sidebar-provider";

export const Sidebar = ({
  tone = "default",
  width = 400,
  className,
  children,
  ...props
}: SidebarProps) => {
  const { open, setOpen, isMobile, collapsible, side } = useSidebar();
  const sidebarRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!isMobile || !open) return;

    const handleOutsideClick = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setOpen?.(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [open, setOpen, isMobile]);

  const isCollapsible = collapsible === "offcanvas" || collapsible === "icon";

  const getWidthStyle = (): React.CSSProperties => {
    if (collapsible === "none") {
      return { width: `${width}px` };
    }

    if (!open) {
      if (collapsible === "icon" && !isMobile) return { width: "80px" };
      return { width: "0px" };
    }

    if (collapsible === "offcanvas" && isMobile) {
      return { width: "33.333333%" };
    }

    return { width: `${width}px` };
  };

  const getGapClasses = () => {
    return isCollapsible && !open ? "gap-sm" : "gap-lg";
  };

  const getPositionClasses = () => {
    if (isCollapsible && isMobile) {
      return open ? "absolute z-50" : "absolute z-50 -translate-x-full";
    }
    return "";
  };

  return (
    <div
      className={cn(
        "sticky left-[0px] flex h-full shrink-0 flex-col justify-between overflow-hidden border-outline bg-surface-container outline outline-outline-variant transition-[width,transform] duration-300 ease-in-out",
        className,
        tone === "ghost" && !isMobile && "border-none bg-transparent outline-none",
        getGapClasses(),
        getPositionClasses(),
        open && "px-md pt-lg pb-md",
        !open && collapsible === "offcanvas" && "border-none",
        !open && collapsible !== "offcanvas" && "p-xs",
        isMobile && "border-none",
        side === "left" ? "border-r" : "border-l",
      )}
      ref={sidebarRef}
      style={getWidthStyle()}
      {...props}
    >
      {children}
    </div>
  );
};
