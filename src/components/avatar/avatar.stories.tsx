import { Avatar } from "./avatar"
import { AvatarFallback } from "./avatar-fallback"
import { AvatarImage } from "./avatar-image"

export default {
	title: "Components/Avatar",
	component: Avatar,
	subcomponents: { AvatarImage, AvatarFallback },
	parameters: {
		docs: {
			subtitle: "A component for displaying user profile images or initials.",
			description: {
				component:
					"The Avatar component is used to represent a user or entity visually. It can display either an image or the initials of the user when an image is not available. This component is commonly used in user profiles, comments, and messaging interfaces to provide a personal touch and enhance user recognition.",
			},
		},
	},
	args: {
		src: "https://github.com/shadcn.png",
		fallback: "SU",
	},
}

export const Default = {
	render: (args: any) => (
		<Avatar {...args}>
			<AvatarImage src={args.src} />
		</Avatar>
	),
}

export const WithFallback = {
	render: (args: any) => (
		<Avatar {...args}>
			<AvatarFallback>{args.fallback}</AvatarFallback>
		</Avatar>
	),
}
