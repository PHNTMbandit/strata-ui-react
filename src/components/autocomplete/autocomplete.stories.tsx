import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "../button"
import { Input } from "../input"
import { Autocomplete } from "./autocomplete"
import { AutocompleteCollection } from "./autocomplete-collection"
import { AutocompleteContent } from "./autocomplete-content"
import { AutocompleteGridContent } from "./autocomplete-grid-content"
import { AutocompleteGridItem } from "./autocomplete-grid-item"
import { AutocompleteGroup } from "./autocomplete-group"
import { AutocompleteGroupLabel } from "./autocomplete-group-label"
import { AutocompleteInput } from "./autocomplete-input"
import { AutocompleteItem } from "./autocomplete-item"
import { AutocompleteRow } from "./autocomplete-row"
import { AutocompleteStatus } from "./autocomplete-status"
import { AutocompleteTrigger } from "./autocomplete-trigger"

function chunkArray<T>(array: T[], size: number): T[][] {
	const result: T[][] = []
	for (let i = 0; i < array.length; i += size) {
		result.push(array.slice(i, i + size))
	}
	return result
}

interface EmojiItem {
	emoji: string
	value: string
	name: string
}

interface EmojiGroup {
	value: string
	label: string
	items: EmojiItem[]
}

const emojiCategories = [
	{
		label: "Smileys & Emotion",
		emojis: [
			{ emoji: "😀", name: "grinning face" },
			{ emoji: "😃", name: "grinning face with big eyes" },
			{ emoji: "😄", name: "grinning face with smiling eyes" },
			{ emoji: "😁", name: "beaming face with smiling eyes" },
			{ emoji: "😆", name: "grinning squinting face" },
			{ emoji: "😅", name: "grinning face with sweat" },
			{ emoji: "🤣", name: "rolling on the floor laughing" },
			{ emoji: "😂", name: "face with tears of joy" },
			{ emoji: "🙂", name: "slightly smiling face" },
			{ emoji: "🙃", name: "upside-down face" },
			{ emoji: "😉", name: "winking face" },
			{ emoji: "😊", name: "smiling face with smiling eyes" },
			{ emoji: "😇", name: "smiling face with halo" },
			{ emoji: "🥰", name: "smiling face with hearts" },
			{ emoji: "😍", name: "smiling face with heart-eyes" },
			{ emoji: "🤩", name: "star-struck" },
			{ emoji: "😘", name: "face blowing a kiss" },
			{ emoji: "😗", name: "kissing face" },
			{ emoji: "☺️", name: "smiling face" },
			{ emoji: "😚", name: "kissing face with closed eyes" },
			{ emoji: "😙", name: "kissing face with smiling eyes" },
			{ emoji: "🥲", name: "smiling face with tear" },
			{ emoji: "😋", name: "face savoring food" },
			{ emoji: "😛", name: "face with tongue" },
			{ emoji: "😜", name: "winking face with tongue" },
			{ emoji: "🤪", name: "zany face" },
			{ emoji: "😝", name: "squinting face with tongue" },
			{ emoji: "🤑", name: "money-mouth face" },
			{ emoji: "🤗", name: "hugging face" },
			{ emoji: "🤭", name: "face with hand over mouth" },
		],
	},
	{
		label: "Animals & Nature",
		emojis: [
			{ emoji: "🐶", name: "dog face" },
			{ emoji: "🐱", name: "cat face" },
			{ emoji: "🐭", name: "mouse face" },
			{ emoji: "🐹", name: "hamster" },
			{ emoji: "🐰", name: "rabbit face" },
			{ emoji: "🦊", name: "fox" },
			{ emoji: "🐻", name: "bear" },
			{ emoji: "🐼", name: "panda" },
			{ emoji: "🐨", name: "koala" },
			{ emoji: "🐯", name: "tiger face" },
			{ emoji: "🦁", name: "lion" },
			{ emoji: "🐮", name: "cow face" },
			{ emoji: "🐷", name: "pig face" },
			{ emoji: "🐽", name: "pig nose" },
			{ emoji: "🐸", name: "frog" },
			{ emoji: "🐵", name: "monkey face" },
			{ emoji: "🙈", name: "see-no-evil monkey" },
			{ emoji: "🙉", name: "hear-no-evil monkey" },
			{ emoji: "🙊", name: "speak-no-evil monkey" },
			{ emoji: "🐒", name: "monkey" },
			{ emoji: "🐔", name: "chicken" },
			{ emoji: "🐧", name: "penguin" },
			{ emoji: "🐦", name: "bird" },
			{ emoji: "🐤", name: "baby chick" },
			{ emoji: "🐣", name: "hatching chick" },
			{ emoji: "🐥", name: "front-facing baby chick" },
			{ emoji: "🦆", name: "duck" },
			{ emoji: "🦅", name: "eagle" },
			{ emoji: "🦉", name: "owl" },
			{ emoji: "🦇", name: "bat" },
		],
	},
	{
		label: "Food & Drink",
		emojis: [
			{ emoji: "🍎", name: "red apple" },
			{ emoji: "🍏", name: "green apple" },
			{ emoji: "🍊", name: "tangerine" },
			{ emoji: "🍋", name: "lemon" },
			{ emoji: "🍌", name: "banana" },
			{ emoji: "🍉", name: "watermelon" },
			{ emoji: "🍇", name: "grapes" },
			{ emoji: "🍓", name: "strawberry" },
			{ emoji: "🫐", name: "blueberries" },
			{ emoji: "🍈", name: "melon" },
			{ emoji: "🍒", name: "cherries" },
			{ emoji: "🍑", name: "peach" },
			{ emoji: "🥭", name: "mango" },
			{ emoji: "🍍", name: "pineapple" },
			{ emoji: "🥥", name: "coconut" },
			{ emoji: "🥝", name: "kiwi fruit" },
			{ emoji: "🍅", name: "tomato" },
			{ emoji: "🍆", name: "eggplant" },
			{ emoji: "🥑", name: "avocado" },
			{ emoji: "🥦", name: "broccoli" },
			{ emoji: "🥬", name: "leafy greens" },
			{ emoji: "🥒", name: "cucumber" },
			{ emoji: "🌶️", name: "hot pepper" },
			{ emoji: "🫑", name: "bell pepper" },
			{ emoji: "🌽", name: "ear of corn" },
			{ emoji: "🥕", name: "carrot" },
			{ emoji: "🫒", name: "olive" },
			{ emoji: "🧄", name: "garlic" },
			{ emoji: "🧅", name: "onion" },
			{ emoji: "🥔", name: "potato" },
		],
	},
]

