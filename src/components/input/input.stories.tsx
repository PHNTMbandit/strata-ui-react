import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./input";

export default {
  title: "Components/Input",
  component: Input,
  parameters: {
    docs: {
      subtitle: "A versatile text input component for user data entry.",
      description: {
        component:
          "The Input component is a versatile and customizable text input field that allows users to enter and edit text. It supports various features such as placeholder text, labels, icons, and validation states. The Input component is designed to be accessible and user-friendly, making it suitable for a wide range of applications including forms, search bars, and data entry fields.",
      },
    },
  },
  args: {
    placeholder: "Enter text...",
    leadingIcon: MagnifyingGlassIcon,
  },
  argTypes: {
    leadingIcon: { control: false },
  },
  render: (args: React.ComponentProps<typeof Input>) => (
    <Input {...args} id="input" leadingIcon={args.leadingIcon ? args.leadingIcon : undefined} />
  ),
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    leadingIcon: undefined,
  },
};

export const WithIcon: Story = {
  args: {
    leadingIcon: MagnifyingGlassIcon,
  },
};

export const Colour: Story = {
  args: {
    type: "color",
    leadingIcon: undefined,
  },
};
