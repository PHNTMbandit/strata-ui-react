import { SidebarSimpleIcon } from '@phosphor-icons/react'
import { Button } from '../button'
import { useSidebar } from './sidebar-provider'
import { cn } from '@/utils/cn'

import type { SidebarToggleProps } from './sidebar.types'

export const SidebarToggle = ({ className, children, ref, ...props }: SidebarToggleProps) => {
  const { trigger, collapsible } = useSidebar()

  if (collapsible === 'none') {
    return null
  }

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (trigger) {
      trigger()
    }
  }

  return (
    <Button
      className={cn('shrink-0', className)}
      ref={ref}
      size={'iconMedium'}
      variant={'ghost'}
      {...props}
      onClick={handleClick}
    >
      {children}
      <SidebarSimpleIcon weight="bold" />
    </Button>
  )
}
