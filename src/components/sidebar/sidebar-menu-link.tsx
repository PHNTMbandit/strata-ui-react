import { Button } from '../button'
import { useSidebar } from './sidebar-provider'
import { type SidebarMenuLinkProps } from './sidebar.types'
import { cn } from '@/utils/cn'

export const SidebarMenuLink = ({
  isActive,
  className,
  children,
  ref,
  ...props
}: SidebarMenuLinkProps) => {
  const { open, collapsible } = useSidebar()
  const showText = collapsible === 'none' || open

  return (
    <Button
      variant={isActive ? 'solid' : 'ghost'}
      tone={isActive ? 'brand' : 'neutral'}
      size={open ? 'medium' : 'iconMedium'}
      className={cn(
        'duration-200 ease-out [&>svg]:shrink-0',
        className,
        isActive && 'pointer-events-none',
        !showText && 'mx-auto',
        !open ? '*:hidden [&>svg]:block' : 'w-full justify-start',
        collapsible !== 'none' && open && 'animate-in fade-in-0 slide-in-from-left-2',
      )}
      ref={ref}
      {...props}
    >
      {children}
    </Button>
  )
}
