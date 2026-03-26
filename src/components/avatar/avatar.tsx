import { Avatar as BaseAvatar } from '@base-ui/react/avatar'
import { cn } from '@/utils/cn'

import type { AvatarProps } from './avatar.types'

export const Avatar = ({ className, children, ref, ...props }: AvatarProps) => {
  return (
    <BaseAvatar.Root
      className={cn(
        'inline-flex size-xl items-center justify-center overflow-hidden rounded-full bg-surface-container align-middle font-medium shadow-sm select-none',
        className,
      )}
      data-slot="avatar"
      ref={ref}
      {...props}
    >
      {children}
    </BaseAvatar.Root>
  )
}
