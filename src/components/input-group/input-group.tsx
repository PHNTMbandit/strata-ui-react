import { cn } from '@/utils/cn'

import type { InputGroupProps } from './input-group.types'

export const InputGroup = ({ className, children, ref, ...props }: InputGroupProps) => {
  return (
    <div
      className={cn(
        'flex h-xl w-full items-center gap-xs rounded-xl bg-surface-bright p-sm text-ellipsis elevation-xs outline outline-outline-variant transition-all focus-within:caret-brand focus-within:outline-brand-outline hover:not-focus-within:outline-outline disabled:cursor-not-allowed data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50 hover:data-[disabled=true]:outline-transparent',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}
