import { Tabs as SwitchTabs } from "@base-ui/react/tabs"
import { cn } from "@/utils/cn"
import type { TabsTabProps } from "./tabs.types"

export const TabsTab = ({ className, ...props }: TabsTabProps) => {
	return (
		<SwitchTabs.Tab
			className={cn(
				"inline-flex select-none items-center justify-center whitespace-nowrap break-keep text-center text-on-surface outline-none transition-colors duration-300 hover:cursor-pointer focus-visible:relative focus-visible:before:absolute focus-visible:before:outline data-active:text-on-primary [&:not([data-active])]:hover:bg-primary-container [&:not([data-active])]:hover:text-on-primary-container",
				className,
			)}
			{...props}
		/>
	)
}