const emojiGroups: EmojiGroup[] = emojiCategories.map((category) => ({
	value: category.label,
	label: category.label,
	items: category.emojis.map((emoji) => ({
		...emoji,
		value: emoji.name.toLowerCase(),
	})),
}))

interface Tag2 {
	id: string
	label: string
	group: "Type" | "Component"
}

interface TagGroup {
	value: string
	items: Tag2[]
}

const tagsData: Tag2[] = [
	{ id: "t1", label: "feature", group: "Type" },
	{ id: "t2", label: "fix", group: "Type" },
	{ id: "t3", label: "bug", group: "Type" },
	{ id: "t4", label: "docs", group: "Type" },
	{ id: "t5", label: "internal", group: "Type" },
	{ id: "t6", label: "mobile", group: "Type" },
	{ id: "c-accordion", label: "component: accordion", group: "Component" },
	{
		id: "c-alert-dialog",
		label: "component: alert dialog",
		group: "Component",
	},
	{
		id: "c-autocomplete",
		label: "component: autocomplete",
		group: "Component",
	},
	{ id: "c-avatar", label: "component: avatar", group: "Component" },
	{ id: "c-checkbox", label: "component: checkbox", group: "Component" },
	{
		id: "c-checkbox-group",
		label: "component: checkbox group",
		group: "Component",
	},
	{ id: "c-collapsible", label: "component: collapsible", group: "Component" },
	{ id: "c-combobox", label: "component: combobox", group: "Component" },
	{
		id: "c-context-menu",
		label: "component: context menu",
		group: "Component",
	},
	{ id: "c-dialog", label: "component: dialog", group: "Component" },
	{ id: "c-field", label: "component: field", group: "Component" },
	{ id: "c-fieldset", label: "component: fieldset", group: "Component" },
	{
		id: "c-filterable-menu",
		label: "component: filterable menu",
		group: "Component",
	},
	{ id: "c-form", label: "component: form", group: "Component" },
	{ id: "c-input", label: "component: input", group: "Component" },
	{ id: "c-menu", label: "component: menu", group: "Component" },
	{ id: "c-menubar", label: "component: menubar", group: "Component" },
	{ id: "c-meter", label: "component: meter", group: "Component" },
	{
		id: "c-navigation-menu",
		label: "component: navigation menu",
		group: "Component",
	},
	{
		id: "c-number-field",
		label: "component: number field",
		group: "Component",
	},
	{ id: "c-popover", label: "component: popover", group: "Component" },
	{
		id: "c-preview-card",
		label: "component: preview card",
		group: "Component",
	},
	{ id: "c-progress", label: "component: progress", group: "Component" },
	{ id: "c-radio", label: "component: radio", group: "Component" },
	{ id: "c-scroll-area", label: "component: scroll area", group: "Component" },
	{ id: "c-select", label: "component: select", group: "Component" },
	{ id: "c-separator", label: "component: separator", group: "Component" },
	{ id: "c-slider", label: "component: slider", group: "Component" },
	{ id: "c-switch", label: "component: switch", group: "Component" },
	{ id: "c-tabs", label: "component: tabs", group: "Component" },
	{ id: "c-toast", label: "component: toast", group: "Component" },
	{ id: "c-toggle", label: "component: toggle", group: "Component" },
	{
		id: "c-toggle-group",
		label: "component: toggle group",
		group: "Component",
	},
	{ id: "c-toolbar", label: "component: toolbar", group: "Component" },
	{ id: "c-tooltip", label: "component: tooltip", group: "Component" },
]

