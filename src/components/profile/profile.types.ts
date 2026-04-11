import type { ComponentProps } from 'react'

export type ProfileProps = ComponentProps<'div'> & {
  imageUrl: string
  fallbackText: string
  profileName: string
  profileEmail?: string
  compact?: boolean
}
