import { CaretUpDownIcon } from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./select";
import { SelectIcon } from "./select-icon";
import { SelectItem } from "./select-item";
import { SelectPopup } from "./select-popup";
import { SelectTrigger } from "./select-trigger";
import { SelectValue } from "./select-value";

const apples = [
  { label: "Gala", value: "gala" },
  { label: "Fuji", value: "fuji" },
  { label: "Honeycrisp", value: "honeycrisp" },
  { label: "Granny Smith", value: "granny-smith" },
  { label: "Pink Lady", value: "pink-lady" },
  { label: "Red Delicious", value: "red-delicious" },
  { label: "Golden Delicious", value: "golden-delicious" },
  { label: "Braeburn", value: "braeburn" },
  { label: "McIntosh", value: "mcintosh" },
  { label: "Cortland", value: "cortland" },
  { label: "Empire", value: "empire" },
];

export default {
  title: "Components/Select",
  component: Select,
  subcomponents: {
    SelectIcon,
    SelectItem,
    SelectPopup,
    SelectTrigger,
    SelectValue,
  },
  parameters: {
    docs: {
      subtitle: "A select component that allows users to choose an option from a dropdown menu.",
      description: {
        component: "A select component that allows users to choose an option from a dropdown menu.",
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
        {apples.map(({ label, value }) => (
          <SelectItem key={label} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectPopup>
    </Select>
  ),
} satisfies Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const Multiple: Story = {
  args: {
    multiple: true,
  },
};
