import { Tabs as SwitchTabs } from '@base-ui/react/tabs'
import { type TabsProps, tabsVariants } from './tabs.types'
import { cn } from '@/utils/cn'

export const Tabs = ({
  style,
  size,
  orientation,
  shape,
  fill,
  className,
  ref,
  ...props
}: TabsProps) => {
  return (
    <SwitchTabs.Root
      className={cn(tabsVariants({ style, size, orientation, shape, fill }), className)}
      ref={ref}
      {...props}
    />
  )
}
