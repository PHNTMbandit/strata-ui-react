import React from "react"
import { cn } from "@/utils/cn"
import type { SidebarProps } from "./sidebar.types"
import { useSidebar } from "./sidebar-provider"

export const Sidebar = ({
	tone = "default",
	width = 250,
	collapsible = "offcanvas",
	className,
	children,
	ref,
	...props
}: SidebarProps) => {
	const {
		open,
		setOpen,
		isMobile,
		collapsible: providerCollapsible,
	} = useSidebar()
	const sidebarRef = React.useRef<HTMLDivElement>(null)

	const activeCollapsible = providerCollapsible || collapsible

	React.useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (
				sidebarRef.current &&
				!sidebarRef.current.contains(event.target as Node) &&
				activeCollapsible !== "none"
			) {
				if (
					(isMobile || activeCollapsible === "offcanvas") &&
					open &&
					setOpen
				) {
					setOpen(false)
				}
			}
		}

		document.addEventListener("click", handleOutsideClick)

		return () => {
			document.removeEventListener("click", handleOutsideClick)
		}
	}, [open, setOpen, isMobile, activeCollapsible])

	const getWidthStyle = (): React.CSSProperties => {
		if (activeCollapsible === "none") {
			return { width: `${width}px` }
		}

		if (activeCollapsible === "offcanvas") {
			if (open) {
				return isMobile ? { width: "33.333333%" } : { width: `${width}px` }
			} else {
				return isMobile ? { width: "0px" } : { width: "0px" }
			}
		}

		if (activeCollapsible === "icon") {
			return open ? { width: `${width}px` } : { width: "80px" }
		}

		return { width: `${width}px` }
	}

	const getGapClasses = () => {
		if (activeCollapsible === "none") {
			return "gap-lg"
		}

		if (activeCollapsible === "offcanvas") {
			return open ? "gap-lg" : "gap-sm"
		}

		if (activeCollapsible === "icon") {
			return open ? "gap-lg" : "gap-sm"
		}

		return "gap-lg"
	}

	const getPositionClasses = () => {
		if (activeCollapsible === "offcanvas" && !open && isMobile) {
			return "absolute z-50 -translate-x-full"
		}

		if (activeCollapsible === "offcanvas" && open && isMobile) {
			return "absolute z-50"
		}

		return ""
	}

	return (
		<div
			className={cn(
				"flex h-full flex-col justify-between overflow-hidden border-outline-variant border-r bg-surface-bright py-md transition-[width,transform] duration-200 ease-out",
				className,
				tone === "ghost" && "border-none bg-transparent",
				getGapClasses(),
				getPositionClasses(),
				activeCollapsible === "offcanvas" && !open && isMobile && "border-none",
				activeCollapsible === "offcanvas" && !open && "border-none",
			)}
			ref={sidebarRef}
			style={getWidthStyle()}
			{...props}
		>
			{children}
		</div>
	)
}
