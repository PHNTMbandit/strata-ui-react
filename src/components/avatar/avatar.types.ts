import { cva } from 'class-variance-authority'

import type { Avatar as BaseAvatar } from '@base-ui/react/avatar'
import type { VariantProps } from 'class-variance-authority'
import type { ComponentProps } from 'react'

export const avatarVariants = cva('relative inline-flex items-center justify-center group/avatar', {
  variants: {
    size: {
      small: 'size-lg style-text-default--1',
      medium: 'size-xl style-text-default-0',
      large: 'size-2xl style-text-default-1',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})

export const avatarBadgeVariants = cva(
  'absolute right-0 bottom-0 size-xs rounded-full outline-3 inline-flex justify-center items-center outline-surface group-data-[size=large]/avatar:size-sm group-data-[size=large]/avatar:[&_svg]:size-xs group-data-[size=medium]/avatar:size-xs group-data-[size=medium]/avatar:[&_svg]:size-2xs group-data-[size=small]/avatar:size-2xs group-data-[size=small]/avatar:[&_svg]:size-2xs',
  {
    variants: {
      tone: {
        brand: 'bg-brand [&>svg]:text-on-brand',
        accent: 'bg-accent [&>svg]:text-on-accent',
        neutral: 'bg-surface-container-2 [&>svg]:text-on-surface',
        error: 'bg-error [&>svg]:text-on-error',
        info: 'bg-info [&>svg]:text-on-info',
        success: 'bg-success [&>svg]:text-on-success',
        warning: 'bg-warning [&>svg]:text-on-warning',
      },
      position: {
        topLeft: 'top-0 left-0',
        topRight: 'top-0 right-0',
        bottomLeft: 'bottom-0 left-0',
        bottomRight: 'bottom-0 right-0',
      },
    },
    defaultVariants: {
      tone: 'success',
      position: 'bottomRight',
    },
  },
)

export type AvatarProps = ComponentProps<typeof BaseAvatar.Root> &
  VariantProps<typeof avatarVariants>
export type AvatarImageProps = ComponentProps<typeof BaseAvatar.Image>
export type AvatarFallbackProps = ComponentProps<typeof BaseAvatar.Fallback>
export type AvatarBadgeProps = ComponentProps<'div'> & VariantProps<typeof avatarBadgeVariants>
