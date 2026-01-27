import React from "react"
import { cn } from "@/utils/cn"
import type { SidebarProps } from "./sidebar.types"
import { useSidebar } from "./sidebar-provider"

export const Sidebar = ({
	tone = "default",
	width = 250,
	className,
	children,
	ref,
	...props
}: SidebarProps) => {
	const { open, setOpen, isMobile, collapsible } = useSidebar()
	const sidebarRef = React.useRef<HTMLDivElement>(null)

	React.useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (
				sidebarRef.current &&
				!sidebarRef.current.contains(event.target as Node) &&
				collapsible !== "none"
			) {
				if ((isMobile || collapsible === "offcanvas") && open && setOpen) {
					setOpen(false)
				}
			}
		}

		document.addEventListener("click", handleOutsideClick)

		return () => {
			document.removeEventListener("click", handleOutsideClick)
		}
	}, [open, setOpen, isMobile, collapsible])

	const getWidthStyle = (): React.CSSProperties => {
		if (collapsible === "none") {
			return { width: `${width}px` }
		}

		if (collapsible === "offcanvas") {
			if (open) {
				return isMobile ? { width: "33.333333%" } : { width: `${width}px` }
			} else {
				return isMobile ? { width: "0px" } : { width: "0px" }
			}
		}

		if (collapsible === "icon") {
			if (open) {
				return isMobile ? { width: `${width}px` } : { width: `${width}px` }
			} else {
				return isMobile ? { width: "0px" } : { width: "80px" }
			}
		}

		return { width: `${width}px` }
	}

	const getGapClasses = () => {
		if (collapsible === "none") {
			return "gap-lg"
		}

		if (collapsible === "offcanvas") {
			return open ? "gap-lg" : "gap-sm"
		}

		if (collapsible === "icon") {
			return open ? "gap-lg" : "gap-sm"
		}

		return "gap-lg"
	}

	const getPositionClasses = () => {
		if (
			(collapsible === "offcanvas" || collapsible === "icon") &&
			!open &&
			isMobile
		) {
			return "absolute z-50 -translate-x-full"
		}

		if (
			(collapsible === "offcanvas" || collapsible === "icon") &&
			open &&
			isMobile
		) {
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
				collapsible === "offcanvas" && !open && isMobile && "border-none",
				collapsible === "offcanvas" && !open && "border-none",
			)}
			ref={sidebarRef}
			style={getWidthStyle()}
			{...props}
		>
			{children}
		</div>
	)
}
