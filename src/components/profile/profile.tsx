import { Avatar, AvatarFallback, AvatarImage } from '../avatar'
import { cn } from '@/utils/cn'

import type { ProfileProps } from './profile.types'

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
  return (
    <div
      className={cn('flex w-full items-center justify-between gap-3xl rounded-full', className)}
      ref={ref}
      {...props}
    >
      <div className="flex items-center gap-xs">
        <Avatar>
          <AvatarImage src={imageUrl} />
          <AvatarFallback>{fallbackText}</AvatarFallback>
        </Avatar>
        <div className={cn('flex flex-col items-start justify-start', compact && 'hidden')}>
          <span className="style-text-default-0">{profileName}</span>
          <span className="style-text-default--2 text-on-surface-variant">{profileEmail}</span>
        </div>
      </div>
      {children}
    </div>
  )
}
