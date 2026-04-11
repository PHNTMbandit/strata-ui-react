import { Tabs as SwitchTabs } from '@base-ui/react/tabs'
import { type TabsProps, tabsVariants } from './tabs.types'
import { cn } from '@/utils/cn'

export const Tabs = ({ variant, fill, className, ref, ...props }: TabsProps) => {
  return (
    <SwitchTabs.Root
      className={cn(tabsVariants({ variant, fill }), className)}
      ref={ref}
      {...props}
    />
  )
}
