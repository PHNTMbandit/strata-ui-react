import { CaretUpDownIcon } from '@phosphor-icons/react'
import { Select } from './select'
import { SelectGroup } from './select-group'
import { SelectGroupLabel } from './select-group-label'
import { SelectIcon } from './select-icon'
import { SelectItem } from './select-item'
import { SelectList } from './select-list'
import { SelectPopup } from './select-popup'
import { SelectTrigger } from './select-trigger'
import { SelectValue } from './select-value'

import type { Meta, StoryObj } from '@storybook/react-vite'

const apples = [
  { label: 'Gala', value: 'gala' },
  { label: 'Fuji', value: 'fuji' },
  { label: 'Honeycrisp', value: 'honeycrisp' },
  { label: 'Granny Smith', value: 'granny-smith' },
  { label: 'Pink Lady', value: 'pink-lady' },
  { label: 'Red Delicious', value: 'red-delicious' },
  { label: 'Golden Delicious', value: 'golden-delicious' },
  { label: 'Braeburn', value: 'braeburn' },
  { label: 'McIntosh', value: 'mcintosh' },
  { label: 'Cortland', value: 'cortland' },
  { label: 'Empire', value: 'empire' },
]

const groupedProduce = [
  {
    value: 'Fruits',
    items: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'mango', label: 'Mango' },
      { value: 'kiwi', label: 'Kiwi' },
      { value: 'grape', label: 'Grape' },
      { value: 'orange', label: 'Orange' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'watermelon', label: 'Watermelon' },
    ],
  },
  {
    value: 'Vegetables',
    items: [
      { value: 'broccoli', label: 'Broccoli' },
      { value: 'carrot', label: 'Carrot' },
      { value: 'cauliflower', label: 'Cauliflower' },
      { value: 'cucumber', label: 'Cucumber' },
      { value: 'kale', label: 'Kale' },
      { value: 'pepper', label: 'Bell pepper' },
      { value: 'spinach', label: 'Spinach' },
      { value: 'zucchini', label: 'Zucchini' },
    ],
  },
]

export default {
  title: 'Components/Select',
  component: Select,
  subcomponents: {
    SelectIcon,
    SelectItem,
    SelectList,
    SelectPopup,
    SelectTrigger,
    SelectValue,
  },
  parameters: {
    docs: {
      subtitle: 'A select component that allows users to choose an option from a dropdown menu.',
      description: {
        component: 'A select component that allows users to choose an option from a dropdown menu.',
      },
    },
  },
  args: {
    items: apples,
  },
  render: (args) => (
    <Select {...args}>
      <SelectTrigger>
        <SelectValue placeholder="Select an apple" />
        <SelectIcon>
          <CaretUpDownIcon weight="bold" />
        </SelectIcon>
      </SelectTrigger>
      <SelectPopup>
        <SelectList>
          <SelectGroup>
            {apples.map(({ label, value }) => (
              <SelectItem key={label} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectList>
      </SelectPopup>
    </Select>
  ),
} satisfies Meta<typeof Select>

type Story = StoryObj<typeof Select>

export const Default: Story = {}

export const Multiple: Story = {
  args: {
    multiple: true,
  },
}

export const Grouped: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger>
        <SelectValue placeholder="Select apples" />
        <SelectIcon>
          <CaretUpDownIcon weight="bold" />
        </SelectIcon>
      </SelectTrigger>
      <SelectPopup sideOffset={8} alignItemWithTrigger={false}>
        <SelectList>
          {groupedProduce.map((group, index) => (
            <SelectGroup key={index}>
              <SelectGroupLabel>{group.value}</SelectGroupLabel>
              {group.items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          ))}
        </SelectList>
      </SelectPopup>
    </Select>
  ),
}
