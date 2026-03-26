import { HeartIcon } from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toggle } from "./toggle";

export default {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    docs: {
      subtitle: "A component for toggling between two states",
      description: {
        component:
          "The Toggle component allows users to switch between two states, such as on and off. It is commonly used in settings and preferences to enable or disable features.",
      },
    },
  },
  args: {
    size: "medium",
    tone: "brand",
  },
  argTypes: {
    size: {
      options: ["medium", "iconMedium"],
      control: { type: "select" },
    },
    tone: {
      options: ["brand", "accent", "neutral", "error", "info", "success", "warning"],
      control: { type: "select" },
      description: "The tone of the toggle, which determines its color scheme.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "brand" },
      },
    },
  },
  render: (args) => (
    <Toggle {...args}>
      {({ pressed }) => (
        <>
          {pressed ? (
            <>
              <HeartIcon weight="fill" />
              Liked
            </>
          ) : (
            <>
              <HeartIcon weight="bold" />
              Like
            </>
          )}
        </>
      )}
    </Toggle>
  ),
} satisfies Meta<typeof Toggle>;

type Story = StoryObj<typeof Toggle>;

export const Brand: Story = {};

export const Accent: Story = {
  args: {
    tone: "accent",
  },
};
export const Neutral: Story = {
  args: {
    tone: "neutral",
  },
};
export const ErrorTone: Story = {
  args: {
    tone: "error",
  },
};

export const Info: Story = {
  args: {
    tone: "info",
  },
};

export const Success: Story = {
  args: {
    tone: "success",
  },
};
export const Warning: Story = {
  args: {
    tone: "warning",
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
export const Small: Story = {
  args: {
    size: "small",
  },
};
export const Medium: Story = {
  args: {
    size: "medium",
  },
};
export const Large: Story = {
  args: {
    size: "large",
  },
};
export const IconSmall: Story = {
  args: {
    size: "iconSmall",
  },
  render: (args) => (
    <Toggle {...args}>
      {({ pressed }) => <>{pressed ? <HeartIcon weight="fill" /> : <HeartIcon weight="bold" />}</>}
    </Toggle>
  ),
};
export const IconMedium: Story = {
  args: {
    size: "iconMedium",
  },
  render: (args) => (
    <Toggle {...args}>
      {({ pressed }) => <>{pressed ? <HeartIcon weight="fill" /> : <HeartIcon weight="bold" />}</>}
    </Toggle>
  ),
};
export const IconLarge: Story = {
  args: {
    size: "iconLarge",
  },
  render: (args) => (
    <Toggle {...args}>
      {({ pressed }) => <>{pressed ? <HeartIcon weight="fill" /> : <HeartIcon weight="bold" />}</>}
    </Toggle>
  ),
};