function groupTags(tags: Tag2[]): TagGroup[] {
	const groups: { [key: string]: Tag2[] } = {}
	tags.forEach((t) => {
		groups[t.group] ??= []
		groups[t.group].push(t)
	})
	const order = ["Type", "Component"]
	return order.map((value) => ({ value, items: groups[value] ?? [] }))
}

const groupedTags: TagGroup[] = groupTags(tagsData)

export default {
	title: "Components/Autocomplete",
	component: Autocomplete,
	subcomponents: { AutocompleteContent, AutocompleteInput, AutocompleteItem },
	parameters: {
		docs: {
			subtitle:
				"An autocomplete component that provides suggestions while typing.",
			description: {
				component:
					"The Autocomplete component enhances user input by providing real-time suggestions based on the entered text. It improves user experience by allowing users to quickly find and select options from a predefined list, reducing the need for typing and minimizing errors. The component is highly customizable, allowing developers to tailor its appearance and behavior to fit their application's needs.",
			},
		},
	},
	args: {
		autoHighlight: false,
		highlightItemOnHover: false,
		items: tagsData,
		keepHighlight: false,
		mode: "list",
		openOnInputClick: true,
	},
	argTypes: {
		items: {
			table: {
				disable: true,
			},
		},
		mode: {
			control: { type: "select" },
			options: ["list", "both", "inline", "none"],
		},
		autoHighlight: {
			control: { type: "select" },
			options: [true, false, "always"],
		},
	},
	render: (args) => (
		<Autocomplete {...args}>
			<AutocompleteInput placeholder="Search..." />
			<AutocompleteContent emptyText="No results found">
				<AutocompleteCollection>
					{(tag: Tag2) => (
						<AutocompleteItem key={tag.id} value={tag}>
							{tag.label}
						</AutocompleteItem>
					)}
				</AutocompleteCollection>
			</AutocompleteContent>
		</Autocomplete>
	),
} satisfies Meta<typeof Autocomplete>

type Story = StoryObj<typeof Autocomplete>

export const Default: Story = {}
export const Inline: Story = {
	args: {
		mode: "both",
	},
}
export const Grouped: Story = {
	args: {
		items: groupedTags,
		mode: "both",
	},
	render: (args) => (
		<Autocomplete {...args}>
			<AutocompleteInput placeholder="Search tags..." />
			<AutocompleteContent emptyText="No tags found">
				{groupedTags.map((group) => (
					<AutocompleteGroup items={group.items} key={group.value}>
						<AutocompleteGroupLabel>{group.value}</AutocompleteGroupLabel>
						<AutocompleteCollection>
							{(item: Tag2) => (
								<AutocompleteItem key={item.id} value={item}>
									{item.label}
								</AutocompleteItem>
							)}
						</AutocompleteCollection>
					</AutocompleteGroup>
				))}
			</AutocompleteContent>
		</Autocomplete>
	),
}
export const AutoHighlight: Story = {
	args: {
		autoHighlight: true,
	},
}
export const GridLayout: Story = {
	args: {
		grid: true,
		items: emojiGroups,
	},
	render: (args) => (
		<div className="mx-auto w-[16rem]">
			<div className="flex items-center gap-xs">
				<Input placeholder="Choose an emoji..." />
				<Autocomplete {...args} open={true}>
					<AutocompleteTrigger aria-label="Choose emoji">
						<Button className="shrink-0" size={"iconMedium"}>
							😀
						</Button>
					</AutocompleteTrigger>
					<AutocompleteGridContent emptyText="No emojis found">
						{emojiGroups.map((group) => (
							<AutocompleteGroup
								className={"block"}
								items={group.items}
								key={group.value}
							>
								<AutocompleteGroupLabel>{group.label}</AutocompleteGroupLabel>
								<div className="p-3xs" role="presentation">
									{chunkArray(group.items, 5).map((row, rowIdx) => (
										// biome-ignore lint/suspicious/noArrayIndexKey: << IGNORE >>
										<AutocompleteRow key={rowIdx}>
											{row.map((rowItem) => (
												<AutocompleteGridItem
													key={rowItem.emoji}
													value={rowItem}
												>
													{rowItem.emoji}
												</AutocompleteGridItem>
											))}
										</AutocompleteRow>
									))}
								</div>
							</AutocompleteGroup>
						))}
					</AutocompleteGridContent>
				</Autocomplete>
			</div>
		</div>
	),
}

export const LoadingState: Story = {
	render: (args) => (
		<Autocomplete {...args}>
			<AutocompleteInput placeholder="Search..." />
			<AutocompleteContent emptyText="No results found">
				<AutocompleteStatus>Loading...</AutocompleteStatus>
			</AutocompleteContent>
		</Autocomplete>
	),
}
