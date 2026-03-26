import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { CaretDownIcon, XIcon } from "@phosphor-icons/react";
import React, { createElement } from "react";
import { cn } from "@/utils/cn";
import { Separator } from "../separator";
import type { ComboboxInputProps } from "./combobox.types";

export const ComboboxInput = ({
  leadingIcon,
  showSeparator = false,
  inline = false,
  className,
  children,
  ref,
  ...props
}: ComboboxInputProps) => {
  const id = React.useId();

  if (inline) {
    return (
      <div className="h-(--input-container-height) py-2xs pr-2xs">
        <BaseCombobox.Input
          className={cn(
            "h-xl w-full rounded-lg bg-surface-dim px-sm outline-2 outline-brand transition-all hover:outline-outline focus:caret-brand focus:outline-brand focus:-outline-offset-1 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50",
            "placeholder:opacity-60",
            "disabled:cursor-not-allowed",
            "overflow-ellipsis",
            className,
          )}
          id={id}
          ref={ref}
          {...props}
        />
      </div>
    );
  }

  return (
    <div
      aria-disabled={props.disabled}
      className={cn(
        "group elevation-sm relative flex min-h-xl flex-col items-center gap-xs rounded-[28px] bg-surface-container p-sm pl-md text-prose-0 outline-2 outline-outline-variant transition-all focus-within:caret-brand focus-within:outline-brand focus-within:outline-offset-2 hover:not-focus-within:outline-outline hover:not-focus-within:outline-offset-2 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50 data-[disabled=true]:hover:outline-transparent",
        className,
      )}
      data-disabled={props.disabled}
    >
      {children}
      <div className="flex w-full items-center [&>input]:pr-[calc(0.5rem+1.5rem)] has-[.combobox-clear]:[&>input]:pr-[calc(0.5rem+1.5rem*2)]">
        {leadingIcon && (
          <>
            <div
              className={cn(
                "flex items-center justify-center text-on-surface-variant transition-all group-focus-within:text-brand [&>svg]:size-sm",
              )}
            >
              {createElement(leadingIcon, {
                weight: "bold",
              })}
            </div>
            {showSeparator && (
              <Separator
                className={"group-focus-within:bg-brand"}
                orientation="vertical"
                thickness={"thin"}
              />
            )}
          </>
        )}
        <BaseCombobox.Input
          className={cn(
            "w-full outline-none",
            "placeholder:opacity-60",
            "disabled:cursor-not-allowed",
            "overflow-ellipsis",
            className,
          )}
          id={id}
          ref={ref}
          {...props}
        />
        <div className="absolute right-xs inline-flex items-center gap-3xs">
          <BaseCombobox.Clear
            aria-label="Clear selection"
            className={
              "combobox-clear flex items-center justify-center rounded-full border border-transparent bg-transparent p-3xs text-error transition-colors hover:cursor-pointer hover:border-error-outline hover:bg-error-container hover:text-on-error-container disabled:opacity-50"
            }
            keepMounted
          >
            <XIcon className="size-sm" weight="bold" />
          </BaseCombobox.Clear>
          <BaseCombobox.Trigger
            aria-label="Open popup"
            className="flex items-center justify-center rounded-full border border-transparent bg-transparent p-3xs transition-colors hover:cursor-pointer hover:border-brand-outline hover:bg-brand-container hover:text-on-brand-container data-popup-open:bg-brand data-popup-open:text-on-brand"
          >
            <CaretDownIcon className="size-sm" weight="bold" />
          </BaseCombobox.Trigger>
        </div>
      </div>
    </div>
  );
};
