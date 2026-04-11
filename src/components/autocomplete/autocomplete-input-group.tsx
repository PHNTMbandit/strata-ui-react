import { cn } from '@/utils/cn'

import type { AutocompleteInputGroupProps } from './autocomplete.types'

export const AutocompleteInputGroup = ({
  className,
  children,
  ref,
  ...props
}: AutocompleteInputGroupProps) => {
  return (
    <div
      className={cn(
        'flex h-xl w-full items-center gap-xs rounded-xl bg-surface-container p-sm text-ellipsis elevation-xs outline outline-outline-variant transition-all focus-within:caret-brand focus-within:outline-brand-outline hover:not-focus-within:outline-outline disabled:cursor-not-allowed data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50 hover:data-[disabled=true]:outline-transparent',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
