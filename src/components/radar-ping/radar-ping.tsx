import { cn } from "@/utils/cn";
import { type RadarPingProps, radarPingVariants } from "./radar-ping.types";

export const RadarPing = ({
  hidePing = false,
  tone = "brand",
  size = "medium",
  className,
  children,
  ref,
  ...props
}: RadarPingProps) => {
  return (
    <div className={cn(radarPingVariants({ tone, size, className }))} ref={ref} {...props}>
      {!hidePing && (
        <span
          className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
          data-radar-ping
        />
      )}
      <span className="relative flex items-center justify-center rounded-full" data-dot>
        {children}
      </span>
    </div>
  );
};
