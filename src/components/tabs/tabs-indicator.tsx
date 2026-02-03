import { Tabs as SwitchTabs } from "@base-ui/react/tabs"
import { cn } from "@/utils/cn"
import type { TabsIndicatorProps } from "./tabs.types"

export const TabsIndicator = ({ className, ...props }: TabsIndicatorProps) => {
	return (
		<SwitchTabs.Indicator
			className={cn(
				"absolute top-1/2 left-0 z-[-1] h-(--active-tab-height) w-(--active-tab-width) translate-x-(--active-tab-left) -translate-y-1/2 bg-primary transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]",
				className,
			)}
			{...props}
		/>
	)
}
