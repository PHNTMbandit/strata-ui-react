import { MagnifyingGlassIcon, SpinnerGapIcon } from '@phosphor-icons/react'
import React from 'react'
import { Button } from '../button'
import { Input } from '../input'
import { Autocomplete } from './autocomplete'
import { AutocompleteCollection } from './autocomplete-collection'
import { AutocompleteContent } from './autocomplete-content'
import { AutocompleteGridContent } from './autocomplete-grid-content'
import { AutocompleteGridItem } from './autocomplete-grid-item'
import { AutocompleteGroup } from './autocomplete-group'
import { AutocompleteGroupLabel } from './autocomplete-group-label'
import { AutocompleteInputGroup } from './autocomplete-input-group'
import { AutocompleteInputGroupAddon } from './autocomplete-input-group-addon'
import { AutocompleteInputGroupInput } from './autocomplete-input-group-input'
import { AutocompleteItem } from './autocomplete-item'
import { AutocompleteRow } from './autocomplete-row'
import { AutocompleteStatus } from './autocomplete-status'
import { AutocompleteTrigger } from './autocomplete-trigger'
import { useFilter } from './autocomplete.types'

import type { Meta, StoryObj } from '@storybook/react-vite'

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
    label: 'Smileys & Emotion',
    emojis: [
      { emoji: '😀', name: 'grinning face' },
      { emoji: '😃', name: 'grinning face with big eyes' },
      { emoji: '😄', name: 'grinning face with smiling eyes' },
      { emoji: '😁', name: 'beaming face with smiling eyes' },
      { emoji: '😆', name: 'grinning squinting face' },
      { emoji: '😅', name: 'grinning face with sweat' },
      { emoji: '🤣', name: 'rolling on the floor laughing' },
      { emoji: '😂', name: 'face with tears of joy' },
      { emoji: '🙂', name: 'slightly smiling face' },
      { emoji: '🙃', name: 'upside-down face' },
      { emoji: '😉', name: 'winking face' },
      { emoji: '😊', name: 'smiling face with smiling eyes' },
      { emoji: '😇', name: 'smiling face with halo' },
      { emoji: '🥰', name: 'smiling face with hearts' },
      { emoji: '😍', name: 'smiling face with heart-eyes' },
      { emoji: '🤩', name: 'star-struck' },
      { emoji: '😘', name: 'face blowing a kiss' },
      { emoji: '😗', name: 'kissing face' },
      { emoji: '☺️', name: 'smiling face' },
      { emoji: '😚', name: 'kissing face with closed eyes' },
      { emoji: '😙', name: 'kissing face with smiling eyes' },
      { emoji: '🥲', name: 'smiling face with tear' },
      { emoji: '😋', name: 'face savoring food' },
      { emoji: '😛', name: 'face with tongue' },
      { emoji: '😜', name: 'winking face with tongue' },
      { emoji: '🤪', name: 'zany face' },
      { emoji: '😝', name: 'squinting face with tongue' },
      { emoji: '🤑', name: 'money-mouth face' },
      { emoji: '🤗', name: 'hugging face' },
      { emoji: '🤭', name: 'face with hand over mouth' },
    ],
  },
  {
    label: 'Animals & Nature',
    emojis: [
      { emoji: '🐶', name: 'dog face' },
      { emoji: '🐱', name: 'cat face' },
      { emoji: '🐭', name: 'mouse face' },
      { emoji: '🐹', name: 'hamster' },
      { emoji: '🐰', name: 'rabbit face' },
      { emoji: '🦊', name: 'fox' },
      { emoji: '🐻', name: 'bear' },
      { emoji: '🐼', name: 'panda' },
      { emoji: '🐨', name: 'koala' },
      { emoji: '🐯', name: 'tiger face' },
      { emoji: '🦁', name: 'lion' },
      { emoji: '🐮', name: 'cow face' },
      { emoji: '🐷', name: 'pig face' },
      { emoji: '🐽', name: 'pig nose' },
      { emoji: '🐸', name: 'frog' },
      { emoji: '🐵', name: 'monkey face' },
      { emoji: '🙈', name: 'see-no-evil monkey' },
      { emoji: '🙉', name: 'hear-no-evil monkey' },
      { emoji: '🙊', name: 'speak-no-evil monkey' },
      { emoji: '🐒', name: 'monkey' },
      { emoji: '🐔', name: 'chicken' },
      { emoji: '🐧', name: 'penguin' },
      { emoji: '🐦', name: 'bird' },
      { emoji: '🐤', name: 'baby chick' },
      { emoji: '🐣', name: 'hatching chick' },
      { emoji: '🐥', name: 'front-facing baby chick' },
      { emoji: '🦆', name: 'duck' },
      { emoji: '🦅', name: 'eagle' },
      { emoji: '🦉', name: 'owl' },
      { emoji: '🦇', name: 'bat' },
    ],
  },
  {
    label: 'Food & Drink',
    emojis: [
      { emoji: '🍎', name: 'red apple' },
      { emoji: '🍏', name: 'green apple' },
      { emoji: '🍊', name: 'tangerine' },
      { emoji: '🍋', name: 'lemon' },
      { emoji: '🍌', name: 'banana' },
      { emoji: '🍉', name: 'watermelon' },
      { emoji: '🍇', name: 'grapes' },
      { emoji: '🍓', name: 'strawberry' },
      { emoji: '🫐', name: 'blueberries' },
      { emoji: '🍈', name: 'melon' },
      { emoji: '🍒', name: 'cherries' },
      { emoji: '🍑', name: 'peach' },
      { emoji: '🥭', name: 'mango' },
      { emoji: '🍍', name: 'pineapple' },
      { emoji: '🥥', name: 'coconut' },
      { emoji: '🥝', name: 'kiwi fruit' },
      { emoji: '🍅', name: 'tomato' },
      { emoji: '🍆', name: 'eggplant' },
      { emoji: '🥑', name: 'avocado' },
      { emoji: '🥦', name: 'broccoli' },
      { emoji: '🥬', name: 'leafy greens' },
      { emoji: '🥒', name: 'cucumber' },
      { emoji: '🌶️', name: 'hot pepper' },
      { emoji: '🫑', name: 'bell pepper' },
      { emoji: '🌽', name: 'ear of corn' },
      { emoji: '🥕', name: 'carrot' },
      { emoji: '🫒', name: 'olive' },
      { emoji: '🧄', name: 'garlic' },
      { emoji: '🧅', name: 'onion' },
      { emoji: '🥔', name: 'potato' },
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
  group: 'Type' | 'Component'
}

interface TagGroup {
  value: string
  items: Tag2[]
}

const tagsData: Tag2[] = [
  { id: 't1', label: 'feature', group: 'Type' },
  { id: 't2', label: 'fix', group: 'Type' },
  { id: 't3', label: 'bug', group: 'Type' },
  { id: 't4', label: 'docs', group: 'Type' },
  { id: 't5', label: 'internal', group: 'Type' },
  { id: 't6', label: 'mobile', group: 'Type' },
  { id: 'c-accordion', label: 'component: accordion', group: 'Component' },
  {
    id: 'c-alert-dialog',
    label: 'component: alert dialog',
    group: 'Component',
  },
  {
    id: 'c-autocomplete',
    label: 'component: autocomplete',
    group: 'Component',
  },
  { id: 'c-avatar', label: 'component: avatar', group: 'Component' },
  { id: 'c-checkbox', label: 'component: checkbox', group: 'Component' },
  {
    id: 'c-checkbox-group',
    label: 'component: checkbox group',
    group: 'Component',
  },
  { id: 'c-collapsible', label: 'component: collapsible', group: 'Component' },
  { id: 'c-combobox', label: 'component: combobox', group: 'Component' },
  {
    id: 'c-context-menu',
    label: 'component: context menu',
    group: 'Component',
  },
  { id: 'c-dialog', label: 'component: dialog', group: 'Component' },
  { id: 'c-field', label: 'component: field', group: 'Component' },
  { id: 'c-fieldset', label: 'component: fieldset', group: 'Component' },
  {
    id: 'c-filterable-menu',
    label: 'component: filterable menu',
    group: 'Component',
  },
  { id: 'c-form', label: 'component: form', group: 'Component' },
  { id: 'c-input', label: 'component: input', group: 'Component' },
  { id: 'c-menu', label: 'component: menu', group: 'Component' },
  { id: 'c-menubar', label: 'component: menubar', group: 'Component' },
  { id: 'c-meter', label: 'component: meter', group: 'Component' },
  {
    id: 'c-navigation-menu',
    label: 'component: navigation menu',
    group: 'Component',
  },
  {
    id: 'c-number-field',
    label: 'component: number field',
    group: 'Component',
  },
  { id: 'c-popover', label: 'component: popover', group: 'Component' },
  {
    id: 'c-preview-card',
    label: 'component: preview card',
    group: 'Component',
  },
  { id: 'c-progress', label: 'component: progress', group: 'Component' },
  { id: 'c-radio', label: 'component: radio', group: 'Component' },
  { id: 'c-scroll-area', label: 'component: scroll area', group: 'Component' },
  { id: 'c-select', label: 'component: select', group: 'Component' },
  { id: 'c-separator', label: 'component: separator', group: 'Component' },
  { id: 'c-slider', label: 'component: slider', group: 'Component' },
  { id: 'c-switch', label: 'component: switch', group: 'Component' },
  { id: 'c-tabs', label: 'component: tabs', group: 'Component' },
  { id: 'c-toast', label: 'component: toast', group: 'Component' },
  { id: 'c-toggle', label: 'component: toggle', group: 'Component' },
  {
    id: 'c-toggle-group',
    label: 'component: toggle group',
    group: 'Component',
  },
  { id: 'c-toolbar', label: 'component: toolbar', group: 'Component' },
  { id: 'c-tooltip', label: 'component: tooltip', group: 'Component' },
]

function groupTags(tags: Tag2[]): TagGroup[] {
  const groups: { [key: string]: Tag2[] } = {}
  tags.forEach((t) => {
    groups[t.group] ??= []
    groups[t.group].push(t)
  })
  const order = ['Type', 'Component']
  return order.map((value) => ({ value, items: groups[value] ?? [] }))
}

const groupedTags: TagGroup[] = groupTags(tagsData)

export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  subcomponents: {
    AutocompleteContent,
    AutocompleteInputGroupInput,
    AutocompleteItem,
    AutocompleteGroup,
    AutocompleteGroupLabel,
    AutocompleteGridContent,
    AutocompleteGridItem,
    AutocompleteRow,
    AutocompleteStatus,
    AutocompleteTrigger,
    AutocompleteInputGroupAddon,
  },
  parameters: {
    docs: {
      subtitle: 'An autocomplete component that provides suggestions while typing.',
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
    mode: 'list',
    openOnInputClick: true,
  },
  argTypes: {
    items: {
      table: {
        disable: true,
      },
    },
    mode: {
      control: { type: 'select' },
      options: ['list', 'both', 'inline', 'none'],
    },
    autoHighlight: {
      control: { type: 'select' },
      options: [true, false, 'always'],
    },
  },
  render: (args) => (
    <Autocomplete {...args}>
      <AutocompleteInputGroup>
        <AutocompleteInputGroupAddon>
          <MagnifyingGlassIcon weight="bold" />
        </AutocompleteInputGroupAddon>
        <AutocompleteInputGroupInput placeholder="Search..." />
      </AutocompleteInputGroup>
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
    mode: 'both',
  },
}
export const Grouped: Story = {
  args: {
    items: groupedTags,
    mode: 'both',
  },
  render: (args) => (
    <Autocomplete {...args}>
      <AutocompleteInputGroupInput placeholder="Search tags..." />
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
            <Button className="shrink-0" size={'iconMedium'}>
              😀
            </Button>
          </AutocompleteTrigger>
          <AutocompleteGridContent emptyText="No emojis found">
            {emojiGroups.map((group) => (
              <AutocompleteGroup className={'block'} items={group.items} key={group.value}>
                <AutocompleteGroupLabel>{group.label}</AutocompleteGroupLabel>
                <div className="p-3xs" role="presentation">
                  {chunkArray(group.items, 5).map((row, rowIdx) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: << IGNORE >>
                    <AutocompleteRow key={rowIdx}>
                      {row.map((rowItem) => (
                        <AutocompleteGridItem key={rowItem.emoji} value={rowItem}>
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
  render: () => <LoadingStateRender />,
}

interface Movie {
  id: string
  title: string
  year: number
}

const top100Movies: Movie[] = [
  { id: '1', title: 'The Shawshank Redemption', year: 1994 },
  { id: '2', title: 'The Godfather', year: 1972 },
  { id: '3', title: 'The Dark Knight', year: 2008 },
  { id: '4', title: 'The Godfather Part II', year: 1974 },
  { id: '5', title: '12 Angry Men', year: 1957 },
  {
    id: '6',
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { id: '7', title: "Schindler's List", year: 1993 },
  { id: '8', title: 'Pulp Fiction', year: 1994 },
  {
    id: '9',
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  { id: '10', title: 'The Good, the Bad and the Ugly', year: 1966 },
  { id: '11', title: 'Forrest Gump', year: 1994 },
  { id: '12', title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { id: '13', title: 'Fight Club', year: 1999 },
  { id: '14', title: 'Inception', year: 2010 },
  {
    id: '15',
    title: 'Star Wars: Episode V – The Empire Strikes Back',
    year: 1980,
  },
  { id: '16', title: 'The Matrix', year: 1999 },
  { id: '17', title: 'Goodfellas', year: 1990 },
  { id: '18', title: 'Interstellar', year: 2014 },
  { id: '19', title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { id: '20', title: 'Se7en', year: 1995 },
  { id: '21', title: "It's a Wonderful Life", year: 1946 },
  { id: '22', title: 'The Silence of the Lambs', year: 1991 },
  { id: '23', title: 'Seven Samurai', year: 1954 },
  { id: '24', title: 'Saving Private Ryan', year: 1998 },
  { id: '25', title: 'City of God', year: 2002 },
  { id: '26', title: 'Life Is Beautiful', year: 1997 },
  { id: '27', title: 'The Green Mile', year: 1999 },
  { id: '28', title: 'Star Wars: Episode IV – A New Hope', year: 1977 },
  { id: '29', title: 'Terminator 2: Judgment Day', year: 1991 },
  { id: '30', title: 'Back to the Future', year: 1985 },
  { id: '31', title: 'Spirited Away', year: 2001 },
  { id: '32', title: 'The Pianist', year: 2002 },
  { id: '33', title: 'Psycho', year: 1960 },
  { id: '34', title: 'Parasite', year: 2019 },
  { id: '35', title: 'Gladiator', year: 2000 },
  { id: '36', title: 'Léon: The Professional', year: 1994 },
  { id: '37', title: 'American History X', year: 1998 },
  { id: '38', title: 'The Departed', year: 2006 },
  { id: '39', title: 'Whiplash', year: 2014 },
  { id: '40', title: 'The Prestige', year: 2006 },
]

async function searchMovies(
  query: string,
  filter: (item: string, query: string) => boolean,
): Promise<{ movies: Movie[]; error: string | null }> {
  // Simulate network delay
  await new Promise((resolve) => {
    setTimeout(resolve, Math.random() * 500 + 100)
  })

  // Simulate occasional network errors (1% chance)
  if (Math.random() < 0.01 || query === 'will_error') {
    return {
      movies: [],
      error: 'Failed to fetch movies. Please try again.',
    }
  }

  const movies = top100Movies.filter(
    (movie) => filter(movie.title, query) || filter(movie.year.toString(), query),
  )

  return {
    movies,
    error: null,
  }
}

const LoadingStateRender = () => {
  const [searchValue, setSearchValue] = React.useState('')
  const [searchResults, setSearchResults] = React.useState<Movie[]>([])
  const [error, setError] = React.useState<string | null>(null)
  const [isPending, startTransition] = React.useTransition()

  const { contains } = useFilter()

  const abortControllerRef = React.useRef<AbortController | null>(null)

  function getStatus(): React.ReactNode | null {
    if (isPending) {
      return (
        <div className="flex items-center gap-3xs">
          <SpinnerGapIcon aria-hidden className="size-xs animate-spin" weight="bold" />
          Searching…
        </div>
      )
    }

    if (error) {
      return error
    }

    if (searchValue === '') {
      return null
    }

    if (searchResults.length === 0) {
      return `Movie or year "${searchValue}" does not exist in the Top 100 IMDb movies`
    }

    return `${searchResults.length} result${searchResults.length === 1 ? '' : 's'} found`
  }

  const status = getStatus()

  return (
    <Autocomplete
      filter={null}
      items={searchResults}
      itemToStringValue={(item) => (item as Movie).title}
      onValueChange={(nextSearchValue) => {
        setSearchValue(nextSearchValue)

        const controller = new AbortController()
        abortControllerRef.current?.abort()
        abortControllerRef.current = controller

        if (nextSearchValue === '') {
          setSearchResults([])
          setError(null)
          return
        }

        startTransition(async () => {
          setError(null)

          const result = await searchMovies(nextSearchValue, contains)
          if (controller.signal.aborted) {
            return
          }

          startTransition(() => {
            setSearchResults(result.movies)
            setError(result.error)
          })
        })
      }}
      value={searchValue}
    >
      <AutocompleteInputGroupInput placeholder="e.g. Pulp Fiction or 1994" />
      <AutocompleteContent emptyText="">
        <AutocompleteStatus>{status}</AutocompleteStatus>
        <AutocompleteCollection>
          {(movie: Movie) => (
            <AutocompleteItem key={movie.id} value={movie}>
              <div className="flex w-full flex-col gap-3xs">
                <div className="leading-xl font-medium">{movie.title}</div>
                <div className="text-sm leading-lg opacity-80">{movie.year}</div>
              </div>
            </AutocompleteItem>
          )}
        </AutocompleteCollection>
      </AutocompleteContent>
    </Autocomplete>
  )
}
