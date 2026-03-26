import { FunnelSimpleIcon, SortAscendingIcon, SortDescendingIcon } from "@phosphor-icons/react";
import { flexRender } from "@tanstack/react-table";
import { cn } from "@/utils/cn";
import { useTable } from "./table";
import type { TableHeaderProps } from "./table.types";

export const TableHeader = ({ className, children, ref, ...props }: TableHeaderProps) => {
  const { table } = useTable();

  return (
    <thead className={cn("")} ref={ref} {...props}>
      {children}
      {table.getHeaderGroups().map((headerGroup) => (
        <tr className="rounded-xl shadow-xs" key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return (
              <th
                className={cn(
                  "style-text-default-0 h-xl bg-surface-container px-sm text-left transition-colors first:rounded-l-xl last:rounded-r-xl",
                  header.column.getCanSort() && "hover:cursor-pointer",
                  header.isPlaceholder && "cursor-default",
                  className,
                )}
                colSpan={header.colSpan}
                key={header.id}
                onClick={header.column.getToggleSortingHandler()}
                style={{
                  width: header.column.getSize(),
                  minWidth: header.column.columnDef.minSize,
                  maxWidth: header.column.columnDef.maxSize,
                }}
              >
                {header.isPlaceholder ? null : (
                  <div
                    className={cn(
                      "inline-flex items-center justify-center gap-2xs [&>svg]:size-sm",
                      header.column.getCanSort() && "select-none hover:cursor-pointer",
                    )}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {{
                      asc: <SortDescendingIcon weight="bold" />,
                      desc: <SortAscendingIcon weight="bold" />,
                    }[header.column.getIsSorted() as string] ??
                      (header.column.getCanSort() ? <FunnelSimpleIcon weight="bold" /> : null)}
                  </div>
                )}
              </th>
            );
          })}
        </tr>
      ))}
    </thead>
  );
};
