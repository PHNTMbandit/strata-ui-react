import { Tabs as SwitchTabs } from '@base-ui/react/tabs'
import { cn } from '@/utils/cn'

import type { TabsTabProps } from './tabs.types'

export const TabsTab = ({ className, ...props }: TabsTabProps) => {
  return (
    <SwitchTabs.Tab
      className={cn(
        'flex items-center justify-center gap-xs style-text-default-0 transition-colors hover:cursor-pointer',
        className,
      )}
      {...props}
    />
  )
}
