import { Tabs as SwitchTabs } from "@base-ui/react/tabs"
import { cn } from "@/utils/cn"
import type { TabsPanelProps } from "./tabs.types"

export const TabsPanel = ({ className, ...props }: TabsPanelProps) => {
	return (
		<SwitchTabs.Panel
			className={cn(
				"relative inset-shadow-sm flex grow items-center justify-start overflow-auto rounded-md bg-surface-container-lowest p-4 p-md",
				className,
			)}
			{...props}
		/>
	)
}
