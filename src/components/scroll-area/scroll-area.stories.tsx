import type { Meta, StoryObj } from "@storybook/react-vite"
import { ScrollArea } from "./scroll-area"

export default {
	title: "Components/Scroll Area",
	component: ScrollArea,
	parameters: {
		docs: {
			subtitle:
				"A component that provides a scrollable area for content that exceeds the visible bounds.",
			description: {
				component:
					"The ScrollArea component is designed to contain content that may overflow its visible area, allowing users to scroll through the content vertically or horizontally. It is useful for displaying large amounts of data, images, or any other content that does not fit within a fixed-size container. The component can be customized with various styling options to match the overall design of the application.",
			},
		},
	},
	args: {
		orientation: "vertical",
		defaultHeight: 200,
	},
	argTypes: {
		orientation: {
			control: { type: "radio" },
			options: ["vertical", "horizontal"],
		},
	},
	render: (args: any) => (
		<ScrollArea {...args}>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
				error sit voluptatem accusantium doloremque laudantium, totam rem
				aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
				beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
				voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
				dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
				est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
				sed quia non numquam eius modi tempora incidunt ut labore et dolore
				magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
				nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
				aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
				qui in ea voluptate velit esse quam nihil molestiae consequatur, vel
				illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et
				accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
				voluptatum deleniti atque corrupti quos dolores et quas molestias
				excepturi sint occaecati cupiditate non provident, similique sunt in
				culpa qui officia deserunt mollitia animi```tsx Vestibulum ante ipsum
				primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris
				viverra venenenatis libero, at consectetur nulla facilisis vel.
				Pellentesque habitant morbi tristique senectus et netus et malesuada
				fames ac turpis egestas. Cras ultricies ligula sed magna dictum porta.
				Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia
				eget consectetur sed, convallis at tellus. Proin eget tortor risus.
				Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris
				blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor
				lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit
				amet dui.
			</p>
		</ScrollArea>
	),
} satisfies Meta<typeof ScrollArea>

interface Artwork {
	artist: string
	art: string
}

const works: Artwork[] = [
	{
		artist: "Ornella Binni",
		art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
	},
	{
		artist: "Tom Byrom",
		art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
	},
	{
		artist: "Vladimir Malyavko",
		art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
	},
]

type Story = StoryObj<typeof ScrollArea>

export const Vertical: Story = {}
export const Horizontal: Story = {
	args: {
		orientation: "horizontal",
		defaultHeight: 150,
	},
	render: (args) => (
		<ScrollArea {...args}>
			{works.map((artwork) => (
				<figure className="shrink-0" key={artwork.artist}>
					<div className="overflow-hidden rounded-md">
						<img
							alt={`${artwork.artist}`}
							className="aspect-3/4 h-fit w-fit object-cover"
							height={400}
							src={artwork.art}
							width={300}
						/>
					</div>
					<figcaption className="pt-2 text-muted-foreground text-xs">
						Photo by{" "}
						<span className="font-semibold text-foreground">
							{artwork.artist}
						</span>
					</figcaption>
				</figure>
			))}
		</ScrollArea>
	),
}
