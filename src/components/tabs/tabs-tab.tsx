import { Tabs as SwitchTabs } from '@base-ui/react/tabs'
import { cn } from '@/utils/cn'

import type { TabsTabProps } from './tabs.types'

export const TabsTab = ({ className, ...props }: TabsTabProps) => {
  return (
    <SwitchTabs.Tab
      className={cn(
        'data-active:text-on-primary [&:not([data-active])]:hover:bg-primary-container [&:not([data-active])]:hover:text-on-primary-container inline-flex items-center justify-center text-center break-keep whitespace-nowrap text-on-surface transition-colors duration-300 outline-none select-none hover:cursor-pointer focus-visible:relative focus-visible:before:absolute focus-visible:before:outline',
        className,
      )}
      {...props}
    />
  )
}
