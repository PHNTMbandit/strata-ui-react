import { Tabs as SwitchTabs } from '@base-ui/react/tabs'
import { cn } from '@/utils/cn'

import type { TabsPanelProps } from './tabs.types'

export const TabsPanel = ({ className, ...props }: TabsPanelProps) => {
  return (
    <SwitchTabs.Panel
      className={cn(
        'p-4 relative flex grow items-center justify-start overflow-auto border-t border-outline p-md',
        className,
      )}
      {...props}
    />
  )
}
