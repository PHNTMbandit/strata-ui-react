import { Profile } from "./profile"

export default {
	title: "Components/Profile",
	component: Profile,
	parameters: {
		docs: {
			subtitle: "A component for displaying user profile information.",
			description: {
				component:
					"The Profile component is designed to showcase user information such as name, avatar, and bio. It is typically used in user dashboards, account settings, and social media platforms to provide a comprehensive view of the user's identity and details.",
			},
		},
	},
	args: {
		imageUrl: "https://github.com/shadcn.png",
		fallbackText: "JS",
		profileName: "John Smith",
		profileEmail: "john.smith@example.com",
		compact: false,
	},
}

export const Default = {}
export const Compact = {
	args: {
		compact: true,
	},
}
