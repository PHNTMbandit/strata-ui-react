import { cn } from "@/utils/cn";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import type { ProfileProps } from "./profile.types";

export const Profile = ({
  className,
  imageUrl,
  fallbackText,
  profileName,
  profileEmail,
  compact = false,
  children,
  ref,
  ...props
}: ProfileProps) => {
  if (compact) {
    return (
      <div className="group flex items-center justify-between gap-2xl rounded-full transition-all hover:cursor-pointer">
        <button
          className={cn(
            "flex items-center gap-xs transition-colors hover:cursor-pointer",
            className,
          )}
          ref={ref}
          {...props}
        >
          <Avatar
            className={"border border-transparent transition-colors group-hover:border-primary"}
          >
            <AvatarImage src={imageUrl} />
            <AvatarFallback>{fallbackText}</AvatarFallback>
          </Avatar>
        </button>
        {children}
      </div>
    );
  }

  return (
    <div className="hover:elevation-xs flex items-center justify-between gap-2xl rounded-xl border border-transparent p-2xs transition-all hover:cursor-pointer hover:border-outline-variant hover:bg-surface-container hover:shadow-sm">
      <button
        className={cn("flex items-center gap-xs transition-colors hover:cursor-pointer", className)}
        ref={ref}
        {...props}
      >
        <Avatar>
          <AvatarImage src={imageUrl} />
          <AvatarFallback>{fallbackText}</AvatarFallback>
        </Avatar>
        <div className={cn("flex flex-col items-start justify-start")}>
          <span className="style-text-default-0">{profileName}</span>
          <span className="style-text-default--2 text-on-surface-variant">{profileEmail}</span>
        </div>
      </button>
      {children}
    </div>
  );
};
