import { ArrowsDownUpIcon } from "@phosphor-icons/react";
import { cn } from "@/utils/cn";
import { Button } from "../button";
import type { TableSortProps } from "./table.types";

export const TableSort = ({ className, children, ref, ...props }: TableSortProps) => {
  return (
    <Button className={cn("", className)} ref={ref} {...props}>
      {children}
      <ArrowsDownUpIcon weight="bold" />
    </Button>
  );
};
