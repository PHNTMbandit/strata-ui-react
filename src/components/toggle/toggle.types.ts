import type { Toggle } from "@base-ui/react"

export type ToggleProps = React.ComponentProps<typeof Toggle> & {
	pressedChildren?: React.ReactNode
}
