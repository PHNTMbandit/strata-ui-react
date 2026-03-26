import { CaretDownIcon, MinusIcon, PlusIcon } from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../button/button";
import { Input } from "../input/index";
import { ButtonGroup } from "./button-group";

export default {
  title: "Components/Button Group",
  component: ButtonGroup,
  parameters: {
    docs: {
      subtitle: "A component for grouping buttons together.",
      description: {
        component:
          "The Button Group component is used to group related buttons together, providing a cohesive user interface. It supports both horizontal and vertical orientations, allowing for flexible layouts. The component can be easily customized with additional styles and properties as needed.",
      },
    },
  },
  argTypes: {
    orientation: {
      description: "The orientation of the button group.",
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
    },
    split: {
      description: "The type of split between buttons.",
      control: { type: "radio" },
      options: ["gap", "separator"],
    },
  },
  args: {
    orientation: "horizontal",
    split: "gap",
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>
  ),
} satisfies Meta<typeof ButtonGroup>;

type Story = StoryObj<typeof ButtonGroup>;

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
  },
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>
        <PlusIcon weight="bold" />
      </Button>
      <Button>
        <MinusIcon weight="bold" />
      </Button>
    </ButtonGroup>
  ),
};

export const Gap: Story = {
  args: {
    split: "gap",
  },
};

export const Separator: Story = {
  args: {
    split: "separator",
  },
};

export const Solid: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="solid">Button 1</Button>
      <Button variant="solid">Button 2</Button>
      <Button variant="solid">Button 3</Button>
    </ButtonGroup>
  ),
};

export const InputWithButton: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Input placeholder="Search..." />
      <Button tone="neutral">
        <PlusIcon weight="bold" />
      </Button>
    </ButtonGroup>
  ),
};

export const MixedTextIcon: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Open</Button>
      <Button size={"iconMedium"}>
        <CaretDownIcon weight="bold" />
      </Button>
    </ButtonGroup>
  ),
};
